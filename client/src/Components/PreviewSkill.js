import { data } from './ResumeContent'; 

const PreviewSkill = () => {
    return (
         data.skills.length !== 0
            ? <div>
                <h3>
                    Skill
                </h3>
                    {data.skills.map((element, k) => 
                        <div key={k}>
                            <div style={{display: 'flex'}}>
                                <h5>
                                    &bull;&nbsp;&nbsp;{element.skill_name}
                                </h5>
                            </div>
                        </div>
                    )}
              </div>
            : null
        
    )
}

export default PreviewSkill