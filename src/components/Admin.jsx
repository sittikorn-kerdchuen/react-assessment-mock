import React,{useState} from 'react'

// components
import Navbar from './Navbar'
import TableData from './TableData'
import Create from './Create'
import Data from './Data'

function Admin() {

  const [users,setUsers] = useState(Data)
  console.log(typeof users)
 

    const createData = (name,lastname,position)=>{
      const data = {name,lastname,position};
      setUsers((prev)=>[...prev,data]) //spread opertors 
    } 

    const deleteData = (id) => {
      setUsers((prev)=>prev.filter((user)=>user.id !== id));
    }
  
  return (
    <div>
      <Navbar />
        <div className='mt-20'>
        <h1 className='text-center text-5xl font-bold mb-5'>Generation Thailand</h1>
        <h1 className='text-center text-5xl font-bold'>Admin - Sector</h1>
        </div>
        <Create createData={createData}  />
      <TableData  users={users} deleteData = {deleteData}/>
    </div>
  )
}

export default Admin