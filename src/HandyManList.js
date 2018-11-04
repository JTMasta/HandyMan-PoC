import React, { Component } from 'react';
import {HandyMan} from './HandyMan';

class HandyManList extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            searchString: '',
            handyManList: [
                { id:1, handyManName: 'Owen', dateCreated: "6:55PM November 3, 2018" , handyManTitle: 'Network Engineer', body: 'Network Engineer and currently single.'},
                { id:2, handyManName: 'Rameen', dateCreated: "6:40PM November 3, 2018", handyManTitle: 'Software Engineer', body: 'React Dev.'},
                { id:3, handyManName: 'Jared', dateCreated: "6:35PM November 3, 2018", handyManTitle: 'Coder', body: 'React Noob.'},
                { id:4, handyManName: 'Wilson', dateCreated: "6:25PM November 3, 2018", handyManTitle: 'Hacker', body: 'React noob'}
            ],
            filterType: ""
        };
        this.handleFilterSearch = this.handleFilterSearch.bind(this)
    }
    handleFilterSearch(e) {
        console.log("test")
        this.setState({
            searchString: e.target.value
        })
    }

    handleFilterType() {

    }

    render() {
        const filteredList = this.state.handyManList.filter(handyman => {
            return handyman.handyManName.toUpperCase().includes(this.state.searchString.toUpperCase())
        })
        return (
            <div>
            <form>
                <input id="filter" type="text" value={this.state.searchString} onChange={this.handleFilterSearch.bind(this)} />
            </form>
            <h1>Available Handymen</h1>
                    {filteredList.map(handyman => (
                            <div key={handyman.id}>
                                <HandyMan handyMan={handyman} />
                            </div>
                    ))}
            </div>
        )
    }
}

export default HandyManList;