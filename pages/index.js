import React from 'react'
import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import { withRouter } from 'next/router';


class Blog extends React.Component {

  render() {
    const { router } = this.props
    console.log(router);

    return (
      <Layout>
        <h1>My Blog</h1>
        <div id="login">
          <a href="/login" class="btn btn-primary">Log in with Spotify</a>
        </div>
        <style jsx>{`
          h1,
          a {
            font-family: 'Arial';
          }

          ul {
            padding: 0;
          }

          li {
            list-style: none;
            margin: 5px 0;
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
