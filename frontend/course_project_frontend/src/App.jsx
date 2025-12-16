import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { addcourse, getcourse ,deletecourse ,updatecourse} from './api/courseapi'
function App() {
  const [courses, setcourses] = useState([])
  const [duration,setduration]=useState("")
  const [title, settitle] = useState("")
  const [editid,seteditid]=useState("")
  const fetchcourse=async()=>{
    const res=await getcourse();
    setcourses(res.data);
  }
  useEffect(()=>{
    fetchcourse();
  },[])
  const handleSubmit=async(e)=>{
    e.preventDefault();
    await addcourse({title,duration});
    fetchcourse();
    settitle("");
    setduration("");
 
  }
  
  const handleDelete=async(id)=>{
    await deletecourse(id);
    fetchcourse();
    alert("course deleted successsful!!...");
  }

  const handleUpdate=async(id)=>{
    await updatecourse(id,{title,duration});
    fetchcourse();
    settitle("");
    setduration("");
    seteditid("");
  }
  return (
    <>
    <form onSubmit={editid?(e)=>{e.preventDefault();handleUpdate(editid);}:handleSubmit}>
      <input type="text" placeholder="Enter Course Title" value={title} onChange={(e)=>settitle(e.target.value)}/>
      <br />
      <input type="text" placeholder="Enter Course Duration" value={duration} onChange={(e)=>setduration(e.target.value)} />
      <br /><hr />
      <button>{editid?"Update Course":"Add Course"}</button>
    </form>
    <ul>
      {
        courses.map((c,i)=>
          <li key={i}>
            {c.title} - {c.duration} <button onClick={()=>{settitle(c.title);setduration(c.duration);seteditid(c._id);}}>Edit</button><button onClick={()=>handleDelete(c._id)}>Delete</button>
          </li>
        )
      }
    </ul>
    </>
  )
}

export default App