import React, {Component} from 'react';
import axios from 'axios';
import '../App.css';

class Experience extends Component {
    constructor() {
        super();
        this.state = {
            company: '',
            position: '',
            from: '',
            to: '',
            desc: '',
            msg: ''
        };
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
            desc: this.state.desc
        }

        axios
            .post('/experience', data)
            .then(res => {
                this.setState({
                    msg: res.data.msg
                })
            })
            .catch(err => {
                console.log('Error from Experience');
            })
    }

    render() {
        return (
            <div className='Experience'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8 m-auto'>
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
                                        value={this.state.postion}
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
                                    <textarea 
                                        className='form-control rounded-0'
                                        // type='textarea'
                                        rows='4'
                                        name='desc'
                                        placeholder='Description/Responsibility'
                                        value={this.state.postion}
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
                </div>
            </div>
        )
    }
}

export default Experience;