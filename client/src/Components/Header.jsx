import React, {Component} from "react";
import '../App.css';

import logo from '../assets/images/resume_logo.jpg';

class Header extends Component {
    render() {
        return (
            <div className="container">
                <div className='row'>
                    <div className='col-md-8 m-auto'>
                        <section className='Resume-header'>
                            <img src={logo} alt="logo" className='header-img'/>
                            <nav className='nav' >
                                <ul>
                                    {/* <li><a href="/basicinfo"/>Basic Info</li> */}
                                    <li><a href='/' >Basic Info</a></li>
                                    <li><a href="/education" >Education</a></li>
                                    {/* <li><a href="#"/>Skill</li> */}
                                    <li><a href="/experience">Experience</a></li>
                                    <li><a href="/project">Project</a></li>
                                </ul>
                            </nav >
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;