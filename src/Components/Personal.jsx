import { useState } from 'react';

export default function Personal(){

    let data = {
        name: '', 
        profession: '', 
        email: '', 
        description:'' 
    }

    const [ formData , setFormData] = useState(data);
    const [ isEditing, setIsEditing ] = useState(true);

    function handleChange(e){
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData, 
            [name]: value
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
                    <label>Name:</label>
                    <input 
                        type='text'
                        name='name'
                        placeholder='e.g John Doe'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <label>Profession:</label>
                    <input 
                        type='text' 
                        name='profession'
                        placeholder='e.g Software Engineer'
                        value={formData.profession}
                        onChange={handleChange}
                        required
                    />
                    <label>Email:</label>
                    <input 
                        type='email' 
                        name='email'
                        placeholder='johndoe@example.com'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label>Profile Description: </label>
                    <textarea
                        type='text'
                        name='description'
                        placeholder='describe yourself...'
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                    <button type='submit'>Submit</button>  
                </form>
                ) : (
                <div>
                    <h1>{formData.name}</h1>
                    <p>{formData.profession}</p>
                    <p>{formData.email}</p>
                    <p>{formData.description}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            )
            }
        </>
    )
}

