import React, { Component } from 'react';
import {HandyMan} from './HandyMan';

const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  };

class HandyManList extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            handyManList: [{handyManName: 'Owen', dateCreated: new Date(), handyManTitle: 'Network Engineer', body: 'Network Engineer and currently single.'},
                            {handyManName: 'Rameen', dateCreated: new Date(2018, 11, 24, 10, 33, 30, 0), handyManTitle: 'Software Engineer', body: 'Network Engineer and currently single.'}]
        }
    }
    render() {
        return (
            <div>
            <h1>Available Handymen</h1>
                    {this.state.handyManList.map(handyman => (
                            <HandyMan handyMan={handyman} />
                    ))}
            </div>
        )
    }
}

export default HandyManList;