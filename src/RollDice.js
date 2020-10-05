import React, { Component } from 'react';
import Die from './Die'
import './RollDice.css'

class RollDice extends Component {
    constructor(props){
        super(props)
        this.state = {
            num1: Math.floor(Math.random() * 6) + 1.0,
            num2: Math.floor(Math.random() * 6) + 1.0,
            rolling: false
        }
        this.setRandomDice = this.setRandomDice.bind(this)
    }

    setRandomDice() {
        this.setState({
            num1: Math.floor(Math.random() * 6) + 1,
            num2: Math.floor(Math.random() * 6) + 1,
            rolling: true
        })

        // Wait one second
        setTimeout(
            ()=>{
                this.setState({
                    rolling: false
                })
            }, 1000
        );
    }

    render() {
        return (
                <div className="RollDice">
                    <Die num={this.state.num1} rolling={this.state.rolling}/>
                    <Die num={this.state.num2} rolling={this.state.rolling}/>
                    <button onClick = {this.setRandomDice} disabled={
                        this.state.rolling
                    }>
                        {this.state.rolling?'Rolling':'Roll Dice'}
                    </button>
                </div>
            )
        }
}

export default RollDice