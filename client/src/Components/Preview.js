import React,{ Component } from 'react';

import PreviewBasicInfo from './PreviewBasicInfo';
import PreviewEducation from './PreviewEducation';
import PreviewExperience from './PreviewExperience';
import PreviewProject from './PreviewProject';

class Preview extends Component {
    // constructor() {
    //     super();
    // }

    render () {
        return (
            <div style={{ margin: "0 auto", marginTop: "20px", maxWidth: "1100px"}} contentEditable="true">
                {/* Basic Info Section*/}
                <PreviewBasicInfo/>
                
                {/* Education Section */}
                <PreviewEducation/>
                

                {/* Experience Section */}
                <PreviewExperience/>

                {/* Project Section */}
                <PreviewProject/>
                
            </div>
        )
    }
}

export default Preview