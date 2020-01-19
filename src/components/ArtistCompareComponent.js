import React from 'react';

import * as artistApi from "../services/ArtistApi";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';




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
     this.compareArtist("Queen","U2")
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
            <TableCell>Artist 1</TableCell>
            <TableCell>Artist 2</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
              <TableRow>
                <TableCell align='left'>{this.state.artistData1.name}</TableCell>
                <TableCell align='right'>{this.state.artistData2.name}</TableCell>

              </TableRow>
              
        </TableBody>
      </Table>
    </Paper>
   );
  }
}

export default ArtistCompareComponent;
