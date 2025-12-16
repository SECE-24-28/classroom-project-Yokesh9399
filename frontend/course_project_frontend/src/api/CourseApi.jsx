import axios from "axios";
const api=axios.create({baseURL:"http://localhost:4000/api"})
export const getcourse=()=>api.get("/courses")
export const addcourse=(course)=>api.post("/courses",course)
export const updatecourse=(id,course)=>api.put(`/courses/${id}`,course)
export const deletecourse=(id)=>api.delete(`/courses/${id}`)