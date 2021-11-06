import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { data } from "./ResumeContent"

const BasicInfo = () => {
    const [_id, set_id] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')
    const [updated, setUpdated] = useState(false);

  useEffect(() => {
    axios
        .get('/api/basicinfo')
        .then(res => {
            set_id(res.data._id)
            setFirstname(res.data.firstname)
            setLastname(res.data.lastname)
            setPhone(res.data.phone)
            setAddress(res.data.address)
            setEmail(res.data.email)
            
            if (data.basicinfo.length === 0) {
                data.basicinfo.push(res.data)
            }

            localStorage.setItem('basicinfo', JSON.stringify(data.basicinfo));
            console.log(data.basicinfo)
        })
        .catch(err => {
            console.log('Error from getting basic info');
        })
  }, [])

  const onSubmit = e => {
      e.preventDefault();

      const newdata = {
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        address: address,
        email: email
      }

      if (_id !== '') { // Update if exist
          if (updated) { // Update if any change
            axios
                .put('/api/basicinfo/'+_id, newdata)
                .then(res => {
                    setMsg(res.data.msg)
                    
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
            .post('/api/basicinfo', newdata)
            .then(res => {
                setMsg(res.data.msg)
            })
            .catch(err => {
                console.log('Error from CreateBasicInfo');
            })
      }
      
  }

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

                <form noValidate onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='First Name'
                            name='firstname'
                            className='form-control'
                            value={firstname}
                            onChange={e => {setFirstname(e.target.value); setUpdated(true)}}
                        />
                    </div>
                {/* <br /> */}

                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='Last Name'
                            name='lastname'
                            className='form-control'
                            value={lastname}
                            onChange={e => {setLastname(e.target.value); setUpdated(true)}}
                        />
                    </div>

                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='Phone Number'
                            name='phone'
                            className='form-control'
                            value={phone}
                            onChange={e => {setPhone(e.target.value); setUpdated(true)}}
                        />
                    </div>

                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='Address'
                            name='address'
                            className='form-control'
                            value={address}
                            onChange={e => {setAddress(e.target.value); setUpdated(true)}}
                        />
                    </div>

                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='E-Mail'
                            name='email'
                            className='form-control'
                            value={email}
                            onChange={e => {setEmail(e.target.value); setUpdated(true)}}
                        />
                    </div>
                    <input
                        type="submit"
                        // className="btn btn-outline-warning btn-block mt-4"
                        className='btn btn-outline-info btn-lg btn-block'
                    />
                    <p className='msg'>
                        {msg}
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
};

export default BasicInfo;