import React from 'react';
import '../App.css';
import moment from 'moment';
import { data } from "./ResumeContent"

const ExperienceCard = (props) => {
    const  experience  = props.experience;
    const wasChecked = data.experiences.find(x => x._id === experience._id) != null;
    const [checked, setChecked] = React.useState(wasChecked);

    const onChange = e => {
        if (e.target.checked && !data.experiences.includes(experience)) {
            data.experiences.push(experience);
            setChecked(true);
        } else {
            let i = data.experiences.findIndex(x => x._id === experience._id);
            if (i !== -1) {
                data.experiences.splice(i, 1);
            }
            setChecked(false)
        }
        localStorage.setItem('experiences', JSON.stringify(data.experiences));
    }

    return(
        <div className="card-container" style={{marginBottom:'1em'}}>
            <div style={{display: 'flex', alignItems:'center'}}>
                <input type="checkbox" name="experience" id={experience._id} checked={checked} onChange={onChange}/>
                <label htmlFor={experience._id} style={{'fontSize':'medium','fontWeight':'bold', marginBottom:'0'}}>
                    {/* <pre class="tab"> */}
                    &emsp;{experience.company}&emsp;|&emsp;{experience.position}
                    {/* </pre> */}
                    </label>
                    {/* <br/> */}
                <span style={{marginLeft:'auto', 'fontWeight':'bold', 'fontSize': 'small'}}>
                    {moment(experience.from).format("MMM YYYY")}&nbsp;-&nbsp;{moment(experience.to).format("MMM YYYY")}, {experience.location}
                </span>
            </div>
            <div>
                {experience.desc}
            </div>
            {/* <img src="https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-book/${book._id}`}>
                        { book.title }
                    </Link>
                </h2>
                <h3>{book.author}</h3>
                <p>{book.description}</p>
            </div> */}
        </div>
    )
};

export default ExperienceCard;