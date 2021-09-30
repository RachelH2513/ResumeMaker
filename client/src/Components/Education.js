import React, {Component} from 'react';
import axios from 'axios';
import '../App.css';
import EducationCard from './EducationCard';

import { Link } from 'react-router-dom';

class Education extends Component {
    constructor() {
        super();
        this.state = {
            school: '',
            degree: '',
            graduationYr: '',
            major:'',
            location: '',
            GPA: '',
            msg: '',
            educations: []
        };
    }
    componentDidMount() {
        this.refresh();
    }

    refresh = () => {
        axios
            .get('/education')
            .then(res => {
                this.setState({
                    educations: res.data
                })
            })
            .catch(err => {
                console.log('Error from getting educations');
            })
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = e => {
        e.preventDefault();

        const data = {
            school: this.state.school,
            degree: this.state.degree,
            graduationYr: this.state.graduationYr,
            major: this.state.major,
            location:this.state.location,
            GPA: this.state.GPA
        }

        axios
            .post('/education', data)
            .then(res => {
                this.setState({
                    msg: res.data.msg,
                    // Clear all the fields
                    school: '',
                    degree: '',
                    graduationYr: '',
                    major: '',
                    location:'',
                    GPA: ''
                })
            })
            .then(() => this.refresh())
            .catch(err => {
                console.log('Error from Education');
            })
    }

    onClick = () => this.props.history.push('/preview')

    render() {
        const educations = this.state.educations;
        // console.log("PrintBook: " + books);
        let educationsList;

        if(!educations) {
            educationsList = "There is no education added yet!";
        } else {
            educationsList = educations.map((education, k) =>
            <EducationCard education={education} key={k} />
        );
        }

        return (
            <div className='Education'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8 m-auto'>
                            <br/>
                            <h1 className="display-4 text-center">Education</h1>
                            <p className="lead text-center">
                            Add New Education Or Choose From List
                            </p>

                            <form noValidate onSubmit={this.onSubmit}>
                                <div className='form-group'>
                                    <input 
                                        className='form-control'
                                        type='text'
                                        name='school'
                                        placeholder='School Name'
                                        value = {this.state.school}
                                        onChange={this.onChange}
                                    /> 
                                </div>

                                <div className='form-group'>
                                    <input 
                                        className='form-control'
                                        type='text'
                                        name='degree'
                                        placeholder='Degree'
                                        value={this.state.degree}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div className='form-group'>
                                    <input 
                                        className='form-control'
                                        type='text'
                                        name='major'
                                        placeholder='Major'
                                        value={this.state.major}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div className='form-group'>
                                    <input
                                        className='form-control'
                                        type='month'
                                        name='graduationYr'
                                        placeholder='Graduation Year'
                                        value={this.state.graduationYr}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div className='form-group'>
                                    <input 
                                        className='form-control'
                                        type='text'
                                        name='location'
                                        placeholder='Location'
                                        value={this.state.location}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div className='form-group'>
                                    <input 
                                        className='form-control'
                                        type='number'
                                        name='GPA'
                                        placeholder='GPA'
                                        value={this.state.GPA}
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
                        </div>
                    </div>

                    <div>
                        {educationsList}
                    </div>
                    <div className="row">
                        <div className='col-md-8 m-auto'>
                            <Link to='/experience' className='btn btn-outline-warning float-right' style={{'fontWeight':'bold','color':'black', display: 'inline-block', marginLeft: '10px'}}>
                                Next: Experience
                            </Link>
                            <span/>
                            <Link to='/' className='btn btn-outline-warning float-right' style={{'fontWeight':'bold','color':'black', display: 'inline-block'}}>
                                Previous: Basic Info
                            </Link>
                        </div>
                    </div>
                    <br/>
                    <div className='card-container'>
                        <button type="button" style={{'fontWeight':'bold'}} className='btn btn-outline-warning float-right' onClick={this.onClick}>Create Resume</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Education;