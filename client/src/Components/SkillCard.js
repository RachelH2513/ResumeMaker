import React from 'react';
import '../App.css';
import axios from 'axios';
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

    const delSkillById = skill_id => {
        if (window.confirm("Are you sure to DELETE this skill?")){
            axios
                .delete('/api/skill/'+skill_id)
                .then(res => {
                    document.dispatchEvent(new CustomEvent("skills.deleted", { bubbles: true, detail: {msg: res.data.msg}}));
                    let i = data.skills.findIndex(x => x._id === skill_id);
                    if (i !== -1) {
                        data.skills.splice(i, 1);
                    }
                    localStorage.setItem('skills', JSON.stringify(data.skills));
                })                
                .catch(err => {
                    console.log("Error: Skill Delete");
                })
        }  
    }

    const editSkill = skill => {
        let loadSelectedSkill = new CustomEvent('skills.edit', {'detail': {'name': skill.skill_name, 'id': skill._id}});
        document.dispatchEvent(loadSelectedSkill)
    }

    return(
            <div>
                <div className='skill_item' style={{display: 'flex', alignItems:'center'}}>
                    <input type="checkbox" name="skill" id={skill._id} checked={checked} onChange={onChange}/>
                    <label htmlFor={skill._id} style={{'fontSize':'medium','fontWeight':'bold', marginBottom:'0'}}>
                        &emsp;{skill.skill_name}
                    </label>
                    <span className='edit_skill' onClick={editSkill.bind(this, skill)}>Edit</span>
                    <span className='delete_skill' onClick={delSkillById.bind(this, skill._id)}>Delete</span>
                </div>
            </div>
    )
};

export default SkillCard;