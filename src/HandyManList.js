import React, { Component } from 'react';
import { HandyMan } from './HandyMan';
import Input from '@material-ui/core/Input';


class HandyManList extends Component {
    constructor(props) {
        super(props)
        this.state = {
<<<<<<< HEAD
            searchString: '',
            distance: 50,
||||||| merged common ancestors
            searchString: '',
=======
            searchString: this.props.searchString || '',
>>>>>>> f672149bf3cf260cbc53d09012589a6a552c14d2
            handyManList: [
<<<<<<< HEAD
                { id: 1, handyManName: 'Owen', dateCreated: new Date(), handyManTitle: 'Network Engineer', body: 'Network Engineer and currently single.', email: 'Owenli@gmail.com', distance: 25 },
                { id: 2, handyManName: 'Rameen', dateCreated: new Date(), handyManTitle: 'Software Engineer', body: 'React Dev.', email: 'RameenRastan@gmail.com', distance: 70 },
                { id: 3, handyManName: 'Jared', dateCreated: new Date(), handyManTitle: 'Coder', body: 'React Noob.', email: 'jaredWoo@live.ca', distance: 100 },
                { id: 4, handyManName: 'Wilson', dateCreated: new Date(), handyManTitle: 'Hacker', body: 'React noob', email: 'wilsonla@live.ca', distance: 50 }
||||||| merged common ancestors
                { id:1, handyManName: 'Owen', dateCreated: new Date(), handyManTitle: 'Network Engineer', body: 'Network Engineer and currently single.', email: 'Owenli@gmail.com'},
                { id:2, handyManName: 'Rameen', dateCreated: new Date(), handyManTitle: 'Software Engineer', body: 'React Dev.', email: 'RameenRastan@gmail.com'},
                { id:3, handyManName: 'Jared', dateCreated: new Date(), handyManTitle: 'Coder', body: 'React Noob.', email: 'jaredWoo@live.ca'},
                { id:4, handyManName: 'Wilson', dateCreated: new Date(), handyManTitle: 'Hacker', body: 'React noob', email: 'wilsonla@live.ca'}
=======
                { id:1, handyManName: 'Owen', dateCreated: new Date(), handyManTitle: 'Network Engineer', body: 'Network Engineer and currently single.', email: 'Owenli@gmail.com'},
                { id:2, handyManName: 'Rameen', dateCreated: new Date(), handyManTitle: 'Software Engineer', body: 'React Dev.', email: 'RameenRastan@gmail.com'},
                { id:3, handyManName: 'Jared', dateCreated: new Date(), handyManTitle: 'Coder', body: 'React Noob.', email: 'jaredWoo@live.ca'},
                { id:4, handyManName: 'Wilson', dateCreated: new Date(), handyManTitle: 'Hacker', body: 'React noob', email: 'wilsonla@live.ca'},
                { id:5, handyManName: 'car', dateCreated: new Date(), handyManTitle: 'carman', body: 'car noob', email: 'car@live.ca'}
>>>>>>> f672149bf3cf260cbc53d09012589a6a552c14d2

            ],
            filterType: "name"
        };
        this.handleFilterSearch = this.handleFilterSearch.bind(this)
        this.handleFilterType = this.handleFilterType.bind(this)
        this.handleChangeDistance = this.handleChangeDistance.bind(this)
    }
    handleFilterSearch(e) {
        console.log("test")
        this.setState({
            searchString: e.target.value
        })
    }

    handleFilterType(event) {
        console.log(event.target.value);
        this.setState({ filterType: event.target.value })
    }

    handleChangeDistance(event) {
        this.setState({
            distance: event.target.value
        })
    }
    render() {
        const filteredList = this.state.handyManList.filter(handyman => {
            switch (this.state.filterType) {
                case "name":
                    return handyman.handyManName.toUpperCase().includes(this.state.searchString.toUpperCase())
                case "title":
                    return handyman.handyManTitle.toUpperCase().includes(this.state.searchString.toUpperCase())
                case "distance":
                    return handyman.distance <= parseInt(this.state.distance)

            }
        })
        return (
            <div>
                <form>
                    {this.state.filterType === "distance" ?
                        <select onChange={this.handleChangeDistance.bind(this)} placeholder="Select a person" value={this.state.distance} defaultValue={this.state.distance}>
                            <option value="50">50 km</option>
                            <option value="100">100 km</option>
                            <option value="500">500 km</option>
                        </select>
                        :
                        <Input id="filter" type="text" value={this.state.searchString} onChange={this.handleFilterSearch.bind(this)} placeholder="Find HandyMan"></Input>
                    }
                    <select onChange={this.handleFilterType} placeholder="Select a person" value={this.state.filterType} defaultValue={this.state.filterType}>
                        <option value="name">HandyMan Name</option>
                        <option value="title">HandyMan Title</option>
                        <option value="distance">HandyMan Distance</option>
                    </select>
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