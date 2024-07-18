import React from 'react'
import { useState } from 'react'

export const NameList = () => {
    const [names, setNames] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddName = () => {
        if(inputValue.trim() !== '') {
            setNames([...names,inputValue])
            setInputValue('')
        }
    }

  return (
    <>
        <h2>Lista de Nombres</h2>
        <div>
            <input type="text" placeholder='Agregar un nombre' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handleAddName}>Agregar</button>
        </div>
        
        {
            names.map((name, index) => (
                <ul>
                    <li key={index}>{name}</li>
                </ul>
            )) 
        }
        <hr/>
    </>
  )
}
