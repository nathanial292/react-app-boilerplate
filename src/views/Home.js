import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import '../styles/style.scss'

const Home = ({ anime }) => (
  <div>
    <h1>Hello World</h1>
    <ul>
      {anime.map(item => (
        <li key={item.id}>
          {item.title}
        </li>
      ))}
    </ul>
  </div>
)

const mapStateToProps = state => {
  return { anime: state.anime }
}

export default connect(mapStateToProps)(Home)
