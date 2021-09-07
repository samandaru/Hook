import React, {useState, useEffect} from 'react'




const ReactHooks =(props)=> {
    const [Counter, setConter] = useState(props.count)
    const [status, setStatus] = useState("student")

    useEffect(() => {
        setConter(props.count)
        console.log("hooks clicjk");
    },[props.count])
        
        
    return(
        <>
        <h1>React Hook state {Counter}</h1>
        <input placeholder="state" value={status} onChange={(e)=>{setStatus(e.target.value)}}/>
        <div>
            ReactHook
            <button onClick={()=>setConter(Counter+1)}>+</button>
            <button onClick={()=>setConter(Counter-1)}>-</button>
        </div>
        </>
    )
}


export default ReactHooks