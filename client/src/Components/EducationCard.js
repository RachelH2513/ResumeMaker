import React from 'react';
import '../App.css';
import moment from 'moment';
import { data } from "./ResumeContent"

const EducationCard = (props) => {
    const  education  = props.education;

    const wasChecked = data.educations.find(x => x._id === education._id) != null;
    const [checked, setChecked] = React.useState(wasChecked);

    const onChange = e => {
        if (e.target.checked && !data.educations.includes(education)) { // checked and not in the list 
            data.educations.push(education);
            setChecked(true);
            // localStorage.setItem(education._id, education._id)
        } else {// remove from list if found
            let i = data.educations.findIndex(x => x._id === education._id);
            if (i !== -1) {
                data.educations.splice(i, 1);
            }
            setChecked(false)
            // localStorage.removeItem(education._id)
        }
         
    }

    return(
        <div className="card-container" style={{marginBottom:'1em'}}>
            <div style={{display: 'flex', alignItems:'center'}}>
                <input type="checkbox" name="education" id={education._id} checked={checked} onChange={onChange}/>
                <label htmlFor={education._id} style={{'fontSize':'medium','fontWeight':'bold', marginBottom:'0'}}>
                {/* <input type="checkbox" name="education" id={education._id} checked={checked} onChange={onChange}/> */}
                    &emsp;{education.school}
                    </label>
                <span style={{marginLeft:'auto', 'fontWeight':'bold'}}>
                    {moment(education.graduationYr).format("MMM YYYY")}&nbsp;|&nbsp;{education.location}
                </span>
            </div>
            <div>
                {education.degree} in {education.major} 
                {/* {education.GPA !== '' ? .GPA: education.GPA } */}
            </div>
        </div>
    )
};

export default EducationCard;