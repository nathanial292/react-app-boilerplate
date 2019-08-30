import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import App from './routes'

import { allAnime } from "./actions"
window.store = store;
window.allAnime = allAnime;

ReactDOM.render(
  <BrowserRouter>
    <Fragment>
      <Provider store={store}>
        <App />
      </Provider>
    </Fragment>
  </BrowserRouter>,
  document.getElementById('root')
)
