import React, {useState , useEffect} from 'react'


export default props =>{

    const [contator, setContator] = useState(100)
    const [status, setStatus] = useEffect('Par')

    useEffect ( () => {
        contator % 2 === 0 ? setStatus('Par') : setStatus('Impar')

        }
    )
    return(
        <div>  
            <h1>{contator}</h1>
            <h1>{status}</h1>
            <button onClick={() => setContator(contator +1)}></button>
            <button onClick={() => setContator(contator -1)}></button>
        </div>
    )
}