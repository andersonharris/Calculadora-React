import React from 'react'
import ChildrenTest from './ChildrenTest'


export default props => {

    const FirstButtonChildren = 
        firstchildren => alert(`First Button show: ${firstchildren}`)
    const SecondButtonChildren =
        secondchildren => alert(`Second Button show: ${secondchildren}`) 

    return(

        <ChildrenTest ClickOneButton={FirstButtonChildren}
        ClickSecondButton={SecondButtonChildren}></ChildrenTest>
    )



}