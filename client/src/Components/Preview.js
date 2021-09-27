import React,{ Component } from 'react';
import { data } from './ResumeContent'; 
import moment from 'moment';

class Preview extends Component {
    // constructor() {
    //     super();
    // }

    render () {
        return (
            <div style={{ margin: "0 auto", marginTop: "20px", maxWidth: "1100px"}} contentEditable="true">
                {/* Basic Info Section*/}
                <div>
                    <h1>
                        {data.basicinfo[0].firstname} &nbsp; {data.basicinfo[0].lastname}
                    </h1>
                    <h5>
                        {data.basicinfo[0].address}
                    </h5>
                    <h5>
                        Phone:&nbsp;{data.basicinfo[0].phone} &emsp;E-Mail: &nbsp;{data.basicinfo[0].email}
                    </h5>
                </div>
                
                {/* Education Section */}
                { data.educations.length !== 0
                    ? <div>
                        <h3>
                            Education
                        </h3>
                        {data.educations.map((element, k) => 
                            <div key={k}>
                                <div style={{display: 'flex'}}>
                                    <h5>
                                        {element.school}
                                    </h5>
                                    <h5 style={{float:'right', marginLeft:'auto'}}>
                                    {moment(element.graduationYr).format("MMM YYYY")}&nbsp;,&nbsp;{element.location}
                                    </h5>
                                </div>
                                <h5>
                                    {element.degree} in {element.major}&emsp;
                                    {
                                        element.GPA !== null
                                        ? element.GPA 
                                        : null
                                    }&nbsp;/4.0 (GPA)
                                </h5>
                            </div>
                        )}
                      </div>
                    : null
                }

                {/* Experience Section */}
                {data.experiences.length !== 0 
                    ? <div>
                        <h3>
                            Experience
                        </h3>
                        {data.experiences.map((element, k) => 
                            <div style={{padding:'5px'}} key={k}>
                                <div style={{display: 'flex'}}>
                                    <h5 style={{'fontWeight':'bold'}}>
                                        {element.company}&emsp;|&emsp;{element.position}
                                    </h5>
                                    <h5 style={{marginLeft:'auto'}}>
                                        {moment(element.from).format("MMM YYYY")}&nbsp;-&nbsp;{moment(element.to).format("MMM YYYY")}, {element.location}   
                                    </h5>
                                </div>
                                <h5>
                                    {element.desc}
                                </h5>
                            </div>
                        )} 
                      </div> 
                    : null
                }   
            </div>
        )
    }
}

export default Preview