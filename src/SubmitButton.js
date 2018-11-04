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
        setTimeout(
            function() {
                this._refreshPage()
            }.bind(this), 600)
        this.setState({ type: "Successful" })
        
    }

    _refreshPage() {
        console.log()
        window.location.reload()
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Button
                    className={classes.button}
                    onClick= {this.switchStateToCompleted} 
                    disableRipple
                    size="large"
                    variant="contained"
                    color="primary" >
                    Submit
                </Button>

                {this.state.type == "Successful" ? <div> Submission Successful! </div> : null}

            </div>

        );
    }
}

SubmitButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SubmitButton);

