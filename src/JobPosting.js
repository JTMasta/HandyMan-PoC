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
            currentJob: null,
            editTitle: '',
            editName: '',
            editAddress: '',
            title: '',
            name: '',
            address: '',
            form_dialog_open: false,
            edit_form_dialog_open: false,
            currentId: 3,
            jobListing: [
                { title: "Plumber", name: "John Clooney", address: "4029 Rue Saguenay", id: 1},
                { title: "Electrician", name: "John Clooney", address: "0593 Maple Street", id: 2}
            ]
        }

        this.handleEditTitleChange = this.handleEditTitleChange.bind(this)
        this.handleEditNameChange = this.handleEditNameChange.bind(this)
        this.handleEditAddressChange = this.handleEditAddressChange.bind(this)
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleAddressChange = this.handleAddressChange.bind(this)
        this.openDialog = this.openDialog.bind(this)
        this.handleCloseSubmit = this.handleCloseSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.openEditDialog = this.openEditDialog.bind(this)
        this.handleCloseEditSubmit = this.handleCloseEditSubmit.bind(this)

    }

    handleEditTitleChange(e) {
        this.setState({
            editTitle: e.target.value
        })
    }

    handleEditNameChange(e) {
        this.setState({
            editName: e.target.value
        })
    }

    handleEditAddressChange(e) {
        this.setState({
            editAddress: e.target.value
        })
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
    openEditDialog(data){
        this.setState({
            edit_form_dialog_open: true,
            currentJob: data
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
    
    handleCloseEditSubmit = () => {
        
        const editedListing = this.state.jobListing.map(posting => {
            if(posting.id === this.state.currentJob.id)
            {
                return {
                    id: this.state.currentJob.id,
                    title: this.state.editTitle,
                    name: this.state.editName,
                    address: this.state.editAddress
                }
            }
            else
            {
                return posting
            }
        })

        this.setState({
            jobListing: editedListing,
            edit_form_dialog_open: false
        })
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
                            <Button size="small" color="primary"  onClick={() => {this.openEditDialog(data)}}>
                            Edit
                            </Button>
                            <IconButton aria-label="Delete" onClick={()=> this.handleDelete(data)}>
                            <DeleteIcon fontSize="default" />
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
                    open={this.state.edit_form_dialog_open}
                    onClose={this.handleClose}
                    aria-labelledby="edit-form-dialog-title"
                >
                    <DialogTitle id="edit-form-dialog-title">Edit Job Posting:</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Enter job details:
                        </DialogContentText>
                        <br />
                        <Input placeholder={this.state.currentJob ? this.state.currentJob.title : null} value={this.state.editTitle} onChange={this.handleEditTitleChange} inputProps={{'aria-label': 'Description',}} ></Input>
                        <br /><br />
                        <Input  placeholder={this.state.currentJob ? this.state.currentJob.name : null} value={this.state.editName} onChange={this.handleEditNameChange} inputProps={{'aria-label': 'Description',}}></Input>
                        <br /><br />
                        <Input  placeholder={this.state.currentJob ? this.state.currentJob.address : null} value={this.state.editAddress} onChange={this.handleEditAddressChange} inputProps={{'aria-label': 'Description',}}></Input>
                    
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                            Cancel
                    </Button>
                        <Button onClick ={this.handleCloseEditSubmit} color="primary">
                            Submit
                    </Button>
                    </DialogActions>
                </Dialog>
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