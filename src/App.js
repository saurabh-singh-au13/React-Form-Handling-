import React, { Component } from 'react'
import Facebook from './Components/Facebook';
import Form from './Components/Form'

import Fragment from './Components/Fragment';
import ParentCom from './Components/ParentCom';
import PureCom from './Components/PureCom';
import Table from './Components/Table';


class App extends Component {
  render() {
    return (
      <div>
        <h1> Facebook</h1>
        <p> To get Started with Facebook authentication </p>
        

        <Facebook />
        
        
      </div>
    )
  }
}

export default App
