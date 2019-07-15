import React from 'react'
import Children from './Children'




    export default props =>{

   const ExitNotificationChildren = 
        place => alert(`Liberado para ${place}`)

    const ShowNotificationChildren =
      show => alert(`Liberado para ${show}`)

       return(

            <div>
                <Children ExitNotification={ExitNotificationChildren}></Children>
                <Children ShowNotification={ShowNotificationChildren}></Children>
             </div>
        )


}
