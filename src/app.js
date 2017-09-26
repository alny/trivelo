import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill';
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router'
import store from './store'
import { Home, Faq, Contact, Category, Login, About, Howto } from './components/containers'
import Main from './components/layouts/Main'

const initialState = window.__PRELOADED_STATE__

const app = (
  <Provider store = { store.configureStore(initialState) }>

      <Router history={browserHistory}>

        <Route path="/" component={Main}>
          <IndexRoute component={Home}></IndexRoute>
            <Route path="/cykler" component={Category}></Route>
            <Route path="/cykelbekladning" component={Category}></Route>
            <Route path="/cykelhjul" component={Category}></Route>
            <Route path="/cykeltilbehor" component={Category}></Route>
            <Route path="/cykelkomponenter" component={Category}></Route>

            <Route path="/løbeudstyr-mænd" component={Category}></Route>
            <Route path="/løbeudstyr-kvinder" component={Category}></Route>
            <Route path="/løbetilbehør" component={Category}></Route>

            <Route path="/våddragte" component={Category}></Route>
            <Route path="/svømmetøj-kvinder" component={Category}></Route>
            <Route path="/svømmetøj-mænd" component={Category}></Route>
            <Route path="/svømmeudstyr" component={Category}></Route>

            <Route path="/om" component={About}></Route>
            <Route path="/sadan" component={Howto}></Route>
            <Route path="/faq" component={Faq}></Route>
            <Route path="/kontakt" component={Contact}></Route>


            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Login}></Route>
        </Route>
        <Redirect from="*" to="/" />
      </Router>

  </Provider>
)
ReactDOM.render(app, document.getElementById('root'))
