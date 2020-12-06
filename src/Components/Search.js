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
            .then((res) => {
                console.log(res)
                this.setState({
                    results: res.data.data
                })
            })
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

    renderSearchResults = () => {
        const { results } = this.state;

        if (Object.keys(results).length && results.length) {
            return (
                <div className="container row">
                    { results.map(result => {
                        return (
                            <a key={result.id} href={result.preview} className="col-md-6">
                                <h6 className="image-username">{result.artist.picture_medium}</h6>
                                <div className="image-wrapper">
                                    <img className="image" src={result.album.cover_small} alt={`${result.username} image`} />
                                </div>
                            </a>
                        )
                    })}

                </div>
            )
        }
    };

    render() {
        return (
            <div className="container fill d-flex flex-column align-items-center">
                <div className="ml-2 h-25 w-100 mb-5">
                    <input className="h-50 w-100 d-flex align-items-center border border-primary rounded px-4 py-1" type="text"
                        id="search-input"
                        placeholder="Search..."
                        onChange={this.handleOnInputChange}
                    />
                </div>
                {this.renderSearchResults()}


            </div>
        );
    }
}

export default Search;