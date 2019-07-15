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

   handleLogin () {
         function getHashParams() {
           var hashParams = {};

             var e, r = /([^&;=]+)=?([^&;]*)/g,
                 q = window.location.hash.substring(1);
             while ( e = r.exec(q)) {
                hashParams[e[1]] = decodeURIComponent(e[2]);
             }

           return hashParams;
         }

         function generateRandomString(length) {
           var text = '';
           var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

           for (var i = 0; i < length; i++) {
             text += possible.charAt(Math.floor(Math.random() * possible.length));
           }
           return text;
         };


         let params = getHashParams();
         console.log({params});
         let access_token = params.access_token,
             state = params.state,
             storedState = sessionStorage.getItem(STATE_KEY);
        console.log(access_token);

         if (access_token && (state == null || state !== storedState)) {
           alert('There was an error during the authentication');
         } else {
           sessionStorage.removeItem(STATE_KEY);
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

     const client_id = CLIENT_ID; // Your client id
     const redirect_uri = REDIRECT_URI; // Your redirect uri

     state = generateRandomString(16);

     sessionStorage.setItem(STATE_KEY, state);
     console.log(access_token);
     sessionStorage.setItem(ACCESS_TOKEN, access_token);
     const scope = 'user-read-private playlist-read-private user-read-email';

     let url = 'https://accounts.spotify.com/authorize';
     url += '?response_type=token';
     url += '&client_id=' + encodeURIComponent(client_id);
     url += '&scope=' + encodeURIComponent(scope);
     url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
     url += '&state=' + encodeURIComponent(state);
     // LLO : all of the setting the url needs to happen BEFORE getting URL hash hashParams
     /// TODO: move all hash param and sessionStorage stuff into helper, which is called after setting url
     // window.location = '/playlists';
   }

  render() {
    return (
      <Layout>
        <div id="login">
          <button onClick={this.handleLogin} className="btn btn-primary">Log in with Spotify</button>
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
