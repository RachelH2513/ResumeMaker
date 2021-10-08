import React, {Component} from 'react';
import axios from 'axios';
import '../App.css';
import SkillCard from './SkillCard';
import { data as preview_data} from "./ResumeContent"
import { Link } from 'react-router-dom';

class Skill extends Component {
    constructor() {
        super();
        this.state = {
            skill_name: '',
            msg: '',
            skills: [],
            skill_id: ''
        };
    }
    componentDidMount() {
        this.refresh();
        document.addEventListener("skills.deleted", this);
        document.addEventListener("skills.edit", this);
    }

    componentWillUnmount() {
        document.removeEventListener("skills.deleted", this)
        document.removeEventListener("skills.edit", this)
    }

    handleEvent = (event) => {
        switch (event.type) {
            case "skills.deleted": {
                const { detail } = event;
                this.refresh();
                this.showMsg(detail.msg);
                break;
            }
            case 'skills.edit': {
                const { detail } = event;
                // console.log(detail);
                this.setState({
                    skill_name: detail.name,
                    skill_id: detail.id,
                })
                break;
            }

            default:
                break;
        }
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
        if (this.state.skill_id === '') {
            axios
                .post('/api/skill', data) // Save new skill
                .then(res => {
                    this.setState({
                        // Clear all the fields
                        skill_name: '',
                    });
                    this.showMsg(res.data.msg)
                })
                .then(() => this.refresh())
                .catch(err => {
                    console.log('Error from Skill');
                })
        } else {
            axios
                .put('/api/skill/'+this.state.skill_id, data) // Update existing skill
                .then(res => {
                        let i = preview_data.skills.findIndex(x => x._id === this.state.skill_id);
                        if (i !== -1) { // if found
                            preview_data.skills[i].skill_name = data.skill_name;
                            localStorage.setItem('skills', JSON.stringify(preview_data.skills));
                        }
                        this.setState({
                            // Clear all the fields
                            skill_name: '',
                            skill_id: '',
                        });
                        this.showMsg(res.data.msg)
                        this.refresh()
                })
                .catch(err => {
                    console.log("Error: Skill Edit");
                })
        }
    }

    onClick = () => this.props.history.push('/preview')

    showMsg = msg => {
        this.setState({
            msg: msg
        })
        setTimeout(() => {
            this.setState({
                msg: ''
            })
        }, 3000);
    } 
    
    render() {
        const skills = this.state.skills;
        // console.log("PrintBook: " + books);
        let skillsList;

        if(!skills) {
            skillsList = "There is no skill added yet!";
        } else {
            skillsList = skills.map((skill, k) =>
            <SkillCard skill={skill} key={k} onDeleted={(event) => console.log(event)}/>
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
                                <p className='msg' style={{ minHeight: "1.5em" }}>
                                    {this.state.msg}
                                </p>
                            </form>
                        </div>
                    </div>

                    <div>
                        {/* <ul className='col-md-8 m-auto' style={{paddingTop: 0}}> */}
                        <ul className="card-container" style={{marginBottom:'1em', padding: 0}}>
                            {skillsList}
                        </ul>
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