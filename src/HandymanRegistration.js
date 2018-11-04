import TextField from "@material-ui/core/TextField"
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types"

const styles = theme => ({
    textField: {
        padding: "10px",
        margin: "5px"
    }
});

function HandymanRegistration(props) {
    const { classes } = props
    return (
        <div>
            <TextField
                id="user-email"
                label="Email"
                className={classes.textField}
            />

            <TextField
                id="password"
                label="Password"
                className={classes.textField}
            />

            <TextField
                id="confirm-password"
                label="Confirm the Password"
                className={classes.textField}
            />

            <TextField
                id="phone-number"
                label="Your Phone Number"
                className={classes.textField}
            />

            <TextField
                id="address"
                label="Your Address"
                className={classes.textField}
            />

            <TextField
                id="expertise"
                label="Service Offered"
                className={classes.textField}
            />
        </div>

    )
}

HandymanRegistration.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HandymanRegistration)
