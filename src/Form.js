import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comment: ''

        }
    }
    handelUsernameChange = (event) => {
        this.setState ({
            username: event.target.value
        })

    }
    handleCommentChange = event => {
        this.setState ({
            comment: event.target.value
        })
    }
    handleSubmit = event => {
        alert(` ${this.state.username} ${this.state.comment}`)
        event.preventDefault()//this function is to make page relode lost.

    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.handelUsernameChange}/>
                    <div>
                        <label> Comment </label>
                        <textarea value={this.state.comment} onChange={this.handleCommentChange}></textarea>
                    </div>
                    <div>
                        <button type="submit"> Submit </button>

                    </div>
                </form> 
                
            </div>
        )
    }
}

export default Form
