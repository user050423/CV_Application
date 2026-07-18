import { useEffect, useState } from 'react';


export default function SchoolEntry({ addSchoolEntry, cancelButton, selectedSchool }){

    const [ formData, setFormData ] = useState({
        schoolName: selectedSchool?.schoolName || '',
        degree: selectedSchool?.degree || '',
        startDate: selectedSchool?.startDate || '',
        endDate: selectedSchool?.endDate || ''
    })

    useEffect(() => {
        setFormData({
            schoolName: selectedSchool?.schoolName || '',
            degree: selectedSchool?.degree || '',
            startDate: selectedSchool?.startDate || '',
            endDate: selectedSchool?.endDate || ''
        });
    }, [selectedSchool]);


    function handleChange(e){
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    function submitEntry(e){
        e.preventDefault();
        addSchoolEntry(formData);
        cancelButton();
    }

    return(
        <form onSubmit={submitEntry}>
            <label>School/Univeristy</label>
            <input 
                type='text'
                name='schoolName'
                value={formData.schoolName}
                onChange={handleChange}
                required
            />
            <label>Degree</label>
            <input 
                type='text'
                name='degree'
                value={formData.degree}
                onChange={handleChange}
                required
            />
            <label>Start Date</label>
            <input 
                type='number'
                name='startDate'
                value={formData.startDate}
                onChange={handleChange}
                required
            />
            <label>End Date</label>
            <input 
                type='number'
                name='endDate'
                value={formData.endDate}
                onChange={handleChange}
                required
            />
            <button type='submit'>Submit</button>
            <button type='button' onClick={cancelButton}>Cancel</button>
        </form>
    )
}