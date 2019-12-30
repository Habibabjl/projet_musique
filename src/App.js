import React from 'react';
import './App.css';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Chart } from "react-google-charts";
import * as artistApi from "./services/ArtistApi";

//import { SearchBar } from 'react-native-elements';
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

 /* updateSearch = search => {
    this.setState({ search });
    
  };
   <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
        />*/


  render() {
    const { search } = this.state;
    const artistsWithMostAlbum = this.state.artistsWithMostAlbum.length > 0 && this.state.artistsWithMostAlbum[0].name;
    const datas = this.state.artistsWithMostAlbum.map((el, index) => {
       return [el.name, el.sum];
       });
   datas.unshift(["a", "Sum"]);
    return (
      <div className="App">
        <h1>Home</h1>

       
        <Paper>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Number of albums</TableCell>
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

        <Chart
          width={'500px'}
          height={'300px'}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={datas}
          options={{
            title: 'Artists with the most albums ',
         //   legend: {position:"none"},
            colors: ["#b87333"],
            histogram: { lastBucketPercentile: 5 },
            vAxis: { scaleType: "mirrorLog" }
          
          }}
          rootProps={{ 'data-testid': '3' }}
        />

    </div>
  );
  }
}

export default App;
