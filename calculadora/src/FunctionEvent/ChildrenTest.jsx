import React from 'react'



export default props =>
<div>
    <button onClick= {() => props.ClickOneButton('First Button')}>First Button</button>
    <button onClick={() => props.ClickSecondButton('Second Button')}>Second Button</button>

</div>