import React from 'react'



 
    
    export default props =>
    <div>
        <button onClick={() => props.ExitNotification('Shopping')}>
            Exit

        </button>
        <button onClick={() => props.ShowNotification('Show me')}>
            Show me
        </button>

    </div>
    
  