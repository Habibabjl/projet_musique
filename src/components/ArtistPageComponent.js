import React from 'react';
import '../App.css';

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import * as artistApi from "../services/ArtistApi";

import MusicCard from './MusicCard'

class ArtistPageComponent extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
      // artistsWithMostAlbum: [],
      // search: ""
    }
  }

    
  componentDidMount() {
    // this.getArtistsWithMostAlbum(10);
  }


  // async getArtistsWithMostAlbum(limit){
  //   const data = await artistApi.getArtistsWithMostAlbum(limit);
  //   this.setState({
  //     artistsWithMostAlbum: data || []
  //   });
  // }

  
  render() {
    return (
  <div className="ArtistPageComponent">
   <MusicCard></MusicCard>
  </div>

  );
  }
}

export default ArtistPageComponent;
