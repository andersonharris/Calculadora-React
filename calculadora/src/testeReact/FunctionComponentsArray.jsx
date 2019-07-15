import React from 'react'
import FunctionMembers from './FunctionMembers'


export default props =>{

    const aproved = ['Jonathan','Joseph','James','LiuKang']
    const reproved =['Anderson','Neves','July','Wesley']

    const listAproved = itens =>{
        return itens.map(item => <FunctionMembers lastname="Rodrigues" item={item}></FunctionMembers>)
    }

    const listReproved = itens =>{

        return itens.map(item =><FunctionMembers lastname="Silva" item={item}></FunctionMembers>)
    }
    return(
        <ul>
            <h1>List Aproved</h1>
            <FunctionMembers firstname = {listAproved(aproved)}></FunctionMembers>
            <h1>List Reproved</h1>
            <FunctionMembers firstname = {listReproved(reproved)}></FunctionMembers>


        </ul>


    )


}