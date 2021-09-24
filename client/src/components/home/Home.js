import React, {Fragment} from 'react'
import Posts from '../posts/Posts'
import Login from '../auth/Login'
import PopularPosts from '../popular/PopularPosts'

export default function Home() {
    return (
        <Fragment>
            <div>
                <Posts />
            </div>
            <div  className="sidebar"><Login /><PopularPosts/></div>
        </Fragment>
    )
}
