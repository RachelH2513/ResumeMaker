import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import moment from 'moment';
import { data } from "./ResumeContent"

const ExperienceCard = (props) => {
    const  experience  = props.experience;
    const [checked, setChecked] = React.useState(false);

    const onChange = e => {
        if (e.target.checked && !data.experiences.includes(experience)) {
            data.experiences.push(experience);
            setChecked(true);
        } else {
            let i = data.experiences.findIndex(x => x._id == experience._id);
            if (i !== -1) {
                data.experiences.splice(i, 1);
            }
            setChecked(false)
        }
         
    }

    return(
        <div className="card-container" style={{marginBottom:'1em'}}>
            <div style={{display: 'flex', alignItems:'center'}}>
                <input type="checkbox" name="experience" checked={checked} onChange={onChange}/>
                <label for="experience" style={{'fontSize':'medium','font-weight':'bold', marginBottom:'0'}}>
                    {/* <pre class="tab"> */}
                    &emsp;{experience.company}&emsp;|&emsp;{experience.position}
                    {/* </pre> */}
                    </label>
                    {/* <br/> */}
                <span style={{marginLeft:'auto', 'font-weight':'bold'}}>
                    {moment(experience.from).format("MMM YY")}&nbsp;-&nbsp;{moment(experience.to).format("MMM YY")}&emsp;{experience.location}
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