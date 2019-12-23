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
      access_token: null,
    }
  }

  componentDidMount (props) {
    const access_token = Router.router.query.access_token;
    this.setState({access_token: access_token})
    const playlist_id = Router.router.query.playlist_id;
    let tracks = null;
    if (access_token !== null) {
      fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, {
          headers: {
            'Authorization': 'Bearer ' + access_token
          }
      }).then(res => res.json())
        .then(response => this.handleTrackListResponse(response.items)) 
        .catch(error => console.error('Error:', error));        
    } else {
      alert("you are not logged in");
    }
  }

  handleTrackListResponse = (tracklist) => {
    this.setState({tracks: tracklist})
    let idList = '';

    for (let index = 0; index < tracklist.length; index++) {
      idList += tracklist[index].track.id + ',';
      
    }
    this.getTrackAudioFeatures(idList); 
}


  getTrackAudioFeatures = (idBlob) => {
      fetch(`https://api.spotify.com/v1/audio-features/?ids=${idBlob}`, {
        headers: {
          'Authorization': 'Bearer ' + this.state.access_token
        }
    }).then(res => res.json())
      .then(response => this.createTrackInfoObject(response.audio_features)) 
      .catch(error => console.error('Error:', error));  
  }

  trackObjects = []

  createTrackInfoObject = (audioFeatures) => {
    const tracklist = this.state.tracks
    console.log(tracklist);
    
    for (let i = 0; i < audioFeatures.length; i++) {
      for (let j = 0; j < this.state.tracks.length; j++) {        
        if(tracklist[j].track.id === audioFeatures[i].id) {
            let obj = {}
            obj = audioFeatures[i];
            obj["name"] = tracklist[i].track.name
            obj["artist"] = tracklist[i].track.artists[0].name
            this.trackObjects.push(obj)
            obj = {}
        }
      }      
    }
    console.log(this.trackObjects);
    
  }


  render () {

    // var scatterChart = new Chart(ctx, {
    //     type: 'scatter',
    //     data: {
    //         datasets: [{
    //             label: 'Scatter Dataset',
    //             data: [{
    //                 x: -10,
    //                 y: 0
    //             }, {
    //                 x: 0,
    //                 y: 10
    //             }, {
    //                 x: 10,
    //                 y: 5
    //             }]
    //         }]
    //     },
    //     options: {
    //         scales: {
    //             xAxes: [{
    //                 type: 'linear',
    //                 position: 'bottom'
    //             }]
    //         }
    //     }
    // });

    return  (
          <Layout>
             <p>Tracks</p>
          </Layout>
      )
  }
}
