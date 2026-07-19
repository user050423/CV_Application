import { useEffect, useState } from 'react';


export default function JobEntry({ addJobEntry, cancelButton, selectedJob }){

    const [ formData, setFormData ] = useState({
        jobName: selectedJob?.jobName || '',
        position: selectedJob?.position || '',
        startDate: selectedJob?.startDate || '',
        endDate: selectedJob?.endDate || '',
        description: selectedJob?.description || ''
    })

    useEffect(() => {
        setFormData({
            jobName: selectedJob?.jobName || '',
            position: selectedJob?.position || '',
            startDate: selectedJob?.startDate || '',
            endDate: selectedJob?.endDate || '',
            description: selectedJob?.description || ''
        });
    }, [selectedJob]);


    function handleChange(e){
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    function submitEntry(e){
        e.preventDefault();
        addJobEntry(formData);
        cancelButton();
    }

    return(
        <form onSubmit={submitEntry}>
            <label>Company</label>
            <input 
                type='text'
                name='jobName'
                value={formData.jobName}
                onChange={handleChange}
                required
            />
            <label>Position</label>
            <input 
                type='text'
                name='position'
                value={formData.position}
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
            <textarea
                name='description'
                value={formData.description}
                onChange={handleChange}
            ></textarea>
            <button type='submit'>Submit</button>
            <button type='button' onClick={cancelButton}>Cancel</button>
        </form>
    )
}