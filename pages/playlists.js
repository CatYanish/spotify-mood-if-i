import Layout from '../components/MyLayout.js'
import React from 'react'
import Link from 'next/link'
import Router, { withRouter } from 'next/router';

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
  
}

  render () {

    return  (
          <Layout>
             <p>Playlists</p>
          </Layout>
      )
  }
}
