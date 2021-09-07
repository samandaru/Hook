import React, { Component } from 'react'
import ReactHooks from './ReactHook'

export default class ReactOld extends Component {
    constructor(props){
        super(props)
        this.state = {
            counter: 0,
            status:'student'
        }
    }
    render() {
        return (
            <>
            <ReactHooks count={this.state.counter}/>
            <h1>React Old state{this.state.counter}</h1>
            <input placeholder="state" value={this.state.status} onChange={(e)=>this.setState({status: e.target.value})}/>
            <div>
                ReactOld
                <button onClick={()=>this.setState({counter: this.state.counter +1})}>+</button>
                <button onClick={()=>this.setState({counter: this.state.counter -1})}>-</button>
            </div>
            </>
        )
    }
}
