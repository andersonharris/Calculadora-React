import React from 'react'
import Members from './Members'


export default props =>

<div>
    <Members name="Anderson " lastname={props.lastname}></Members>
    <Members name="Alberto " lastname="Rodrigues"></Members>
    <Members name="Atanael " lastname="Joseph"></Members>
    <Members name="Anselmo "lastname={props.lastname}></Members>
    <Members name="Antonio "lastname={props.lastname}></Members>

</div>