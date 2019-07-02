import React from 'react'
import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import Router, { withRouter } from 'next/router';


class Blog extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      triedToLogIn: false,
      accessToken: null,
      error: null,
    }
  }

  componentDidMount (props) {
    function getHashParams() {

      // TODO: move API reqs to server side 
      const hashParams = {};
      let e, r = /([^&;=]+)=?([^&;]*)/g,
          q = window.location.hash.substring(1);
      while ( e = r.exec(q)) {
         hashParams[e[1]] = decodeURIComponent(e[2]);
      }
      return hashParams;
    }


    const params = getHashParams();

    this.setState({ triedToLogIn: params.error, accessToken: params.access_token, error: params.error })
    if (params.access_token) {
      Router.push(`/playlists/${params.access_token}`);
    }

  }


  render() {
    return (
      <Layout>
        <div id="login">
          <a href="/login" onClick={this.handleLogin} className="btn btn-primary">Log in with Spotify</a>
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
