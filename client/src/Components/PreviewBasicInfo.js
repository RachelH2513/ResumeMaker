import { data } from './ResumeContent'; 


const PreviewBasicInfo = () => {
    return (
        <div>
            <h1>
                {data.basicinfo[0].firstname} &nbsp; {data.basicinfo[0].lastname}
            </h1>
            <h5>
                {data.basicinfo[0].address}
            </h5>
            <h5>
                Phone:&nbsp;{data.basicinfo[0].phone} &emsp;E-Mail: &nbsp;{data.basicinfo[0].email}
            </h5>
        </div>
    )
}

export default PreviewBasicInfo