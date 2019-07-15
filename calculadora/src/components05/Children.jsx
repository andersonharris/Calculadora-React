import React from 'react'

export default props =>
<div>
    <button onClick={() => props.ShowMessageShopping('Shopping')}>Shopping</button>
    <button onClick={() => props.ShowMessageShopping('Park')}>Park</button>
</div>