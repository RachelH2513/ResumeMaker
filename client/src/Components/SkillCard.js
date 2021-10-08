import React from 'react';
import '../App.css';
import moment from 'moment';
import { data } from "./ResumeContent"

const SkillCard = (props) => {
    const  skill  = props.skill;

    const wasChecked = data.skills.find(x => x._id === skill._id) != null;
    const [checked, setChecked] = React.useState(wasChecked);

    const onChange = e => {
        if (e.target.checked && !data.skills.includes(skill)) { // checked and not in the list 
            data.skills.push(skill);
            setChecked(true);
        } else {// remove from list if found
            let i = data.skills.findIndex(x => x._id === skill._id);
            if (i !== -1) {
                data.skills.splice(i, 1);
            }
            setChecked(false)
            // localStorage.removeItem(education._id)
        }
         
        localStorage.setItem('skills', JSON.stringify(data.skills));
    }

    return(
        <li className="card-container" style={{marginBottom:'1em'}}>
            {/* <div className="card-container" style={{marginBottom:'1em'}}> */}
                <div style={{display: 'flex', alignItems:'center'}}>
                    <input type="checkbox" name="skill" id={skill._id} checked={checked} onChange={onChange}/>
                    <label htmlFor={skill._id} style={{'fontSize':'medium','fontWeight':'bold', marginBottom:'0'}}>
                        &emsp;{skill.skill_name}
                        </label>
                </div>
            {/* </div> */}
        </li>
    )
};

export default SkillCard;