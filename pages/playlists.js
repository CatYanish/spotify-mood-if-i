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
  function getHashParams() {
    var hashParams = {};

      var e, r = /([^&;=]+)=?([^&;]*)/g,
          q = window.location.hash.substring(1);
      while ( e = r.exec(q)) {
         hashParams[e[1]] = decodeURIComponent(e[2]);
      }

    return hashParams;
  }


  let params = getHashParams();
  console.log({params});
  let access_token = params.access_token
      // state = params.state,
      // storedState = sessionStorage.getItem(STATE_KEY);
 console.log(access_token);

  if (!access_token) {
    alert('There was an error during the authentication');
  } else {
    // sessionStorage.removeItem(STATE_KEY);
    if (access_token) {
      console.log('hiiii');
      fetch('https://api.spotify.com/v1/me', {
          headers: {
            'Authorization': 'Bearer ' + access_token
          }
      }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));;
    }
  }

  // console.log(sessionStorage.getItem(ACCESS_TOKEN));
  // if (sessionStorage.getItem(ACCESS_TOKEN) !== null) {
  //   const access_token = sessionStorage.getItem(ACCESS_TOKEN);
  //   console.log(typeof access_token);
  //   fetch('https://api.spotify.com/v1/me/playlists', {
  //       headers: {
  //         'Authorization': 'Bearer ' + access_token
  //       }
  //   }).then(res => res.json())
  //     .then(response => console.log('Success:', JSON.stringify(response)))
  //     .catch(error => console.error('Error:', error));
  // } else {
  //   window.location = "/";
  // }
}

  render () {

    return  (
          <Layout>
             <p>Playlists</p>
          </Layout>
      )
  }
}
