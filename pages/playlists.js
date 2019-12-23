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
      playlists: null,
      access_token: null,
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
   this.setState({access_token: access_token});

    if (!access_token) {
      alert('There was an error during the authentication');
    } else {
      // sessionStorage.removeItem(STATE_KEY);
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

    if (access_token !== null) {
      fetch('https://api.spotify.com/v1/me/playlists?limit=50', {
          headers: {
            'Authorization': 'Bearer ' + access_token
          }
      }).then(res => res.json())
        .then(response => this.setState({playlists: response.items}))
        .catch(error => console.error('Error:', error));
    } else {
      alert("you are not logged in");
    }
  }

//   getTrackInfo (queryParam) {
//     console.log("called get track info query param", queryParam);
//     // llo: throw access token and query param in url, redirec to tracks, make API call

//     let path = '/tracks';
//     // url += '?response_type=token';
//     path += '?access_token=' + encodeURIComponent(this.state.access_token);
//     // url += '&scope=' + encodeURIComponent(scope);
//     // url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
//     // url += '&state=' + encodeURIComponent(state);
//     Router.pushRoute(path)
// };

  render () {
    let playlists = this.state.playlists;
    console.log(playlists);
    return  (
          <Layout>
             <p>Playlists</p>
              <div className="playlistContainer">
               { playlists &&
                 playlists.map((playlist, index) => (
                    <Link className="playlist" key={index} href={
                      '/tracks' + 
                      '?access_token=' + 
                      encodeURIComponent(this.state.access_token)
                      + '&playlist_id=' + playlist.id }>
                      <div>
                        <img src={playlist.images[0].url}/>
                        <p>{playlist.name}</p>
                      </div>
                    </Link>

                ))
               }
               </div>
             <style jsx>{`
               p {
                 font-family: 'Arial';
                 font-weight: bold;
               }
               .playlistContainer {
                 display: flex;
                 flex-direction: row;
                 flex-flow: wrap;
               }
               .playlist {
                 flex: 1;
               }
               img {
                  height: 300px;
                  width: 300px;
                  cursor: pointer;
               }

               img:hover {
                 cursor: pointer;
               }
             `}</style>
          </Layout>
      )
  }
}
