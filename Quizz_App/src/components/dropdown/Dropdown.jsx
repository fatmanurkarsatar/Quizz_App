import React from 'react'
import './Dropdown.css'

const dropdown = ({data, setDifficultyChange}) => {
  return (
    <div className='dropdown'>
      <select onChange={e => setDifficultyChange(e.target.value)} 
      name="soru" id="cevap">
        {
          data.map((dt,i) => (
            <option key={i} value={dt}>{dt}</option>       
           ))
        }

      </select>
    </div>
  )
}

export default dropdown