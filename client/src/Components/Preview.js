import React,{ Component } from 'react';
import { data } from './ResumeContent'; 

class Preview extends Component {
    // constructor() {
    //     super();
    // }

    render () {
        return (
            <div style={{ margin: "0 auto", marginTop: "20px", maxWidth: "800px" }}>
                <h1>
                    {data.basicinfo[0].firstname} &nbsp; {data.basicinfo[0].lastname}
                </h1>
                <h5>
                    {data.basicinfo[0].address}
                </h5>
                <h5>
                    Phone:&nbsp;{data.basicinfo[0].phone} &emsp;E-Mail: &nbsp;{data.basicinfo[0].email}
                </h5>
                {data.experiences.length !== 0 
                    ? <div>
                        <h3>
                            Experience
                        </h3>
                        {data.experiences.map((element, k) => 
                            <div key={k}>

                                <h5>
                                    {element.company}
                                </h5>
                                <h5>
                                    {element.position}   
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