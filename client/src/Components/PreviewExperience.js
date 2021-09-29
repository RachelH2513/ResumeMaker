import { data } from './ResumeContent'; 
import moment from 'moment';


const PreviewEducation = () => {
    return (
        data.experiences.length !== 0 
            ? <div>
                <h3 style={{marginBottom:'10px', marginTop:'8px'}}>
                    Experience
                </h3>
                {data.experiences.map((element, k) => 
                    <div key={k}>
                        <div style={{display: 'flex'}}>
                            <h5 style={{'fontWeight':'bold'}}>
                                {element.company}&emsp;|&emsp;{element.position}
                            </h5>
                            <h5 style={{marginLeft:'auto'}}>
                                {moment(element.from).format("MMM YYYY")}&nbsp;-&nbsp;{moment(element.to).format("MMM YYYY")}, {element.location}   
                            </h5>
                        </div>
                        <h5 style={{textAlign:'justify'}}>
                            {element.desc}
                        </h5>
                    </div>
                )} 
              </div> 
            : null
        
    )
}

export default PreviewEducation