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

  async getArtistAlbums(){
    //const data = await artistApi.get
    }

 constructor(props) {
    super(props);
    this.state = {
       artistAlbums: [],
       //search: ""
    }
  }

    
  componentDidMount() {
     this.getArtistAlbums(10);
  }


    async getArtistAlbums(limit){
     const data = await artistApi.getArtistAlbums(limit);
     this.setState({
        artistAlbums: data || []
      });
    }

  
  render() {
    return (
  <div className="ArtistPageComponent">

<Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Number of albums sold</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.artistAlbums.length > 0 &&
                this.state.artistAlbums.map(row => (
                  <TableRow key={row.name}>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="right">{row.sum}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>

   <MusicCard></MusicCard>
  </div>

  );
  }
}

export default ArtistPageComponent;
