import React, { Component } from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Chart } from "react-google-charts";
import * as artistApi from "../services/Artist";

export default class TopArtist extends Component{

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
    const artistsWithMostAlbum = this.state.artistsWithMostAlbum.length > 0 && this.state.artistsWithMostAlbum[0].name;
    const datas = this.state.artistsWithMostAlbum.map((el, index) => {
       return [el.name, el.sum];
      });
    datas.unshift(["a", "Sum"]);
    return (
      <div className="TopArtist">
        <Layout>
          <SEO title="Page two" />
            <h1>Artists with the most album</h1>
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
            <Link to="/">Go back to the homepage</Link>
        </Layout>
     </div>
  );
  }
}
