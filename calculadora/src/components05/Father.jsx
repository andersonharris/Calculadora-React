import React from 'react'
import Children from './Children'


export default props =>{
    const A = 
        childrena => alert(`Passear no shopping: ${childrena}`)
    const B = 
        childrenb => alert(`Passeio no Park: ${childrenb}`)

    return(
        <div>
           <Children ShowMessageShopping={A}
            ShowMessageParK={B}
            ></Children>
            
        </div>


       
    )
}