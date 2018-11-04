import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';


export class HandyMan extends Component {
    constructor(props)
    {
        super(props)
    }
    render() { 
        return (
            <div>
                <Card>
                    <CardActionArea>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.handyMan.handyManTitle} <Avatar>HandyMan</Avatar>
                        </Typography>
                        <Typography component="p">
                            <p>Name: {this.props.handyMan.handyManName}</p>
                            <p>HandyMan Title: {this.props.handyMan.handyManTitle}</p>
                            <p>Description: {this.props.handyMan.body}</p>
                            <p>Created at: {JSON.stringify(this.props.handyMan.dateCreated)}</p>
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        )
    }
}

