import React from 'react';
import '../App.css';
import moment from 'moment';
import { data } from "./ResumeContent"

const ProjectCard = (props) => {
    const  project  = props.project;

    const wasChecked = data.projects.find(x => x._id === project._id) != null;
    const [checked, setChecked] = React.useState(wasChecked);

    const onChange = e => {
        if (e.target.checked && !data.projects.includes(project)) { // checked and not in the list 
            data.projects.push(project);
            setChecked(true);
        } else {// remove from list if found
            let i = data.projects.findIndex(x => x._id === project._id);
            if (i !== -1) {
                data.projects.splice(i, 1);
            }
            setChecked(false)
        }
        localStorage.setItem('projects', JSON.stringify(data.projects)); 
    }

    return(
        <div className="card-container" style={{marginBottom:'1em'}}>
            <div style={{display: 'flex', alignItems:'center'}}>
                <input type="checkbox" name="project" id={project._id} checked={checked} onChange={onChange}/>
                <label htmlFor={project._id} style={{'fontSize':'medium','fontWeight':'bold', marginBottom:'0'}}>
                {/* <input type="checkbox" name="education" id={education._id} checked={checked} onChange={onChange}/> */}
                    &emsp;{project.name}&nbsp;|&nbsp;{project.key_words}
                    </label>
                <span style={{marginLeft:'auto', 'fontWeight':'bold'}}>
                    {moment(project.from).format("MMM YYYY")}&nbsp;-&nbsp;{moment(project.to).format("MMM YYYY")}, {project.location}
                </span>
            </div>
            <div>
                {project.desc}
            </div>
        </div>
    )
};

export default ProjectCard;