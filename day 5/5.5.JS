let res=fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>{
        // console.log(data.json())
        return res.json()
    }
    )
    .then(user=>{
        console.log(user)
    })
    
console.log(res)

// function demo()
// {
//     return "India"
// }
// let x=demo()