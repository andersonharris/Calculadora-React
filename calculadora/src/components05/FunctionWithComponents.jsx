import React from 'react'
import FunctionWithMembers from './FunctionWithMembers'

export default props =>{

    const listAproved = [1,2,3,4]
    const listReproved = [2,4,5,6]

    const itemOne = itens =>{
        return itens.map(item => <FunctionWithMembers item={item * 2}></FunctionWithMembers>)
    }
    const itemTwo = itens =>{
        return itens.map(item =><FunctionWithMembers item={item * 2}></FunctionWithMembers>)
    }
       
    return(
        <ul>
            <h1>List First</h1>
            <FunctionWithMembers name={itemOne(listAproved)}></FunctionWithMembers>
            <h1>List Second</h1>
            <FunctionWithMembers name={itemTwo(listReproved)}></FunctionWithMembers>

        </ul>


    )



}
