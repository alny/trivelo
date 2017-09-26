import React, { Component } from 'react'
import actions from '../../actions'
import  { Link } from 'react-router'
import { connect } from 'react-redux'

class Contact extends Component {
  render(){
    return(
            <main style={{marginTop: '-40px'}} id="mainContent" className="main-content">
                        <div className="page-container pt-40 pt-10">
                            <div className="container">
                              <div className="contact-area contact-area-v1 panel">
                                <div className="ptb-30 prl-30">

                                    <div className="row row-tb-20">
                                        <div className="col-xs-12 col-md-6">
                                            <div className="contact-area-col contact-info">
                                                <div className="contact-info">
                                                    <h3 className="t-uppercase h-title mb-20">Kontakt information</h3>
                                                    <p>Skyd os en E-mail hvis du har yderligere spørgsmål til Trivelo. Vi er altid klar ved tasterne til at besvare alle spørgsmål du skulle have.</p>
                                                    <ul className="contact-list mb-40">
                                                        <li>
                                                            <span className="icon fa fa-map-marker"></span>
                                                            <h5>Adresse</h5>
                                                            <p className="color-mid">København, Danmark</p>
                                                        </li>
                                                        <li>
                                                            <span className="icon fa fa-envelope-o"></span>
                                                            <h5>Email</h5>
                                                            <p className="color-mid">Kontakt@Trivelo.dk</p>
                                                        </li>
                                                        <li>
                                                            <span className="icon fa fa-phone"></span>
                                                            <h5>Telefon</h5>
                                                            <p className="color-mid">(+45) 5043xxxx</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-md-6">
                                            <div className="contact-area-col contact-form">
                                                <h3 className="t-uppercase h-title mb-20">Lad os snakkes ved</h3>
                                                <form action="#" method="post">
                                                    <div className="form-group">
                                                        <label>Navn</label>
                                                        <input type="text" name="navn" className="form-control" required="required"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Email Address</label>
                                                        <input type="text" name="from" className="form-control" required="required"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Årsag</label>
                                                        <input type="text" name="reason" className="form-control" required="required"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Besked</label>
                                                        <textarea rows="5" name="message" className="form-control" required="required"></textarea>
                                                    </div>
                                                    <button onClick={this.props.sendContactEmail.bind(this)} className="btn">Send Besked</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                                          </div>
                            </div>
                          </div>

                        </div>




                    </main>

    )
  }
}

const stateToProps = (state) => {
  return {

  }
}

const dispatchToProps = (dispatch) => {
  return {
    sendContactEmail: (email) => dispatch(actions.sendContactEmail(email))
  }
}
export default connect(stateToProps, dispatchToProps)(Contact)
