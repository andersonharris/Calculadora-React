import React, {Component} from 'react'


export default class Contator extends Component{

    state ={

        number: this.props.number
    }

    increment = () => {
       // this.setState({number: this.state.number + 1})
        //this.props.number++
      //  this.props.number = this.props.number + 1
        this.alterNumber(1)

    }
    decrement = () => { 
       // this.setState({number: this.state.number - 1})
       // this.props.number--
       //   this.props.number = this.props.number - 1
       this.alterNumber(-1)

    }
    alterNumber = difference => {
        this.setState({
            number: this.state.number + difference
        })
    }
    
    render(){
        return(
            <div>
                <div>Numero: {this.state.number}</div>
                <button onClick={ this.increment }>Incr</button>
                <button onClick={ this.decrement }>Decr</button>
                <button onClick={() => this.alterNumber(10)}>Incr10</button>
                <button onClick={() => this.alterNumber(-10)}>Decr10</button>
                <button onClick={() => this.alterNumber(20)}>Incr20</button>
                <button onClick={()=> this.alterNumber(-20)}>Decr20</button>

            </div>
       )
    }
}