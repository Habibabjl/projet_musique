import React from 'react';

import * as artistApi from "../services/ArtistApi";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';




class ArtistCompareComponent extends React.Component {


 constructor(props) {
    super(props);
    this.state = {
      artistData1: [],
      artistData2: []
       //search: ""     
    }
  }

      
  componentDidMount() {;  
     this.compareArtist("Queen","Iggy Pop")
  }


   async getArtistDataByName(artistName){
    const data = await artistApi.getArtistDataByName(artistName);
    return data;
   }

   async compareArtist(artistName1,artistName2){
    var artistData1Json=await this.getArtistDataByName(artistName1); 
    var artistData2Json=await this.getArtistDataByName(artistName2); 
    this.setState({
      artistData1: artistData1Json || [],
      artistData2: artistData2Json || []
     });
   }

  
  render() {
    return (
      <Paper>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell><Avatar variant="square" alt="artist 1 img" src={this.state.artistData1.picture} /></TableCell>
            <TableCell><Avatar variant="square" alt="artist 2 img" src={this.state.artistData2.picture}/></TableCell>
            {/* <TableCell><Avatar variant="square" alt="artist 1 img" src={this.state.artistData1.picture.small} /></TableCell>
            <TableCell><Avatar variant="square" alt="artist 2 img" src={this.state.artistData2.picture.small}/></TableCell>  */}
           </TableRow>
        </TableHead>
        <TableBody>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>{this.state.artistData1.name}</TableCell>
                <TableCell>{this.state.artistData2.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Artist type</TableCell>
                <TableCell>{this.state.artistData1.type}</TableCell>
                <TableCell>{this.state.artistData2.type}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Artist genres</TableCell>
                <TableCell>{this.state.artistData1.genres}</TableCell>
                <TableCell>{this.state.artistData2.genres}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>{this.state.artistData1.disambiguation}</TableCell>
                <TableCell>{this.state.artistData2.disambiguation}</TableCell>
              </TableRow>
              {/* <TableRow>
                <TableCell>Location country</TableCell>
                <TableCell>{this.state.artistData1.location.country}</TableCell>
                <TableCell>{this.state.artistData2.location.country}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Location city</TableCell>
                <TableCell>{this.state.artistData1.location.city}</TableCell>
                <TableCell>{this.state.artistData2.location.city}</TableCell>
              </TableRow> */}
        </TableBody>
      </Table>
    </Paper>
   );
  }
}

export default ArtistCompareComponent;
