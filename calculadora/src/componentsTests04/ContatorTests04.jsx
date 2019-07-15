import React, {Component} from 'react'


export default class ContatorTests04 extends Component{

    state = {

        number : this.props.number
    }

    increment = () => {

        this.alterNumber(1)
        //this.setState({ number: this.state.number + 1 })
       // this.state.number = this.state.number + 1
            
    }
    decrement = () =>{

        this.alterNumber(-1)
        //this.setState ({ number: this.state.number - 1 })
        //this.state.number = this.state.number - 1
    }

    alterNumber = difference =>{
        this.setState({
            number: this.state.number + difference
        })

    }


    render(){
        return(
            <div> 
                <div>Number : { this.state.number}</div>
                <button onClick={ this.increment }>Incr</button>
                <button onClick={ this.decrement }>Decr</button>
                <button onClick={ () => this.alterNumber(10)}>Incr10</button>
                <button onClick={() => this.alterNumber(-10)}>Decr10</button>
            </div>

        )
        
    }

}