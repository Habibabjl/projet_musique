import React from 'react';

import * as artistApi from "../services/ArtistApi";


class ArtistCompareComponent extends React.Component {


 constructor(props) {
    super(props);
    this.state = {
      artistData: []
      // artistData: [],
       //search: ""
    }
  }

    
  componentDidMount() {
     //this.getArtistAlbums(10);
     //this.getArtistDataById("56d93d84ce06f50c0fed8747");
     this.getArtistDataByName("Queen");

  }

  async getArtistDataById(artistId){
    const data = await artistApi.getArtistDataByid(artistId);
    this.setState({
       artistData: data
     });
   }

   async getArtistDataByName(artistName){
    const data = await artistApi.getArtistDataByName(artistName);
    this.setState({
       artistData: data
     });
   }

    async getArtistAlbums(limit){
     const data = await artistApi.getArtistAlbums(limit);
     this.setState({
        artistAlbums: data || []
      });
    }

  
  render() {
    return (
   <p>in progress</p>
   );
  }
}

export default ArtistCompareComponent;
