import React from 'react'
import Members from './Members'




// comunicação direta passagem da propriedade da clase pai para a classe filha
export default props =>
    <div>
        <Members name="Anderson" lastname="Silva"></Members>
        <Members name="Jose" lastname="Silva"></Members>
        <Members name="Jhonatan" lastname="Silva"></Members>
        <Members name="Josefina" lastname="Silva"></Members>
        <Members name="Julie" lastname="Silva"></Members>
    </div>

