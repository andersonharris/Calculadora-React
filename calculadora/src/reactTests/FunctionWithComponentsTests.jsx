import React from 'react'
import FunctionWithComponentsMembers from './FunctionWithComponentsMembers';


export default props =>{

    const aproved = ['Jão','Felipe','Vinicius','Roger','Jose']
    const reproved = ['Maria','Juliana','Marilia Mendonça','Maiara']

    const listAproved = itens => {
        return itens.map(item => <FunctionWithComponentsMembers item={item} lastname=" Rodrigues"></FunctionWithComponentsMembers>)
    }
    const listReproved = itens =>{
        return itens.map(item => <FunctionWithComponentsMembers item={item} lastname=" Silva"></FunctionWithComponentsMembers>)
    }
    return(
        
        <ul>
            <h1>List Aproved</h1>
            <FunctionWithComponentsMembers name= {listAproved(aproved)}></FunctionWithComponentsMembers>
            <h1>List Reproved</h1>
            <FunctionWithComponentsMembers name= {listReproved(reproved)}></FunctionWithComponentsMembers>
        </ul>


    )


    



}


