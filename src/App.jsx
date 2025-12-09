import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/footer'

function App() {
  const [list, setList] = useState([
    { id: 1, sname: "Vishal", fee: true },
    { id: 2, sname: "Vasanth", fee: false },
    { id: 3, sname: "Vedhanth", fee: true },
    { id: 4, sname: "Vimal", fee: false },
    { id: 5, sname: "Vignesh", fee: true },
    { id: 6, sname: "Thomas", fee: false },
    { id: 7, sname: "Tharun", fee: false },
    { id: 8, sname: "Shairaj", fee: true },
    { id: 9, sname: "Yokesh", fee: true },
    { id: 10, sname: "Surendar", fee: false },
    { id: 11, sname: "Thamil", fee: true },
    { id: 12, sname: "Ubendiran", fee: true },
    { id: 13, sname: "Muruga", fee: false },
    { id: 14, sname: "Thiru", fee: true },
    { id: 15, sname: "Saravana", fee: false }
  ])

  const [newName, setNewName] = useState("")
  const [search, setSearch] = useState("")

  const filteredList = list.filter((student) =>
    student.sname.toLowerCase().includes(search.toLowerCase())
  )

  const handleDelete = (id) => {
    const newList = list.filter((ls) => ls.id !== id)
    setList(newList)
  }

  const handleCheck = (id) => {
    const newList = list.map((ls) =>
      ls.id === id ? { ...ls, fee: !ls.fee } : ls
    )
    setList(newList)
  }

  const handleAddStudent = () => {
    if (newName.trim() === "") {
      alert("Please enter a student name")
      return
    }
    const newStudent = {
      id: list.length > 0 ? Math.max(...list.map(s => s.id)) + 1 : 1,
      sname: newName,
      fee: false
    }
    setList([...list, newStudent])
    setNewName("")
  }

  return (
    <>
      <Header title={"Student List"} />
      <div className="search-bar">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search student by name"
        />
      </div>
      <Body
        list={filteredList}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <div className="add-student">
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter student name"
          onKeyPress={(e) => e.key === "Enter" && handleAddStudent()}
        />
        <button onClick={handleAddStudent}>Add Student</button>
      </div>
      <Footer len={list.length} />
    </>
  )
}

export default App