import React, {Component} from 'react';
import axios from 'axios';
import '../App.css';
import ProjectCard from './ProjectCard';

import { Link } from 'react-router-dom';

class Project extends Component {
    constructor() {
        super();
        this.state = {

            name: '',
            key_words: '',
            from: '',
            to: '',
            location:'',
            desc: '',
            msg: '',
            projects: []
        };
    }
    componentDidMount() {
        this.refresh();
    }

    refresh = () => {
        axios
            .get('/project')
            .then(res => {
                this.setState({
                    projects: res.data
                })
            })
            .catch(err => {
                console.log('Error from getting projects');
            })
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = e => {
        e.preventDefault();

        const data = {
            name: this.state.name,
            key_words: this.state.key_words,
            from: this.state.from,
            to: this.state.to,
            location:this.state.location,
            desc: this.state.desc
        }

        axios
            .post('/project', data)
            .then(res => {
                this.setState({
                    msg: res.data.msg,
                    // Clear all the fields
                    name: '',
                    key_words: '',
                    from: '',
                    to: '',
                    location:'',
                    desc: ''
                })
            })
            .then(() => this.refresh())
            .catch(err => {
                console.log('Error from Project');
            })
    }

    onClick = () => this.props.history.push('/preview')

    render() {
        const projects = this.state.projects;
        // console.log("PrintBook: " + books);
        let projectsList;

        if(!projects) {
            projectsList = "There is no project added yet!";
        } else {
            projectsList = projects.map((project, k) =>
            <ProjectCard project={project} key={k} />
        );
        }

        return (
            <div className='Project'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8 m-auto'>
                            <br/>
                            <h1 className="display-4 text-center">Project</h1>
                            <p className="lead text-center">
                            Add New Project Or Choose From List
                            </p>

                            <form noValidate onSubmit={this.onSubmit}>
                                <div className='form-group'>
                                    <input 
                                        className='form-control'
                                        type='text'
                                        name='name'
                                        placeholder='Project Name'
                                        value = {this.state.name}
                                        onChange={this.onChange}
                                    /> 
                                </div>

                                <div className='form-group'>
                                    <input 
                                        className='form-control'
                                        type='text'
                                        name='key_words'
                                        placeholder='Main Technolies'
                                        value={this.state.key_words}
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

                    <div>
                        {projectsList}
                    </div>
                    <div className="row">
                        <div className='col-md-8 m-auto'>
                            {/* <Link to='/experience' className='btn btn-outline-warning float-right' style={{'fontWeight':'bold','color':'black', display: 'inline-block', marginLeft: '10px'}}>
                                Next: Project
                            </Link> */}
                            {/* <span/> */}
                            <Link to='/experience' className='btn btn-outline-warning float-right' style={{'fontWeight':'bold','color':'black', display: 'inline-block'}}>
                                Previous: Experience
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

export default Project;