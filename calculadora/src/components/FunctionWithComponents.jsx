import React from 'react'
import FunctionWithMembers from './FunctionWithMembers'



export default props =>{

    const aproved = ['Anderson','Alberto','Ainsten','Aldair']
    const reproved =['Josefina','Joseha','Josua','Jardel','Joelma']

    const listAproved = itens =>{
        return itens.map(item =><FunctionWithMembers lastname=" Rodrigues" item= {item}></FunctionWithMembers>)
    }
    const listReproved = numbers =>{
        return numbers.map(number =><FunctionWithMembers lastname=" Silva" number= {number}></FunctionWithMembers>)
        
    }

    return (
            <ul>
                <h1>List Aproved</h1>
                <FunctionWithMembers name= {listAproved(aproved)}></FunctionWithMembers>
                <h1>List Reproved</h1>
                <FunctionWithMembers name= {listReproved(reproved)}></FunctionWithMembers>
            </ul>
            
        
    )
}