import React, { Component } from 'react'
import actions from '../../actions'
import  { Link } from 'react-router'
import { connect } from 'react-redux'
import { TextUtils } from '../../utils'
import { Modal, Button, Carousel } from 'react-bootstrap';

class Category extends Component {
  constructor(){
    super()
    this.state = {
        showModal: false,
        index: 0,
        page: 1,
        showButton: false,
        direction: null,
        brand: '',
        size: '',
        year: '',
        type: null,
        sort: ''
    }
    this.getBikes = this.getBikes.bind(this)
    this.increment = this.increment.bind(this)


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

 selectACategory(event){
   event.preventDefault()
    let test = {}
    test[event.target.id] = event.target.value
    if(this.state.brand == null){
      this.setState({
        brand: test
      })
      test.brand = this.state.brand
    }
    test.page = this.state.page
    if(this.state.type == null){

    } else {
      test.type = this.state.type
    }
    test.category = this.props.navbar.selectedTopCategory

   this.props.getAllBikes(test)
 }

 increment(event){
  event.preventDefault()
  let test = {}
  window.scrollTo(0, 0)

  this.setState({
    page: this.state.page+=1,
    showButton: true
  })
  test.page = this.state.page

  if(this.state.type == null){

  } else {
    test.type = this.state.type
  }
  // (this.state.type == null) ? null : test.type = this.state.type

  test.category = this.props.navbar.selectedTopCategory
  this.props.getAllBikes(test)
  console.log('PAGE: ' + JSON.stringify(this.state.page))
}

decrease(event){
  event.preventDefault()
  let test = {}
  window.scrollTo(0, 0)
  this.setState({
    page: this.state.page-=1
  })
  test.page = this.state.page

  if(this.state.type == null){

  } else {
    test.type = this.state.type
  }
  test.category = this.props.navbar.selectedTopCategory
  this.props.getAllBikes(test)
  console.log('PAGE: ' + JSON.stringify(this.state.page))
}

 selectBCategory(event){
   event.preventDefault()
    let test = {}
    test[event.target.id] = event.target.value
    if(this.state.size == null){
      this.setState({
        size: test
      })
      test.size = this.state.size
    }
    test.page = this.state.page
    if(this.state.type == null){

    } else {
      test.type = this.state.type
    }
    test.category = this.props.navbar.selectedTopCategory

   this.props.getAllBikes(test)
 }

 getBikes(){
   if(this.props.allbicycles[this.props.navbar.selectedTopCategory] != null){
     return
   }
   let test = {}
   test.page = 1
   test.category = this.props.navbar.selectedTopCategory
   this.props.getAllBikes(test)
 }

  componentDidMount(){
    if(this.props.user == null)
    this.props.checkCurrentUser()
    this.getBikes()
  }

  componentDidUpdate(){
    this.getBikes()
  }

  deleteFeed(id, event){
    event.preventDefault()
    this.props.deleteFeed(id)
  }

  selectCategory(type){
    let test = {}
    if(type != null){
      this.setState({
      type: type,
      page: 1
    })
      test.type = type
      test.category = this.props.navbar.selectedTopCategory

    }
    this.props.getAllBikes(test)
  }

  sortByPrice(event){
    event.preventDefault()
     let test = {}
     test[event.target.id] = event.target.value
     if(this.state.sort == null){
       this.setState({
         sort: test
       })
       test.sort = this.state.sort
     }
     test.page = this.state.page
     if(this.state.type == null){

     } else {
       test.type = this.state.type
     }
     test.category = this.props.navbar.selectedTopCategory
     this.props.getAllBikes(test)
  }

  render(){

    const path = this.props.location.pathname.replace('/', '')
    const parts = path.split('/')
    const page = parts[0]


    let content = null


    if (parts.length == 1){

      let typer = TextUtils.subNavbar(page)

      content =
      <div className="col-xs-12 col-md-2 subNav">
          <aside className="aside-nav">
              <ul className="nav-coupon-category panel">
                <li className="all-cat">
                    <a className="font-14" href="#">Kategorier:</a>
                </li>
                {typer.map((type, i) => {
                  return <li onClick={this.selectCategory.bind(this, type)} key={i}><a href="#" value={type}><i className="fa fa-angle-double-right"></i>{type}</a></li>
                })
                }
              </ul>
          </aside>
      </div>


  }
    return(
      <div>
        {content}

<main id="mainContent" className="main-content">
  <div className="page-container ptb-60">
<div className="container">

  <div className="contact-area contact-area-v1 panel">
      <div className="row row-tb-20">
          <div style={{paddingBottom: 0}} className="col-xs-12">
            <div className="filter-search">
              <div className="row">
                <div style={{right: '-30px'}} className="col-6 col-md-3 filter-height">
                  <div className="right-10 pos-tb-center">
                                <select onChange={this.selectACategory.bind(this)} id="brand" className="form-control input-sm brand-drop">
                                    <option >Mærke:</option>
                                    <option value="giant">Giant</option>
                                    <option value="trek">Trek</option>
                                    <option value="specialized">Specialized</option>
                                    <option value="s-works">S-Works</option>
                                    <option value="cannondale">Cannondale</option>
                                    <option value="cervelo">Cervelo</option>
                                    <option value="scott">Scott</option>
                                    <option value="bianchi">Bianchi</option>
                                    <option value="canyon">Canyon</option>
                                    <option value="cube">Cube</option>
                                    <option value="pinarello">Pinarello</option>
                                    <option value="fuji">Fuji</option>
                                    <option value="colnago">Colnago</option>
                                    <option value="felt">Felt</option>
                                    <option value="wilier">Wilier</option>
                                    <option value="bh">BH</option>
                                </select>
                            </div>
                </div>
                <div style={{right: '-13px'}} className="col-6 col-md-3 filter-height">
                  <div className="right-10 pos-tb-center">
                                <select onChange={this.selectBCategory.bind(this)} id="size" className="form-control input-sm size-drop">
                                    <option>Størrelse:</option>
                                    <option value="48">48</option>
                                    <option value="50">50</option>
                                    <option value="52">52</option>
                                    <option value="54">54</option>
                                    <option value="56">56</option>
                                    <option value="58">58</option>
                                    <option value="60">60</option>
                                    <option value="62">62</option>
                                </select>
                            </div>
                </div>
                <div className="col-6 col-md-3 filter-height">

                  <div style={{right: '13px'}} className="col-6 col-md-3 filter-height">
                    <div className="right-10 pos-tb-center">
                                  <select onChange={this.selectACategory.bind(this)} id="year" className="form-control input-sm year-drop">
                                      <option>Årgang:</option>
                                      <option value="2007">2007</option>
                                      <option value="2008">2008</option>
                                      <option value="2009">2009</option>
                                      <option value="2010">2010</option>
                                      <option value="2011">2011</option>
                                      <option value="2012">2012</option>
                                      <option value="2013">2013</option>
                                      <option value="2014">2014</option>
                                      <option value="2015">2015</option>
                                      <option value="2016">2016</option>
                                      <option value="2017">2017</option>
                                  </select>
                              </div>
                  </div>
                </div>
                <div className="col-6 col-md-3 filter-height">

                  <div style={{right: '31px'}} className="col-6 col-md-3 filter-height">
                    <div className="right-10 pos-tb-center">
                                  <select onChange={this.sortByPrice.bind(this)} id="sort" style={{width: '494%'}} className="form-control input-sm filter-drop">
                                      <option>Filter:</option>
                                      <option value="asc">Pris: Lav til Høj</option>
                                      <option value="desc">Pris: Høj til Lav</option>
                                  </select>
                              </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
      </div>

    <div className="ptb-30 prl-30">
        <div className="row row-tb-20">

                  {(this.props.allbicycles[this.props.navbar.selectedTopCategory] == null) ? null :
                  this.props.allbicycles[this.props.navbar.selectedTopCategory].map((bike, i) => {
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
                                  {(this.props.user == null) ?
                                    <li style={{textTransform: 'capitalize'}} className="color-muted"><i className="ico fa fa-map-marker mr-5"></i>{bike.location}</li>
                                    :
                                    <li style={{width: '220px'}} className="color-muted deal-title"><i className="ico fa fa-id-badge mr-5"></i>{bike._id}</li>
                                  }

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
                                  {(this.props.user == null) ?
                                    <a href={bike.link} target="_blank"><button className="btn btn-sm btn block more-info">Kontakt Info</button></a>
                                    :
                                    <button onClick={this.deleteFeed.bind(this, bike._id)} className="btn btn-sm btn block more-info">Slet</button>
                                  }


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

                            <a onClick={this.increment.bind(this)} href="#"><button className="btn btn-sm btn block pagination-next">Næste Side</button></a>

                            {(this.state.showButton == false) ? null :
                              <a onClick={this.decrease.bind(this)} href="#"><button  className="btn btn-sm btn block pagination-previous">Forrige Side</button></a>
                            }

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
    allbicycles: state.category,
    navbar: state.navbar,
    user: state.account.user
  }
}

const dispatchToProps = (dispatch) => {
  return {
    getAllBikes: (bike) => dispatch(actions.getAllBikes(bike)),
    checkCurrentUser: (params) => dispatch(actions.checkCurrentUser(params)),
    deleteFeed: (params, id) => dispatch(actions.deleteFeed(params, id))

  }
}
export default connect(stateToProps, dispatchToProps)(Category)
