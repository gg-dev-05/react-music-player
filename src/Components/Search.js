import React from 'react'
import '../css/search.css'

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            results: {},
            loading: false,
            message: '',
        };
    }

    render() {
        return (
            <div class="container ">
                <div class="d-flex align-items-center vh-100">
                    <span class="ml-2 blue h-25 w-100 d-flex align-items-center">
                        <input class="green h-50 w-100 d-flex align-items-center border border-primary rounded px-4 py-1" type="text"></input>
                    </span>

                </div>
            </div>
        );
    }
}

export default Search;