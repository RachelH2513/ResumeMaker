import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { data } from "./ResumeContent"

class BasicInfo extends Component {
  constructor() {
    super();
    this.state = {
      _id: '',
      firstname: '',
      lastname: '',
      phone: '',
      address: '',
      email: '',
      msg: '',
      updated: false    
    };
  }

  componentDidMount(){
    axios
        .get('/basicinfo')
        .then(res => {
            this.setState({
                _id: res.data._id,
                firstname: res.data.firstname,
                lastname: res.data.lastname,
                phone: res.data.phone,
                address: res.data.address,
                email: res.data.email
            })
            if (data.basicinfo.length === 0) {
                data.basicinfo.push(res.data)
            }
            console.log(data.basicinfo)
        })
        .catch(err => {
            console.log('Error from getting basic info');
        })
  }

  onSubmit = e => {
      e.preventDefault();

      const newdata = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        phone: this.state.phone,
        address: this.state.address,
        email: this.state.email
      }

      if (this.state._id !== '') { // Update if exist
          if (this.state.updated) { // Update if any change
            axios
                .put('/basicinfo/'+this.state._id, newdata)
                .then(res => {
                    this.setState({
                        msg: res.data.msg
                    });
                    data.basicinfo[0].firstname = newdata.firstname;
                    data.basicinfo[0].lastname = newdata.lastname;
                    data.basicinfo[0].phone = newdata.phone;
                    data.basicinfo[0].address = newdata.address;
                    data.basicinfo[0].email = newdata.email;
                })
                .catch(err => {
                    console.log("Error in UpdateBasicInfo!");
                })
          }
        
      } else { // New
          axios
            .post('/basicinfo', newdata)
            .then(res => {
                this.setState({
                    msg: res.data.msg
                })
            })
            .catch(err => {
                console.log('Error from CreateBasicInfo');
            })
      }
      
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value});
    this.setState({updated: true})
  }

  render() {
    return (
        <div className="CreateBasicInfo">
            <div className="container">
                <div className="row">
                <div className="col-md-8 m-auto">
                    <br/>   
                    <h1 className="display-4 text-center">Basic Info</h1>
                    <p className="lead text-center">
                    Create Basic Information
                    </p>

                    <form noValidate onSubmit={this.onSubmit}>
                        <div className='form-group'>
                            <input
                                type='text'
                                placeholder='First Name'
                                name='firstname'
                                className='form-control'
                                value={this.state.firstname}
                                onChange={this.onChange}
                            />
                        </div>
                    {/* <br /> */}

                        <div className='form-group'>
                            <input
                                type='text'
                                placeholder='Last Name'
                                name='lastname'
                                className='form-control'
                                value={this.state.lastname}
                                onChange={this.onChange}
                            />
                        </div>

                        <div className='form-group'>
                            <input
                                type='text'
                                placeholder='Phone Number'
                                name='phone'
                                className='form-control'
                                value={this.state.phone}
                                onChange={this.onChange}
                            />
                        </div>

                        <div className='form-group'>
                            <input
                                type='text'
                                placeholder='Address'
                                name='address'
                                className='form-control'
                                value={this.state.address}
                                onChange={this.onChange}
                            />
                        </div>

                        <div className='form-group'>
                            <input
                                type='text'
                                placeholder='E-Mail'
                                name='email'
                                className='form-control'
                                value={this.state.email}
                                onChange={this.onChange}
                            />
                        </div>
                        <input
                            type="submit"
                            // className="btn btn-outline-warning btn-block mt-4"
                            className='btn btn-outline-info btn-lg btn-block'
                        />
                        <p className='msg'>
                            {this.state.msg}
                        </p>
                    </form>
                    <Link to='/education' className='btn btn-outline-warning float-right' style={{'fontWeight':'bold','color':'black'}}>
                        Next: Education
                    </Link>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default BasicInfo;