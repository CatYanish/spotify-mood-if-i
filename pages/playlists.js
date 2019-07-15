import Layout from '../components/MyLayout.js'
import React from 'react'
import Link from 'next/link'
import Router, { withRouter } from 'next/router';
import { STATE_KEY } from '../constants';

export default class Playlists extends React.Component {
  static async getInitialProps({ query }) {

    return {}
  }

constructor(props) {
  super(props);
  this.state = {

  }
}


componentDidMount (props) {
  console.log(localStorage.getItem(STATE_KEY));
}

  render () {

    return  (
          <Layout>
             <p>Playlists</p>
          </Layout>
      )
  }
}
