import React, {Component} from 'react'



export default class Contator extends Component {

    state = {
         number: this.props.number
    }


    increment = () => {


       // this.props.number++
        this.alterNumber(1)
       // this.setState({number: this.state.number + 1})
        //this.state.number = this.state.number + 1;
        
    }
    
    decrement = () => {
       
        //this.props.number--
         this.alterNumber(-1)
        //this.setState({number: this.state.number - 1})
        //this.state.number = this.state.number + 1;
        
    }

    alterNumber = diferrence => {
        this.setState({
            number: this.state.number + diferrence
        })
    }


    render() {
        return (
            <div>
                <div>Numero: { this.state.number }</div>
                <button onClick = { this.increment } >Inc</button>
                <button onClick={ this.decrement }>DEC</button>
                <button onClick = { () => this.alterNumber(10) } >Inc10</button>
                <button onClick={ () => this.alterNumber(-10) }>DEC10</button>
                <button onClick={() =>  this.alterNumber(20)}>INCR20</button>
                <button onClick={() => this.alterNumber(-20)}>DEC20</button>

            </div>
        )
    }
}

// Solução 01 - function anonymous Arrow
//increment = () => {

  //  this.props.number++;
//}


//Solução 02
//<button onClick = { () => this.increment()} >Inc</button>

//Soluçao 03
//constructor(props){
    // super(props)
    //this.increment = this.increment.bind(this)

//}