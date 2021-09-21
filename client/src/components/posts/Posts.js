import React, {useEffect} from 'react'

export default function Posts() {
    useEffect(()=> {
        const fetchData = async () => {
            try {
                //const res = await api.get("/")
                //console.log(res);
            }catch(err){
                console.log(err);
            }
        }
        fetchData()
    },[])
    return (
        <div>
            <h1>Posts</h1>
        </div>
    )
}
