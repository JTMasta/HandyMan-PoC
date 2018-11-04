import React, { Component } from 'react';
import PropTypes from "prop-types"
import Button from "@material-ui/core/Button";
import CustomerRegistration from "./CustomerRegistration"
import HandymanRegistration from "./HandymanRegistration"
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    button: {
        padding: "10px",
        margin: "5px"
    }
});

class RegistrationForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            type: ""
        }
        this.swtichStateToCustomer = this.swtichStateToCustomer.bind(this)
        this.swtichStateToHandyman = this.swtichStateToHandyman.bind(this)
    }

    swtichStateToCustomer() {
        this.setState({ type: "Customer" })
    }

    swtichStateToHandyman() {
        this.setState({ type: "Handyman" })
    }

    render() {
        const {classes} = this.props
        return (
            <div>
                <Button onClick={this.swtichStateToCustomer} 
                variant="contained" 
                color="secondary" 
                className={classes.button}>
                    Customer
                </Button>
                <Button onClick={this.swtichStateToHandyman} 
                variant="contained" 
                color="secondary"
                className={classes.button} >
                    Handyman
                </Button>

                {this.state.type == "Customer" ? <CustomerRegistration /> : null}
                {this.state.type == "Handyman" ? <HandymanRegistration /> : null}
            </div>
        );
    }
  
}
RegistrationForm.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(RegistrationForm)


