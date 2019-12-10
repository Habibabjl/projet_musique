import React from 'react';
import './App.css';
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import * as artistApi from "./services/ArtistApi";

class App extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
      artistsWithMostAlbum: [],
      search: ""
    }
  }
    
  componentDidMount() {
    this.getArtistsWithMostAlbum(10);
  }


  async getArtistsWithMostAlbum(limit){
    const data = await artistApi.getArtistsWithMostAlbum(limit);
    this.setState({
      artistsWithMostAlbum: data || []
    });
  }

  render() {
    return (
      <div className="App">
        <Paper>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Number of albums sold</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.artistsWithMostAlbum.length > 0 &&
                this.state.artistsWithMostAlbum.map(row => (
                  <TableRow key={row.name}>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="right">{row.sum}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Paper>

    </div>
  );
  }
}

export default App;
