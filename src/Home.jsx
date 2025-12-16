import React from 'react'

const Home = ({searchResult}) => {
return (
    <div>
        {
        searchResult.map((post)=>
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.dateTime}</p>
                <p>{post.body}</p>
                <hr/>
            </div>
        )
    }
    </div>
)
}

export default Home