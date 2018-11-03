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
                    <li key={data.id}>Name: {data.name}, Title: {data.title}, Address: {data.address}, Id: {data.id}
                        <IconButton aria-label="Delete" onClick={()=> this.handleDelete(data)}>
                            <DeleteIcon fontSize="medium" />
                        </IconButton>
                    </li>
                )}
                {/* <form>
                    <Input placeholder="Job Title" value={this.state.title} onChange={this.handleTitleChange} inputProps={{'aria-label': 'Description',}}
                    ></Input>
                    
                    
                    <Input  placeholder="Name" value={this.state.name} onChange={this.handleNameChange} inputProps={{'aria-label': 'Description',}}></Input>
                    
                    
                    <Input  placeholder="Address" value={this.state.address} onChange={this.handleAddressChange} inputProps={{'aria-label': 'Description',}}></Input>
                    
                    <Button onClick={this.handleSubmit} variant="fab" color="primary" aria-label="Add"><AddIcon /></Button>
                 </form> */}
                <Button onClick={this.openDialog} variant="fab" color="primary" aria-label="Add"><AddIcon /></Button>
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