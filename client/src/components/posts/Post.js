import React, {useEffect} from 'react'

export default function Post({post: {title,body}}) {
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
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
}
