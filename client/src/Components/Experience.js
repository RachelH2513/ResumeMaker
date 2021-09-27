import React, {Component} from 'react';
import axios from 'axios';
import '../App.css';
import ExperienceCard from './ExperienceCard';

import { Link } from 'react-router-dom';

class Experience extends Component {
    constructor() {
        super();
        this.state = {

            company: '',
            position: '',
            from: '',
            to: '',
            location:'',
            desc: '',
            msg: '',
            experiences: []
        };
    }
    componentDidMount() {
        this.refresh();
    }

    refresh = () => {
        axios
            .get('/experience')
            .then(res => {
                this.setState({
                    experiences: res.data
                })
            })
            .catch(err => {
                console.log('Error from getting experiences');
            })
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = e => {
        e.preventDefault();

        const data = {
            company: this.state.company,
            position: this.state.position,
            from: this.state.from,
            to: this.state.to,
            location:this.state.location,
            desc: this.state.desc
        }

        axios
            .post('/experience', data)
            .then(res => {
                this.setState({
                    msg: res.data.msg,
                    // Clear all the fields
                    company: '',
                    position: '',
                    from: '',
                    to: '',
                    location:'',
                    desc: ''
                })
            })
            .then(() => this.refresh())
            .catch(err => {
                console.log('Error from Experience');
            })
    }

    onClick = () => this.props.history.push('/preview')

    render() {
        const experiences = this.state.experiences;
        // console.log("PrintBook: " + books);
        let experiencesList;

        if(!experiences) {
            experiencesList = "There is no experience added yet!";
        } else {
            experiencesList = experiences.map((experience, k) =>
            <ExperienceCard experience={experience} key={k} />
        );
        }

        return (
            <div className='Experience'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8 m-auto'>
                            <br/>
                            <h1 className="display-4 text-center">Experience</h1>
                            <p className="lead text-center">
                            Add New Experience Or Choose From List
                            </p>

                            <form noValidate onSubmit={this.onSubmit}>
                                <div className='form-group'>
                                    <input 
                                        className='form-control'
                                        type='text'
                                        name='company'
                                        placeholder='Company Name'
                                        value = {this.state.company}
                                        onChange={this.onChange}
                                    /> 
                                </div>

                                <div className='form-group'>
                                    <input 
                                        className='form-control'
                                        type='text'
                                        name='position'
                                        placeholder='Job Title'
                                        value={this.state.position}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div className='form-group'>
                                    <input
                                        className='form-control'
                                        type='month'
                                        max={this.state.to}
                                        name='from'
                                        placeholder='From'
                                        value={this.state.from}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div className='form-group'>
                                    <input
                                        className='form-control'
                                        type='month'
                                        min={this.state.from}
                                        name='to'
                                        placeholder='To'
                                        value={this.state.to}
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
                                    <textarea 
                                        className='form-control rounded-0'
                                        // type='textarea'
                                        rows='4'
                                        name='desc'
                                        placeholder='Description/Responsibility'
                                        value={this.state.desc}
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

                    {/* <div className="list"> */}
                    <div>
                        {experiencesList}
                    </div>
                    <div className="row">
                        <div className='col-md-8 m-auto'>
                            <Link to='/experience' className='btn btn-outline-warning float-right' style={{'fontWeight':'bold','color':'black', display: 'inline-block', marginLeft: '10px'}}>
                                Next: Experience
                            </Link>
                            <span/>
                            <Link to='/education' className='btn btn-outline-warning float-right' style={{'fontWeight':'bold','color':'black', display: 'inline-block'}}>
                                Previous: Education
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

export default Experience;