import React, {Component} from 'react';
import axios from 'axios';
import '../App.css';
import SkillCard from './SkillCard';

import { Link } from 'react-router-dom';

class Skill extends Component {
    constructor() {
        super();
        this.state = {
            skill_name: '',
            msg: '',
            skills: []
        };
    }
    componentDidMount() {
        this.refresh();
    }

    refresh = () => {
        axios
            .get('/api/skill')
            .then(res => {
                this.setState({
                    skills: res.data
                })
            })
            .catch(err => {
                console.log('Error from getting skills');
            })
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = e => {
        e.preventDefault();

        const data = {
            skill_name: this.state.skill_name
        }

        axios
            .post('/api/skill', data)
            .then(res => {
                this.setState({
                    msg: res.data.msg,
                    // Clear all the fields
                    skill_name: '',
                })
            })
            .then(() => this.refresh())
            .catch(err => {
                console.log('Error from Skill');
            })
    }

    onClick = () => this.props.history.push('/preview')

    render() {
        const skills = this.state.skills;
        // console.log("PrintBook: " + books);
        let skillsList;

        if(!skills) {
            skillsList = "There is no skill added yet!";
        } else {
            skillsList = skills.map((skill, k) =>
            <SkillCard skill={skill} key={k} />
        );
        }

        return (
            <div className='Skill'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8 m-auto'>
                            <br/>
                            <h1 className="display-4 text-center">Skill</h1>
                            <p className="lead text-center">
                            Add New Skill Or Choose From List
                            </p>

                            <form noValidate onSubmit={this.onSubmit}>
                                <div className='form-group'>
                                    <input 
                                        className='form-control'
                                        type='text'
                                        name='skill_name'
                                        placeholder='Skill Key Words'
                                        value = {this.state.skill_name}
                                        onChange={this.onChange}
                                    /> 
                                </div>

                                <input
                                    type="submit"
                                    className='btn btn-outline-info btn-lg btn-block'
                                />
                                <p className='msg'>
                                    {this.state.msg}
                                </p>
                            </form>
                        </div>
                    </div>

                    <div>
                        {skillsList}
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

export default Skill;