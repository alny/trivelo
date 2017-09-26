import React, { Component } from 'react'
import  { Link, browserHistory } from 'react-router'
import actions from '../../actions'
import { connect } from 'react-redux'


class Navbar extends Component {
  constructor(){
      super()
      this.state = {

      }
}

selectTopCategory(category, event){
event.preventDefault()
this.props.selectTopCategory(category)
}


  render(){
    return(

      <div className="container">

      <nav className="navbar navbar-default" role="navigation">
        <div className="container-fluid">


            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to={'/'} href="#">
              <img className="logo-img" src="assets/images/Trivelo-logo_xs.png" alt=""/>
            </Link>


          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul style={{marginBottom: '0px'}} className="nav navbar-nav">
              <li className="logo-text"><Link to={'/'} style={{color: 'rgb(70, 80, 107)'}} href="#">Trivelo</Link></li>
              <li style={{paddingTop: '0px'}} className="dropdown">
                <a style={{color: '#314555', height: '100px', lineHeight: '70px', fontSize: '13px', marginRight: '10px'}} href="#" className="dropdown-toggle" data-toggle="dropdown">Cykling <i style={{marginLeft: '3px'}} className="fa fa-angle-down" aria-hidden="true"></i></a>
                <ul style={{marginTop: '0px'}} className="dropdown-menu">
                  <li onClick={this.selectTopCategory.bind(this, 'cykler')}><Link className="drop-text" to={'/cykler'}>Cykler</Link></li>
                  <li onClick={this.selectTopCategory.bind(this, 'cykelhjul')}><Link className="drop-text" to={'/cykelhjul'}>Cykelhjul</Link></li>
                  <li onClick={this.selectTopCategory.bind(this, 'cykelbekladning')}><Link className="drop-text" to={'/cykelbekladning'}>Cykelbeklædning</Link></li>
                  <li onClick={this.selectTopCategory.bind(this, 'cykelkomponenter')}><Link className="drop-text" to={'/cykelkomponenter'}>Cykel Komponenter</Link></li>
                  <li onClick={this.selectTopCategory.bind(this, 'cykeltilbehor')}><Link className="drop-text" to={'/cykeltilbehor'}>Cykel Tilbehør</Link></li>
                </ul>
              </li>
              <li style={{paddingTop: '0px'}} className="dropdown">
                <a style={{color: '#314555', height: '100px', lineHeight: '70px', fontSize: '13px'}} href="#" className="dropdown-toggle" data-toggle="dropdown">Løb <i style={{marginLeft: '3px'}} className="fa fa-angle-down" aria-hidden="true"></i></a>
                <ul style={{marginTop: '0px'}} className="dropdown-menu">
                  <li onClick={this.selectTopCategory.bind(this, 'lobm')}><Link className="drop-text" to={'/løbeudstyr-mænd'} href="#">Løbetøj til Mænd</Link></li>
                  <li onClick={this.selectTopCategory.bind(this, 'lobk')}><Link className="drop-text" to={'/løbeudstyr-kvinder'} href="#">Løbetøj til Kvinder</Link>  </li>
                  <li onClick={this.selectTopCategory.bind(this, 'lobtil')}><Link className="drop-text" to={'/løbetilbehør'} href="#">Løbe Tilbehør</Link></li>
                </ul>
              </li>
              <li style={{paddingTop: '0px'}} className="dropdown">
                <a style={{color: '#314555', height: '100px', lineHeight: '70px', fontSize: '13px'}} href="#" className="dropdown-toggle" data-toggle="dropdown">Svømning <i style={{marginLeft: '3px'}} className="fa fa-angle-down" aria-hidden="true"></i></a>
                <ul style={{marginTop: '0px'}} className="dropdown-menu">
                  <li onClick={this.selectTopCategory.bind(this, 'vaddragte')}><Link className="drop-text" to={'/våddragte'} href="#">Våddragte</Link></li>
                  <li onClick={this.selectTopCategory.bind(this, 'svom')}><Link className="drop-text" to={'/svømmetøj-mænd'} data-toggle="modal" data-target="#SignUpModal" href="#">Svømmetøj til Mænd</Link></li>
                  <li onClick={this.selectTopCategory.bind(this, 'svok')}><Link className="drop-text" to={'/svømmetøj-kvinder'} href="#">Svømmetøj til Kvinder</Link></li>
                  <li onClick={this.selectTopCategory.bind(this, 'svomudstyr')}><Link className="drop-text" to={'/svømmeudstyr'} href="#">Svømmeudstyr</Link></li>
                </ul>
              </li>
              <li style={{paddingTop: '0px'}} className="dropdown">
                <a style={{color: '#314555', height: '100px', lineHeight: '70px', fontSize: '13px'}} href="#" className="dropdown-toggle tree-dots" data-toggle="dropdown">
                  <i style={{marginRight: '3px'}} className="fa fa-circle" aria-hidden="true"></i>
                  <i style={{marginRight: '3px'}} className="fa fa-circle" aria-hidden="true"></i>
                  <i className="fa fa-circle" aria-hidden="true"></i>
                </a>
                <ul style={{marginTop: '0px'}} className="dropdown-menu">
                  <li><Link className="drop-text" to={'/om'} href="#">Om</Link></li>
                  <li><Link className="drop-text" to={'/sadan'} href="#">Sådan gør du!</Link></li>
                  <li><Link className="drop-text" to={'/faq'} href="#">FAQ</Link></li>
                  <li><Link className="drop-text" to={'/kontakt'} href="#">Kontakt</Link></li>
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <Link to={'/sadan'}><button className="btn btn-lg kom-igang">SÅDAN GØR DU <i className="fa fa-handshake-o" aria-hidden="true"></i></button></Link>

              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    user: state.account.user,
    navbar: state.navbar
  }
}

const dispatchToProps = (dispatch) => {
  return {
    selectTopCategory: (category) => dispatch(actions.selectTopCategory(category))
  }
}

export default connect(stateToProps, dispatchToProps)(Navbar)
