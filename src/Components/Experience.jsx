import { useState } from 'react';

export default function Experience(){

    let data = {
        companyName: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
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
                <label>Company</label>
                <input 
                    type="text"
                    name='companyName'
                    onChange={handleChange}
                    value={formData.companyName}
                    required
                />
                <label>Position</label>
                <input 
                    type="text"
                    name='position'
                    onChange={handleChange}
                    value={formData.position}
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
                <label>Description</label>
                <textarea 
                    name="description"
                    onChange={handleChange}
                    value={formData.description}
                    required
                ></textarea>
                <button type='submit'>Submit</button>
            </form>
             ) : (
                <div>
                    <h1>{formData.companyName}</h1>
                    <p>{formData.position}</p>
                    <p>{formData.startDate}</p>
                    <p>{formData.endDate}</p>
                    <p>{formData.description}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            )}    
        </>
    )
}

