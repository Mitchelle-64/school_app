import React from 'react'
import { useEffect, useState } from 'react'
import dashboardHeader from './DashboardHeader'

function Dashboard() {
  const [posts, setPost] = useState([])
  useEffect (() => {
    fetch ('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setPost(data));
  }, [posts])

  return (
    <div>
        <dashboardHeader />
        <h1> This is the dashboard and it opens when you click "Log in </h1>
        <table>
            <tr>
                <thead> 
                    <th> ID </th>
                    <th> Title </th>
                    <th> Body </th>
                    <th colSpan={'2'}> Action</th>
                </thead>
            </tr>
            {
                posts.map(item => {
                    return (
                        <tr>
                            <td> {item.id}</td>
                            <td> {item.title} </td>
                            <td> {item.body}</td>
                            <td> edit </td>
                            <td> delete</td>
                        </tr>
                        
                    )
                })
            }
        </table>
    
    </div>
  )
}

export default Dashboard