import React, { useState } from 'react'

export const NoteApp = () => {
    const [notes, setNotes] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddNote = () => {
        if(inputValue.trim() !== '') {
            setNotes([...notes,inputValue]);
            setInputValue('');
        }
    };

    const handleDeteleNote = (index) => {
        const updatedNotes = ([...notes]);
        updatedNotes.splice(index, 1);
        setNotes(updatedNotes);
    }

  return (
    <>
        <h2>Notas</h2>
        <div>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handleAddNote}>Agregar nota</button>
        </div>
        <ul>
            {
                notes.map((note, index) => (
                        <li key={index}>{note} <button onClick={handleDeteleNote}>Eliminar</button></li>
                ))
            }
        </ul>
        
    </>
  )
}
