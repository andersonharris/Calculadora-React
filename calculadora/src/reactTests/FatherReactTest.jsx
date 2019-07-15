import React from 'react'
import ChildrenReactTest from './ChildrenReactTest'



export default props =>{

    const ShowNotificationChildren =
    firstbutton => alert(`Liberty to, ${firstbutton}`)

    const ShowMeNotificationChildren =
    secondbutton => alert(`Liberty to,  ${secondbutton}`)


    return(

        <ChildrenReactTest ShowNotification={ShowNotificationChildren} 
        ShowMeNotification={ShowMeNotificationChildren}></ChildrenReactTest>

    )
}

