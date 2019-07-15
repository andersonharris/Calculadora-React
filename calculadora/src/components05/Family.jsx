import React from 'react'
import Members from './Members'



export default props =>
<div>
    <Members name="Anderson" lastname={props.lastname}></Members>
    <Members name="Anderson" lastname=" Rodrigues"></Members>
    <Members name="Anderson" lastname=" Josep"></Members>
    <Members name="Anderson" lastname={props.lastname}></Members>
</div>