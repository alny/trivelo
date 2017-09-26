import React, { Component } from 'react'

class About extends Component {
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
                                              <h3 className="t-uppercase h-title mb-20">Om Trivelo</h3>
                                              <p>Trivelo indsamler automatisk data fra diverse Triathlon og Cykling grupper på Facebook, hvor mere end 100 tusind personer dagligt sælger eller køber deres brugte ting. Vi kategoriserer og sorterer alt den data og giver dig på få sekunder en oversigt så du nemt og hurtigt kan finde det du leder efter.</p>
                                            <hr/>
                                            <h4>Vi sorterer og kategoriserer</h4>
                                            <p>
                                              Vi tilbyder en platform, hvor du hverken skal betale eller være medlem for at finde dit nye udstyr. Vi sælger ikke udstyr, men viser blot hvor det bedste udstyr findes og linker videre til sælgeren/udbyderen.
                                            </p>
                                              <hr/>
                                              <h4>Nemt, overskueligt og gratis</h4>
                                            <p>Vores system indsamler automatisk data fra Facebook grupper, og inddeler hvert opslag i forskellige kategorier, så du på få sekunder kan finde præcis det udstyr som du leder efter.</p>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="col-xs-12 col-md-6">

                                    <img style={{borderRadius: '5px'}} src="assets/images/about.jpg" alt=""/>

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

export default About
