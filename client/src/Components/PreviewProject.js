import { data } from './ResumeContent'; 
import moment from 'moment';


const PreviewProject = () => {
    return (
        data.projects.length !== 0 
            ? <div>
                <h3 style={{marginBottom:'10px', marginTop:'8px'}}>
                    Project
                </h3>
                {data.projects.map((element, k) => 
                    <div key={k}>
                        <div style={{display: 'flex'}}>
                            <h5 style={{'fontWeight':'bold'}}>
                                {element.name}&emsp;|&emsp;{element.key_words}
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

export default PreviewProject