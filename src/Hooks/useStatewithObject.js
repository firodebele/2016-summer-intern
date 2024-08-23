import React, { useState } from 'react'

function UseStatewithObject() {
    const [name, setName] = useState({FName: '', LName: ''})
  return (
    <div>
        <form>
            <input type='text' value={name.FName} onChange={e => setName({...name, FName: e.target.value})}/>
            <input type='text' value={name.LName} onChange={e => setName({...name, LName: e.target.value})}/>

            <h1>Your first name is:  {name.FName} </h1>
            <h1>Your last name is:  {name.LName} </h1>
        </form>
    </div>
  )
}

export default UseStatewithObject;