import React from 'react'
import FunctionWithMembers from './FunctionWithMembers'



export default props =>{

    const mammal= ['Horse','Dog','Fish','Ave']
    const amphibian = ['birds','jacare','mouse','cat']
    const arrayNumbers = [1,2,3,4,5]

    const double = itens =>{
        return itens.map(item => <FunctionWithMembers item={item * 2}></FunctionWithMembers>)

    }
    const listOne = itens =>{
        return itens.map(item => <FunctionWithMembers item={item} lastname=" mammal"></FunctionWithMembers>)
    }
    const listTwo = itens =>{
        return itens.map(item => <FunctionWithMembers item={item} lastname=" amphibian"></FunctionWithMembers>)

    }
    return(
        <ul>
            <h1>List Mammal</h1>
            <FunctionWithMembers name={listOne(mammal)}></FunctionWithMembers>
            <h1>List Amphibian</h1>
            <FunctionWithMembers name={listTwo(amphibian)}></FunctionWithMembers>
            <h1>Double numbers</h1>
            <FunctionWithMembers number={double(arrayNumbers)}></FunctionWithMembers>
        </ul>
    )

}