import React, {Component} from 'react'


class SignUp extends Component {
  constructor(){
    super()
    this.state = {
      credentials: {
        username: '',
        password: '',
        team: ''
      },
      inviteCode: ''
    }
  }


  updateCredentials(event){
    event.preventDefault()
    let updated = Object.assign({}, this.state.credentials)
    let invite = Object.assign({}, this.state.inviteCode)

    updated[event.target.id] = event.target.value
    console.log('credentials: ' + event.target.id + ' == ' + event.target.value)
    this.setState({
      credentials: updated,
      inviteCode: invite
    })

  }

  submitRegister(event){
    if(this.state.credentials.inviteCode != 'Beta'){
      console.log('Insert a valid invite Code!')
      return
    }
    if(this.state.credentials.username.length == 0){
      tconsole.log('Enter a Username to Sign Up Please!')
      return
    }
    if(this.state.credentials.username.length < 4){
      console.log('Please select a Username over 4 Characters')
      return
    }
    if(this.state.credentials.password.length == 0){
      console.log('Enter a Password to Sign Up Please!')
      return
    }
    if(this.state.credentials.password.length < 5){
      console.log('Please select a Password over 5 Characters')
      return
    }

    event.preventDefault()
    console.log('register: ' + JSON.stringify(this.state.credentials))
    this.props.onRegister(this.state.credentials)
  }



    render() {
        return (
        <div style={{padding: '0px'}} className="container">

          <div style={{width: '28.33%'}} className="col-lg-3">


        				<div className="input-group">
                            <span id="user-input" className="input-group-addon"><i className="fa fa-user-circle-o" aria-hidden="true"></i></span>
                            <input onChange={this.updateCredentials.bind(this)} id="username" maxLength="15" autoComplete="off" className="form-control" placeholder="Username" />
                        </div>
                        <br/>
                        <div className="input-group">
                            <span id="user-input" className="input-group-addon"><i style={{marginRight: '3px', marginLeft: '1px'}} className="fa fa-lock" aria-hidden="true"></i></span>
                            <input onChange={this.updateCredentials.bind(this)} id="password" maxLength="20" type="password" autoComplete="off" className="form-control" placeholder="Password" />
                        </div>
                        <br/>

                      <div className="input-group">
                                  <span id="user-input" className="input-group-addon"><i className="fa fa-ticket" aria-hidden="true"></i></span>
                                  <input onChange={this.updateCredentials.bind(this)} id="inviteCode" maxLength="15" autoComplete="off" className="form-control" placeholder="Invite Code" />
                              </div>

                        <br/>

                  <button style={{background: '#ef5d2d', borderColor: '#ef5d2d', marginBottom: '5px'}} onClick={this.submitRegister.bind(this)} className="btn btn-primary btn-block">Join</button>


        </div>
      </div>


        )
    }
}

export default SignUp
