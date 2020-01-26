import React, { Component } from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Chart } from "react-google-charts";
import * as artistApi from "../services/ArtistApi";
import base from './base'

export default class TopArtist extends Component{

  constructor(props) {
    super(props);
    this.state = {
    //  artists: {
        artistsWithMostAlbum: [],
        membersWithMostBands: [],
        search: ""
     // }
    }
  }
    
  componentDidMount() {
    this.getArtistsWithMostAlbum(10);
    this.getMembersWithMostBands(10);
  }

   // Appele avant render
 /* componentWillMount() {
    console.log("Component will mount");
    this.ref = base.syncState("artists", {
      context: this,
      state: 'artists'
    });
  }*/

  // appele quand le composant disparait, par ex
  // quand on quitte l'application
  /*componentWillUnmount() {
    console.log("Component will unmount");
    base.removeBinding(this.ref);
  }*/

  //Get artist with the most album
  async getArtistsWithMostAlbum(limit){
    const data = await artistApi.getArtistsWithMostAlbum(limit);
    this.setState({
      artistsWithMostAlbum: data || []
    });
  }

  //Get members with the most bands
  async getMembersWithMostBands(limit){
    const dataMembers = await artistApi.getMembersWithMostBands(limit);
    this.setState({
      membersWithMostBands: dataMembers || []
    });
  }

  render() {
    const artistsWithMostAlbum = this.state.artistsWithMostAlbum.length > 0 && this.state.artistsWithMostAlbum[0].name;
    const datas = this.state.artistsWithMostAlbum.map((el, index) => {
       return [el.name, el.sum];
      });
    datas.unshift(["a", "Sum"]);
 
    const membersWithMostBands = this.state.artistsWithMostAlbum.length > 0 && this.state.artistsWithMostAlbum[0].name;
    const datasM = this.state.artistsWithMostAlbum.map((el, index) => {
      return [el.name, el.sum];
    });
    datasM.unshift(["a", "b"]);
    return (
      <div className="TopArtist">
        <Layout>
          <SEO title="Page two" />
            <h1>Top Artists</h1>
            <Chart
              width={'500px'}
              height={'300px'}
              chartType="BarChart"
              loader={<div>Loading Chart</div>}
              data={datas}
              options={{
                title: 'Artists with the most albums',
                colors: ["#b87333"],
                histogram: { lastBucketPercentile: 5 },
                vAxis: { scaleType: "mirrorLog" }
              
              }}
              rootProps={{ 'data-testid': '3' }}
            />
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={datasM}
                options={{
                  title: 'Members with the most bands',
                  is3D: true,
                }}
                rootProps={{ 'data-testid': '3' }}
            />
            <Link to="/">Go back to the homepage</Link>
        </Layout>
     </div>
  );
  }
}
