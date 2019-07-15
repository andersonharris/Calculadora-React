import React from 'react'



export default props =>
<div>
    <button onClick = {() => props.ShowNotification('Shopping')}>Shopping</button>
    <button onClick = {() => props.ShowMeNotification('Park')}>Park</button>


</div>