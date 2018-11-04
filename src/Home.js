import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';
import JobPosting from './JobPosting';
import HandyManList  from './HandyManList'

const Clarifai = require('clarifai');
const app = new Clarifai.App({
 apiKey: 'd72f965e616b4c3b9d9a39d3936caa3e'
});


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gotResponse: false,
            text: '',
            api_resp: '',
            img: ''
        }
        this.onClickSubmit = this.onClickSubmit.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
    }

    onClickSubmit = () => {
        app.models.predict(Clarifai.GENERAL_MODEL, this.state.text).then(
            (response) => {
              this.setState({gotResponse: true, api_resp: response.outputs[0].data.concepts[0].name});
              console.log(response);
            },
            (err) => {
              alert(err);
            }
          ).catch(err => {
              console.log(err);
          });
    }

    onInputChange = (e) => {
        this.setState({
            text: e.target.value,
            img: e.target.value
        })
    }
    
    render() {

        if (this.state.gotResponse) {
            return (
                <HandyManList searchString={this.state.api_resp}></HandyManList>
            )
        }

        return (
            <div style={{textAlign: "center", fontSize: "50px" , paddingTop: "50px"}}>HandyMan Dashboard 
            <br /><br />
            <img style={{width: "50%"}} src="/HandyManLogo.jpg" alt="text"></img>
            <img style={{width: "25%"}} src={this.state.img} alt="text"></img>
            <Input onChange={(text) => this.onInputChange(text)} placeholder="URL" ></Input>
            <Button onClick={() => this.onClickSubmit()}>INVOKE_API</Button>
            </div>


        )
    }
}

export default Home;