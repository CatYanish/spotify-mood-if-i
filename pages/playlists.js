import Layout from '../components/MyLayout.js'
import React from 'react'
import Link from 'next/link'
import Router, { withRouter } from 'next/router';
import { ACCESS_TOKEN } from '../constants';

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
  console.log(sessionStorage.getItem(ACCESS_TOKEN));
  if (sessionStorage.getItem(ACCESS_TOKEN) !== null) {
    const access_token = sessionStorage.getItem(ACCESS_TOKEN);
    console.log(typeof access_token);
    fetch('https://api.spotify.com/v1/me/playlists', {
        headers: {
          'Authorization': 'Bearer ' + access_token
        }
    }).then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
  } else {
    window.location = "/";
  }
}

  render () {

    return  (
          <Layout>
             <p>Playlists</p>
          </Layout>
      )
  }
}
