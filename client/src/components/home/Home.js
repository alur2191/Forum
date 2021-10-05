import React, {Fragment} from 'react'
import Posts from '../posts/Posts'
import Sidebar from './Sidebar'

export default function Home() {
    return (
        <Fragment>
            <div>
                <Posts />
            </div>
            <Sidebar />
        </Fragment>
    )
}
