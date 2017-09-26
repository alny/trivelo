import React, {Component} from 'react'
import { SignUp } from '../containers'
import  { Link, browserHistory } from 'react-router'
import actions from '../../actions'
import { connect } from 'react-redux'

class Login extends Component {
  constructor(){
    super()
    this.state = {
      credentials: {
        username: '',
        password: ''
      }
    }
  }

  componentDidMount(){
    if(this.props.user == null)
    this.props.checkCurrentUser()
  }


  updateCredentials(event){
    event.preventDefault()
    let updated = Object.assign({}, this.state.credentials)
    updated[event.target.id] = event.target.value
    console.log('credentials: ' + event.target.id + ' == ' + event.target.value)
    this.setState({
      credentials: updated
    })

  }

  submitLogin(event){
    if(this.state.credentials.username.length == 0){
      console.log('Enter a Username to Login Please!')
      return
  }
    if(this.state.credentials.password.length == 0){
      console.log('Enter a Password to Login Please!')
      return
    }
    event.preventDefault()
    console.log('register: ' + JSON.stringify(this.state.credentials))
    this.props.login(this.state.credentials)
    .then(response => {
      browserHistory.push('/')
      window.location.reload('/')
    })
  }



    render() {
        return (

          <div className="container" style={{marginBottom: '10%', marginTop: '5%'}}>
            <div className="row vertical-offset-100">
            	<div className="col-md-4 col-md-offset-4">
            		<div className="panel panel-default">
        			  	<div className="panel-heading">
        			    	<h3 className="panel-title">Trivelo | Sign In</h3>
        			 	</div>
        			  	<div className="panel-body">
        			    	<form acceptCharset="UTF-8" role="form">
                            <fieldset>
        			    	  	<div className="form-group">
        			    		    <input onChange={this.updateCredentials.bind(this)} className="form-control" autoComplete="off" placeholder="Username" id="username" type="text"/>
        			    		</div>
        			    		<div className="form-group">
        			    			<input onChange={this.updateCredentials.bind(this)} className="form-control" placeholder="Password" autoComplete="off"  id="password" type="password"/>
        			    		</div>
        			    		<div className="checkbox">
        			    	    	<label>
        			    	    		<input name="remember" type="checkbox" value="Remember Me"/> Remember Me
        			    	    	</label>
        			    	    </div>
        			    		<input onClick={this.submitLogin.bind(this)} className="btn btn-lg btn-success btn-block" type="submit" value="Login"/>
        			    	</fieldset>
        			      	</form>
        			    </div>
        			</div>
        		</div>
        	</div>
        </div>


        )
    }
}

const stateToProps = (state) => {
  return {
    user: state.account.user
  }
}

const dispatchToProps = (dispatch) => {
  return {
    login: (credentials) => dispatch(actions.login(credentials)),
    checkCurrentUser: (params) => dispatch(actions.checkCurrentUser(params))

  }
}

export default connect(stateToProps, dispatchToProps)(Login)
