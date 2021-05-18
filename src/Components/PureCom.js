import React, { PureComponent } from 'react'

class PureCom extends PureComponent {
    render() {
        return (
            <div>
                Pure Component 
                {this.props.name}
                
            </div>
        )
    }
}

export default PureCom
