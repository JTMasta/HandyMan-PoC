import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: 3 * theme.spacing.unit
    },
});

class SubmitButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: ""
        }
        this.switchStateToCompleted = this.switchStateToCompleted.bind(this)
    }

    switchStateToCompleted() {
        this.setState({ type: "Successful" })
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button
                    className={classes.button}
                    onClick={this.switchStateToCompleted}
                    disableRipple
                    size="large"
                    variant="contained"
                    color="primary" >
                    Submit
                </Button>

                {this.state.type == "Successful" ? <div>Successfully Submitted!</div> : null}

            </div>

        );
    }
}

SubmitButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SubmitButton);

