import React from 'react'
import '../css/search.css'
import axios from 'axios'

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            results: {},
            loading: false,
            message: '',
        };

        this.cancel = '';
    }

    fetchSearchResults = (query) => {
        const searchUrl = `http://localhost:5000/search/${query}`;
        if (this.cancel) {
            this.cancel.cancel();
            console.log("CANCELLED")
        }
        this.cancel = axios.CancelToken.source();

        axios.get(searchUrl, {
            cancelToken: this.cancel.token,
        })
            .then((res) => console.log(res))
            .catch((err) => {
                if (axios.isCancel(err) || err) {
                    this.setState({
                        loading: false,
                        message: 'Failed to fetch'
                    })
                }
            })
    }

    handleOnInputChange = (event) => {
        const query = event.target.value;
        console.log(query)
        this.setState({ query, loading: true, message: '' });
        this.fetchSearchResults(query)
    };

    render() {
        return (
            <div className="container ">
                <div className="d-flex align-items-center vh-100">
                    <span className="ml-2 h-25 w-100 d-flex align-items-center">
                        <input className="h-50 w-100 d-flex align-items-center border border-primary rounded px-4 py-1" type="text"
                            id="search-input"
                            placeholder="Search..."
                            onChange={this.handleOnInputChange}
                        ></input>
                    </span>

                </div>
            </div>
        );
    }
}

export default Search;