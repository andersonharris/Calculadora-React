import React, {Component} from 'react'



export default class ContatorTest extends Component {

    
        state = {

            number: this.props.number
        }

       
        componentDidMount = () =>{
            var intervalId = setInterval(this.timer, 1000)

            this.setState({intervalId: intervalId})
        }
        componentWillMount = () => {

            clearInterval(this.state.intervalId)
        }
        
        timer = () => {

            var currentCount = this.setState({ number: this.state.number - 1 })
            var newState = this.state.number - 1 ;
            if(newState >= 0){

                this.setState({ currentCount : newState})
                console.log(this.state.number);
            }else{
                clearInterval (this.state.intervalId)

            }
        }


    

        init = () => {
            let newNumber = this.state.number;
            while(this.state.number < 11){
                  if(newNumber != 0){
                     this.setState({number: this.state.number - 1 })
                     
                   
                  }
                  
                  console.log(this.state.number);
                  break;
                  
       
            }
           
        }
    

        increment = () =>{

            this.alterNumber(1)
          // this.setState({number: this.state.number + 1})

        }
        decrement = () =>{

         this.alterNumber(-1)
         // this.setState({number : this.state.number -1})
        
        }

        alterNumber = difference =>
            this.setState({
                number : this.state.number + difference


            })

        render(){
        return(
            <div>
                <div>Number: { this.state.number }</div>
                <button onClick= { this.init } > Iniciar </button>
                <button onClick= { this.increment}>Incr</button>
                <button onClick= { this.decrement}>Decr</button>
                <button onClick={() => this.alterNumber(10)}>Incr10</button>
                <button onClick={() => this.alterNumber(-10)}>Decr10</button>
                <button onClick={() => this.alterNumber(20)}>Incr20</button>
                <button onClick={() => this.alterNumber(-20)}>Decr20</button>


            </div>


        )


    }


}