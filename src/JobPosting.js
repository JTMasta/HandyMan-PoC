import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import default_picture from './default_picture.jpg';


class JobPosting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            name: '',
            address: '',
            form_dialog_open: false,
            currentId: 3,
            jobListing: [
                { title: "Plumber", name: "John Clooney", address: "4029 Rue Saguenay", id: 1},
                { title: "Electrician", name: "John Clooney", address: "0593 Maple Street", id: 2}
            ]
        }

        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleAddressChange = this.handleAddressChange.bind(this)
        this.openDialog = this.openDialog.bind(this)
        this.handleCloseSubmit = this.handleCloseSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleTitleChange(e) {
        this.setState({
            title: e.target.value
        })
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleAddressChange(e) {
        this.setState({
            address: e.target.value
        })
    }

     openDialog(e) {
        this.setState({
            form_dialog_open: true
        })
    }

    handleCloseSubmit = () => {
                //e.preventDefault();
        const job = {
            id: this.state.currentId,
            title: this.state.title,
            name: this.state.name,
            address: this.state.address
        }
        this.setState({
            jobListing: [...this.state.jobListing, job],
            form_dialog_open: true,
            currentId: this.state.currentId + 1
        })
        this.setState({ form_dialog_open: false });
      };

    handleClose = () => {
        this.setState({ form_dialog_open: false });
      };

    handleDelete = (data) => {
        console.log("trying to remove: " + data.id);
        const removed = this.state.jobListing.filter(item => item.id !== data.id)
        this.setState({
           jobListing: removed
        })
    }
    render() {

        return (
            <div>
                {this.state.jobListing.map(data => 
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">
                                    <Avatar src={default_picture} alt='Profile Picture' />
                                    {data.title}
                                </Typography>
                                <Typography component="p">
                                    <p>Name: {data.name}</p>
                                    <p>Address: {data.address}</p>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Share
                            </Button>
                            <Button size="small" color="primary">
                            Edit
                            </Button>
                            <IconButton aria-label="Delete" onClick={()=> this.handleDelete(data)}>
                            <DeleteIcon fontSize="medium" />
                            </IconButton>
                        </CardActions>
                    </Card>
                )}
                <Card>
                    <CardActions>
                        <Button onClick={this.openDialog} variant="fab" color="primary" aria-label="Add"><AddIcon /></Button>
                    </CardActions>
                </Card>
                
                <Dialog
                    open={this.state.form_dialog_open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Create a new job posting</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Enter job details:
                        </DialogContentText>
                        <br />
                        <Input placeholder="Job Title" value={this.state.title} onChange={this.handleTitleChange} inputProps={{'aria-label': 'Description',}} ></Input>
                        <br /><br />
                        <Input  placeholder="Name" value={this.state.name} onChange={this.handleNameChange} inputProps={{'aria-label': 'Description',}}></Input>
                        <br /><br />
                        <Input  placeholder="Address" value={this.state.address} onChange={this.handleAddressChange} inputProps={{'aria-label': 'Description',}}></Input>
                    
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                    </Button>
                        <Button onClick ={this.handleCloseSubmit} color="primary">
                            Submit
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}
export default JobPosting;