import React, {useEffect} from 'react'

export default function Post() {
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
            <h1>Post</h1>
        </div>
    )
}
