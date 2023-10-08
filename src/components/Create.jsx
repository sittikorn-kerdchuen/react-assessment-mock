import React,{useState} from 'react'

function Create({createData}) {
    const [name,setName] = useState("")
    const [lastname,setLastname] = useState("")
    const [position,setPosition] = useState("")
  return (
    <div className='flex gap-5 mt-5 justify-around w-1/2 mx-auto'>
        <input type="text" placeholder='name' className='border rounded p-2' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="text" placeholder='lastname' className='border rounded p-2' value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
        <input type="text" placeholder='position' className='border rounded p-2' value={position} onChange={(e)=>setPosition(e.target.value)}/>
        <button type='button' className='border p-2 rounded-xl bg-blue-500 text-white' onClick={()=>createData(name,lastname,position)}>Create</button>
    </div>
  )
}

export default Create