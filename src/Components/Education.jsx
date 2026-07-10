import { useState } from 'react';

export default function Education(){

    let data = {
        schoolName: '',
        degree: '',
        startDate: '',
        endDate: ''
    }

    const [ formData, setFormData ] = useState(data);
    const [ isEditing, setIsEditing ] = useState(true);

    function handleChange(e){
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name] : value 
        }))
    }

     function handleSubmitForm(e){
        e.preventDefault();
        setIsEditing(false);
    }


    return(
        <>
            {isEditing ? (
            <form onSubmit={handleSubmitForm}> 
                <label>School/University</label>
                <input 
                    type="text"
                    name='schoolName'
                    onChange={handleChange}
                    value={formData.schoolName}
                    required
                />
                <label>Degree</label>
                <input 
                    type="text"
                    name='degree'
                    onChange={handleChange}
                    value={formData.degree}
                    required
                />
                <label>Start Date</label>
                <input 
                    type="number"
                    name='startDate'
                    onChange={handleChange}
                    value={formData.startDate}
                    required
                />
                <label>End Date</label>
                <input 
                    type="number"
                    name='endDate'
                    onChange={handleChange}
                    value={formData.endDate}
                    required
                />
                <button type='submit'>Submit</button>
            </form>
             ) : (
                <div>
                    <h1>{formData.schoolName}</h1>
                    <p>{formData.degree}</p>
                    <p>{formData.startDate}</p>
                    <p>{formData.endDate}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            )}    
        </>
    )
}

