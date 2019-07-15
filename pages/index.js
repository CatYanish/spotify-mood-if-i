import React from 'react'
import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import Router, { withRouter } from 'next/router';
import { CLIENT_ID, REDIRECT_URI } from '../keys';
import { STATE_KEY } from '../constants';


class Blog extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      triedToLogIn: false,
      accessToken: null,
      error: null,
    }
  }



 handleLogin () {
       function getHashParams() {
         var hashParams = {};
         if (typeof window !== "undefined") {
           var e, r = /([^&;=]+)=?([^&;]*)/g,
               q = window.location.hash.substring(1);
           while ( e = r.exec(q)) {
              hashParams[e[1]] = decodeURIComponent(e[2]);
           }
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

       let access_token = params.access_token,
           state = params.state,
           storedState = localStorage.getItem(STATE_KEY);

       if (access_token && (state == null || state !== storedState)) {
         alert('There was an error during the authentication');
       } else {
         localStorage.removeItem(STATE_KEY);
         if (access_token) {
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

   localStorage.setItem(STATE_KEY, state);
   const scope = 'user-read-private user-read-email';

   let url = 'https://accounts.spotify.com/authorize';
   url += '?response_type=token';
   url += '&client_id=' + encodeURIComponent(client_id);
   url += '&scope=' + encodeURIComponent(scope);
   url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
   url += '&state=' + encodeURIComponent(state);

   window.location = '/playlists';

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
