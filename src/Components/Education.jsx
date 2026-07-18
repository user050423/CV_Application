import { useState } from 'react';
import SchoolEntry from './SchoolEntry.jsx';

export default function Education(){

    const [ addButtonClicked, setAddButtonClicked ] = useState(false);
    const [ schoolEntries, setSchoolEntries ] = useState([]);
    const [ editingId, setEditingId ] = useState(null);
    

    function saveSchoolToEntries(school){
        if (editingId){
            setSchoolEntries((prevData) => 
                prevData.map((entry) => 
                    entry.id === editingId ? {...entry, ...school } : entry
                )
            )
            setEditingId(null);
        } else {
            const newEntry = {...school, id: crypto.randomUUID()};
            setSchoolEntries((prevData) => [...prevData, newEntry]);
        }
    }

    function removeEntry(id){
        setSchoolEntries(schoolEntries.filter(school => school.id !== id))
    }



    const currentEditingSchool = schoolEntries.find(school => school.id === editingId) 

    return(
        <>
            { !addButtonClicked && !editingId &&
            <button onClick={() => setAddButtonClicked(true)}>+ Add School</button> }
            {(addButtonClicked || editingId) && (
                <SchoolEntry 
                    addSchoolEntry={saveSchoolToEntries} 
                    cancelButton={()=> {!editingId ? setAddButtonClicked(false) : setEditingId(null)}}
                    selectedSchool={currentEditingSchool}
                />
            )}

            {schoolEntries.length > 0 && 
            schoolEntries.map((school, index) => {
                return (
                    <div key={school.id}>
                        <p>{school.schoolName}</p>
                        <p>{school.degree}</p>
                        <p>{school.startDate} - {school.endDate}</p>
                        <button onClick={() => removeEntry(school.id)}>Remove</button> 
                        <button onClick={() => setEditingId(school.id)}>Edit</button>
                    </div>
                )
            })
            }
        </>
    )
}