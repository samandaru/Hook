import React, { Component } from 'react'

import ReactHooks from './ReactHook';
import ReactOld from './ReactOld';

export default class App extends Component {
  render() {
    return (
      <div style={{display: 'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
        
        <ReactOld/>
      </div>
    )
  }
}
