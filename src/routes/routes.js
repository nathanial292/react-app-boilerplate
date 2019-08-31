import React, { Component } from 'react'
import Loadable from 'react-loadable'
import DefaultLayout from '../layouts/DefaultLayout'
import SimpleLayout from '../layouts/SimpleLayout'

const Home = Loadable({
  loader: () => import('../views/Home'),
  loading() {
    return <div>Loading...</div>
  },
  delay: 300,
})

export default[
  {
    layout: DefaultLayout,
    component: Home,
    path: '/',
    exact: true,
  },
  {
    layout: SimpleLayout,
    component: Home,
    path: '/simple',
    exact: true
  }
]