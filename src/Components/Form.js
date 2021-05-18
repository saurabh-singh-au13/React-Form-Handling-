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
        alert(`You have typed ${this.state.username} ${this.state.comment}`)
        event.preventDefault()//this function is to make page relode lost.

    }
    
    render() {
        const { username, comment } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input type="text" value={username} onChange={this.handelUsernameChange}/>
                    <div>
                        <label> Comment </label>
                        <textarea value={comment} onChange={this.handleCommentChange}></textarea>
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
