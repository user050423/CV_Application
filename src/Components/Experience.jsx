import { useState } from 'react';
import JobEntry from './JobEntry.jsx';

export default function Experience(){

    const [ addButtonClicked, setAddButtonClicked ] = useState(false);
    const [ jobEntries, setJobEntries ] = useState([]);
    const [ editingId, setEditingId ] = useState(null);
    

    function saveJobToEntries(job){
        if (editingId){
            setJobEntries((prevData) => 
                prevData.map((entry) => 
                    entry.id === editingId ? {...entry, ...job } : entry
                )
            )
            setEditingId(null);
        } else {
            const newEntry = {...job, id: crypto.randomUUID()};
            setJobEntries((prevData) => [...prevData, newEntry]);
        }
    }

    function removeEntry(id){
        setJobEntries(jobEntries.filter(job => job.id !== id))
    }



    const currentEditingJob = jobEntries.find(job => job.id === editingId) 

    return(
        <>
            { !addButtonClicked && !editingId &&
            <button onClick={() => setAddButtonClicked(true)}>+ Add Job Experience</button> }
            {(addButtonClicked || editingId) && (
                <JobEntry 
                    addJobEntry={saveJobToEntries} 
                    cancelButton={()=> {!editingId ? setAddButtonClicked(false) : setEditingId(null)}}
                    selectedJob={currentEditingJob}
                />
            )}

            {jobEntries.length > 0 && 
            jobEntries.map((job, index) => {
                return (
                    <div key={job.id}>
                        <p>{job.jobName}</p>
                        <p>{job.position}</p>
                        <p>{job.startDate} - {job.endDate}</p>
                        <p>{job.description}</p>
                        <button onClick={() => removeEntry(job.id)}>Remove</button> 
                        <button onClick={() => setEditingId(job.id)}>Edit</button>
                    </div>
                )
            })
            }
        </>
    )
}