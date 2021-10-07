import React, {Component} from "react";
import '../App.css';
import { Link } from 'react-router-dom';

import logo from '../assets/images/resume_logo2.jpg';

class Header extends Component {
    render() {
        return (
            <div className="container">
                <div className='row' style={{height: '120px'}}>
                    <div className='col-md-8 m-auto'>
                        <section className='Resume-header'>
                            <img src={logo} alt="logo" className='header-img'/>
                            <div className='nav' >
                                <ul>
                                    {/* <li><a href="/basicinfo"/>Basic Info</li> */}
                                    <li><Link to='/' >Basic Info</Link></li>
                                    <li><Link to="/education" >Education</Link></li>
                                    <li><Link to="/skill">Skill</Link></li>
                                    <li><Link to="/experience">Experience</Link></li>
                                    <li><Link to="/project">Project</Link></li>
                                </ul>
                            </div >
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;