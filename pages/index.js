import React from 'react'
import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import Router, { withRouter } from 'next/router';
import { CLIENT_ID, REDIRECT_URI } from '../keys';
import { STATE_KEY, ACCESS_TOKEN } from '../constants';


class Blog extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        triedToLogIn: false,
        accessToken: null,
        error: null,
      }
    }

    componentDidMount () {
      console.log(sessionStorage.getItem(ACCESS_TOKEN));
      // if (sessionStorage.getItem(ACCESS_TOKEN) !== null && sessionStorage.getItem(ACCESS_TOKEN) !== undefined ) {
      //      window.location = '/playlists';
      // };
    }

  login () {
    const client_id = CLIENT_ID; // Your client id
    const redirect_uri = REDIRECT_URI; // Your redirect uri

    function generateRandomString(length) {
      var text = '';
      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    };

    const state = generateRandomString(16);
    const scope = 'user-read-private playlist-read-private user-read-email';

    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    url += '&state=' + encodeURIComponent(state);

    window.location = url;
    handleLoginParams();
  }


  render() {
    return (
      <Layout>
        <div id="login">
          <button onClick={this.login} className="btn btn-primary">Log in with Spotify</button>
        </div>
        { this.state.error !== null && this.state.triedToLogIn === true &&
          <div>
            Login was not successful, please try again or come back later
          </div>
        }
        <style jsx>{`
          h1,
          a {
            font-family: 'Arial';
          }

          a {
            text-decoration: none;
            color: blue;
          }

          a:hover {
            opacity: 0.6;
          }
        `}</style>
      </Layout>
    )
  }
}


export default withRouter(Blog);
