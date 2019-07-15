import React, {useState , useEffect} from 'react'


export default props => {

    const [contator, setContator] = useState(100)
    const [status, setStatus] = useState('Par')

    useEffect ( () =>{
        contator  % 2 === 0  ? setStatus('Par') : setStatus('Impar')

    })

    return(
        <div>
            <h1>{contator}</h1>
            <h3>{status}</h3>
            <button onClick={() => setContator(contator +1)}>Incr</button>
            <button onClick={() => setContator(contator -1)}>Decre</button>
        </div>

    )
}