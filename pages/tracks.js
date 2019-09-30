import Layout from '../components/MyLayout.js'
import React from 'react'
import Link from 'next/link'
import Router, { withRouter } from 'next/router';
import { ACCESS_TOKEN } from '../constants';

export default class Tracks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: null,
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
    let access_token = params.access_token

    if (access_token !== null) {
      fetch('https://api.spotify.com/v1/me/playlists', {
          headers: {
            'Authorization': 'Bearer ' + access_token
          }
      }).then(res => res.json())
        .then(response => console.log(response));
        .catch(error => console.error('Error:', error));
    } else {
      alert("you are not logged in");
    }
  }


  render () {
    let playlists = this.state.playlists;
    console.log(playlists);
    return  (
          <Layout>
             <p>Tracks</p>
          </Layout>
      )
  }
}
