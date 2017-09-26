import React, { Component } from 'react'

class Faq extends Component {
  render(){
    return(
      <main style={{marginTop: '-40px'}} id="mainContent" className="main-content">
                  <div className="page-container pt-40 pt-10">
                      <div className="container">
                        <div className="contact-area contact-area-v1 panel">
                          <div className="ptb-30 prl-30">
                          <section className="section faq-area pb-60">
                              <h3 className="h-title mb-30 t-uppercase">OFTE STILLEDE SPØRGSMÅL</h3>
                              <div id="accordion" className="panel-group">
                                  <h4 className="mb-15">Generelle spørgsmål</h4>
                                  <div className="panel panel-default">
                                      <div className="panel-heading">
                                          <h5 className="panel-title">
                      		            	<a data-toggle="collapse" data-parent="#accordion" href="#faq_payment0" aria-expanded="false" className="collapsed">Hvordan sætter jeg min varer tilsalg på Trivelo?</a>
                      		            </h5>
                                      </div>
                                      <div id="faq_payment0" className="panel-collapse collapse" aria-expanded="false" style={{height: "0px"}}>
                                          <div className="panel-body and-more">
                                              <p className="mb-30">
                                                <br/>
                                                Klik på "Sådan gør du" og følg de 4 steps.
                                              </p>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="panel panel-default">
                                      <div className="panel-heading">
                                          <h5 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#faq_payment1" aria-expanded="false" className="collapsed">Hvad koster det at bruge Trivelo?</a>
                                      </h5>
                                      </div>
                                      <div id="faq_payment1" className="panel-collapse collapse" aria-expanded="false" style={{height: "0px"}}>
                                          <div className="panel-body and-more">
                                              <p className="mb-30">
                                                <br/>
                                                Trivelo 100% gratis.
                                              </p>
                                          </div>
                                      </div>
                                  </div>


                              </div>
                          </section>
                      </div>
                    </div>

                  </div>
                </div>



              </main>
    )
  }
}

export default Faq
