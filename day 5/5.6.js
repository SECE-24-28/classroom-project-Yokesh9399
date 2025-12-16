let fetch_API=async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await res.json();
    console.log(data);
}
fetch_API()