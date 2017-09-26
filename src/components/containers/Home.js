import React, { Component } from 'react'
import actions from '../../actions'
import  { Link } from 'react-router'
import { connect } from 'react-redux'
import { TextUtils } from '../../utils'
import { Modal, Button, Carousel } from 'react-bootstrap';


class Home extends Component {
  constructor(){
    super()
    this.state = {
      showModal: false,
      index: 0,
      direction: null
    }
  }

  close() {
  this.setState({
    showModal: false,
    index: 0,
    direction: null
   });

  }

  open(id, event) {
    event.preventDefault()
    this.setState({
      showModal: {
          [id]: true
       }
    });
  }


  handleSelect(selectedIndex, e) {
   this.setState({
     index: selectedIndex,
     direction: e.direction
   });

 }

  componentDidMount(){
    if(this.props.frontpage != null)
    return
    this.props.getFrontpage()
  }
  render(){
    return(
      <div>

  <main id="mainContent" className="main-content">
    <div className="page-container ptb-60">
      <div className="container responsive-left">


  <div className="contact-area contact-area-v1 panel">
      <div className="row row-tb-20">
          <div style={{paddingBottom: 0}} className="col-xs-12">
            <div className="front-top-bg">
              <span className="front-top-text">Find dit Træningsudstyr</span><br/>
              <span className="front-top-undertext">Nyt, brugt, køb og salg</span>
            </div>
          </div>
      </div>

    <div className="ptb-30 prl-30">
        <div className="row row-tb-20">

      <div className="front-cycling"></div>
      <div className="front-run"></div>
      <div className="front-swimming"></div>

        {(this.props.frontFeed == null) ? null :
        this.props.frontFeed.map((bike, i) => {
          return (
            <div key={i} className="col-sm-6 col-md-4 col-lg-3">

              <div className="coupon-single panel t-center salg-shadow">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="text-center p-20">
                      <a onClick={this.open.bind(this, bike._id)} href="#">
                      <img className="image-style" src={bike.attachments[0]}/>
                      </a>
                    </div>

                  </div>

                  <div className="col-xs-12 panel-height">
                    <div className="panel-body">
                      <ul className="deal-meta list-inline mb-10">
                        <li style={{textTransform: 'capitalize'}} className="color-muted"><i className="ico fa fa-tag mr-5"></i>{bike.brand}</li>
                        <li style={{textTransform: 'capitalize'}} className="color-muted"><i className="ico fa fa-cube mr-5"></i>{bike.size}</li>
                        <li className="color-muted"><i className="ico fa fa-thumb-tack mr-5"></i>{bike.year}</li>

                      </ul>

                      <h4 className="color-green mb-10 t-uppercase">DKK {bike.price}.00</h4>
                      <ul className="deal-meta list-inline mb-10">
                        <li style={{textTransform: 'capitalize'}} className="color-muted"><i className="ico fa fa-map-marker mr-5"></i>{bike.location}</li>
                        <br/>
                        <li style={{width: '220px'}} className="color-muted deal-title"><i className="ico fa fa-user-circle mr-5"></i>{bike.name}</li>
                      </ul>

                      <Modal show={this.state.showModal[bike._id]} onHide={this.close.bind(this)}>
                      <Modal.Header style={{borderBottom: '3px solid #f8ab3c'}} closeButton>
                        <Modal.Title style={{textTransform: 'capitalize'}}>
                          Mærke: {bike.brand} - Størrelse: {bike.size} - Årgang: {bike.year}

                          </Modal.Title>
                      </Modal.Header>
                      <Modal.Body style={{padding: '0px'}}>
                        <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect.bind(this)}>
                          {(bike.attachments == null) ? null :
                          bike.attachments.map((img, i) => {
                            return (
                              <Carousel.Item key={i}>
                                <img width={900} height={500} alt="900x500" src={img}/>
                              </Carousel.Item>
                            )

                          })
                          }
                      </Carousel>
                      </Modal.Body>
                      <Modal.Body style={{borderTop: '3px solid #f8ab3c'}}>
                        <p style={{fontWeight: '400', textTransform: 'capitalize'}}>{bike.title}</p>

                      </Modal.Body>

                      <Modal.Footer>
                        <a href={bike.link} target="_blank"><Button style={{float: 'left'}}>Kontakt Sælger</Button></a>

                        <Button onClick={this.close.bind(this)}>Luk</Button>
                      </Modal.Footer>
                    </Modal>


                      <div className="showcode">
                        <button onClick={this.open.bind(this, bike._id)} className="btn btn-sm btn block more-info">Vis Mere</button>
                        <a href={bike.link} target="_blank"><button className="btn btn-sm btn block more-info">Kontakt Info</button></a>


                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          )
        })

        }



                              </div>
                          </div>

                          <div className="ptb-30 prl-30 top-line">
                              <div className="row row-tb-20">

                                <div className="col-md-6">
                                <div className="item panel prl-15 ptb-20">
                                    <div className="row row-rl-5 row-xs-cell">
                                        <div className="col-xs-4 valign-middle">
                                            <img className="pr-10" src="assets/images/icons/tablet.png" width="80" alt=""/>
                                        </div>
                                        <div className="col-xs-8">
                                            <h5 className="mb-10 pt-5">Vi sorterer og kategoriserer!</h5>
                                            <p className="color-mid">Vores system indsamler automatisk data fra Facebook grupper, og inddeler hvert opslag i forskellige kategorier, så du på få sekunder kan finde præcis det udstyr som du leder efter.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                              <div className="col-md-6">
                                <div className="item panel prl-15 ptb-20">
                                    <div className="row row-rl-5 row-xs-cell">
                                        <div className="col-xs-4 valign-middle">
                                            <img className="pr-10" src="assets/images/icons/money.png" width="80" alt=""/>
                                        </div>
                                        <div className="col-xs-8">
                                            <h5 className="mb-10 pt-5">Nemt, overskueligt og gratis!</h5>
                                            <p className="color-mid">Vi tilbyder en platform, hvor du hverken skal betale eller være medlem for at finde dit nye udstyr. Vi sælger ikke udstyr, men viser blot hvor det bedste udstyr findes og linker videre til sælgeren/udbyderen.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                              </div>
                          </div>
                          <section className="section subscribe-area ptb-40 t-center">
                            <div className="newsletter-form">
                                <h4 className="mb-20"><i style={{color: '#f8ab3c'}} className="fa fa-envelope-o mr-10"></i>Tilmeld dig nyhedsbrevet og modtag gode Tips og Nyheder om køb/salg af Triathlon og Cykle udstyr.</h4>
                                <form method="post" action="#">
                                    <div className="input-group mb-10">
                                        <input type="email" className="form-control bg-white" placeholder="Email Adresse" required="required"/>
                                        <span className="input-group-btn">
                                            <button className="btn" type="submit">Tilmeld</button>
                                        </span>
                                    </div>
                                </form>
                                <p className="color-muted"><small>Vi vil aldrig dele din Email med en tredjepart.</small> </p>
                            </div>
                        </section>
                      </div>


                  </div>
              </div>



</main>



      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
  frontFeed: state.category.allFrontpage
  }
}

const dispatchToProps = (dispatch) => {
  return {
    getFrontpage: (all) => dispatch(actions.getFrontpage(all))

  }
}

export default connect(stateToProps, dispatchToProps)(Home)
