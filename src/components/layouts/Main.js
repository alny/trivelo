import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


export default class Main extends Component {

  render(){
    return(
      <div id="pageWrapper" className="page-wrapper">
        <Navbar/>
          <div>
              {this.props.children}
          </div>
        <Footer/>
      </div>
    )
  }
}
