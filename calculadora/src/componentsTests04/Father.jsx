import React from 'react'
import Children from './Children'


export default props =>{

    const locationShoppingChildren = 
        locationone => alert(`Liberado para o ${locationone}`)
    const locationParkChildren =
        locationtwo => alert(`Liberado para o  ${locationtwo}`)

    return (

        <Children  FunctionShopping={locationShoppingChildren}
        FunctionPark={locationParkChildren}></Children>
    )
}