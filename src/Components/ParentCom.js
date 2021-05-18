import React, { Component } from 'react'
import PureCom from './PureCom'
import RegCom from './RegCom'

class ParentCom extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Saurabh Kumar Singh'
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Saurabh Kumar Singh'
            })
        }, 5000)
    }
    
    render() {
        return (
            <div>
                Parent Component 
                <RegCom name={this.state.name}></RegCom>
                <PureCom name={this.state.name}></PureCom>
                
            </div>
        )
    }
}

export default ParentCom
