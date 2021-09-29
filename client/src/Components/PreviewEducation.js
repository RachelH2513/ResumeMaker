import { data } from './ResumeContent'; 
import moment from 'moment';


const PreviewEducation = () => {
    return (
         data.educations.length !== 0
            ? <div>
                <h3>
                    Education
                </h3>
                {data.educations.map((element, k) => 
                    <div key={k}>
                        <div style={{display: 'flex'}}>
                            <h5 style={{fontWeight:'bold'}}>
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
        
    )
}

export default PreviewEducation