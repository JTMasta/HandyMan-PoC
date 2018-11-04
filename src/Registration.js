import React, { Component } from 'react';
import PropTypes from "prop-types"
import Button from "@material-ui/core/Button";
import CustomerRegistration from "./CustomerRegistration"
import HandymanRegistration from "./HandymanRegistration"
import { withStyles } from '@material-ui/core';
import SubmitButton from './SubmitButton';

const styles = theme => ({
    button: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: 3 * theme.spacing.unit,
        width: 250,
        height: 80
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
        const { classes } = this.props
        return (
            <div className="registrationbuttons">
                <Button onClick={this.swtichStateToCustomer}
                    variant="contained"
                    color="primary"
                    className={classes.button}>
                    Customer
                </Button>

                <Button onClick={this.swtichStateToHandyman}
                    variant="contained"
                    color="primary"
                    className={classes.button} >
                    Handyman
                </Button>

                {this.state.type == "Customer" ? <div> <CustomerRegistration /> <SubmitButton /> </div> : null}
                {this.state.type == "Handyman" ? <div> <HandymanRegistration /> <SubmitButton /> </div> : null}

                
            </div>
        );
    }

}
RegistrationForm.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(RegistrationForm)


