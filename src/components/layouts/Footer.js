import React, { Component } from 'react'
import  { Link } from 'react-router'


class Footer extends Component {
  render(){
    return(
      <div>
      <section style={{marginTop: '20px'}} className="footer-top-area pt-70 pb-30 pos-r bg-blue">
        <div className="container">
            <div className="row row-tb-20">
            <div className="col-md-6 col-md-offset-3 footer-custom">
              <img className="mb-40" src="assets/images/Trivelo-logo_white.png" width="100" alt=""/>
              <p className="color-light">
                Trivelo indsamler automatisk data fra diverse Triathlon og Cykling grupper på Facebook, hvor mere end 100 tusind personer dagligt sælger eller køber deres brugte ting. Vi kategoriserer og sorterer alt den data og giver dig på få sekunder en oversigt så du nemt og hurtigt kan finde det du leder efter.
              </p>

            </div>
            </div>
        </div>
    </section>

    <footer id="mainFooter" className="main-footer">
        <div className="container">
            <div className="row">
                <p style={{fontWeight: '400'}}>Copyright <Link to={'/login'}>&copy;</Link> 2017 - All rights reserved.</p>
            </div>
        </div>
    </footer>
    </div>
    )
  }
}

export default Footer
