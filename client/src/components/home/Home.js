import React from 'react'
import Posts from '../posts/Posts'
import Login from '../auth/Login'

export default function Home() {
    return (
        <div className="container layout">
            <div>
                <Posts />
            </div>
            <div><Login /></div>
        </div>
    )
}
