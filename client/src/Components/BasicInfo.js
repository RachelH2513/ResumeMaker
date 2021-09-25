import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { instanceOf } from 'prop-types';

class BasicInfo extends Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      phone: '',
      address: '',
      email: '',
      msg: ''
    };
  }

  onSubmit = e => {
      e.preventDefault();

      const data = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        phone: this.state.lastnphoneame,
        address: this.state.address,
        email: this.state.email
      }

      axios
        .post('/basicinfo', data)
        .then(res => {
            this.setState({
                msg: res.data.msg
            })
        })
        .catch(err => {
            console.log('Error from CreateBasicInfo');
        })
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
        <div className="CreateBasicInfo">
            <div className="container">
                <div className="row">
                    {/* <div className="col-md-8 m-auto">
                        <br />
                        <Link to="/" className="btn btn-outline-warning float-left">
                            Basic Info
                        </Link>
                    </div> */}
                <div className="col-md-8 m-auto">
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
                        <p>
                            {this.state.msg}
                        </p>
                    </form>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default BasicInfo;