import React, { Component } from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import * as statsApi from "../services/StatsApi";
import { Chart } from "react-google-charts";

export default class Statistics extends Component{

  constructor(props) {
    super(props);
    this.state = {
      genresByPopularity: [],
      search: ""
    }
  }
    
  componentDidMount() {
    this.getGenresByPopularity(20);
  }

  //Artist - Get fields by popularity
  async getGenresByPopularity(limit){
    const data = await statsApi.getGenresByPopularity(limit);
    this.setState({
      genresByPopularity: data || []
    });
  }


  render() {
    const genresByPopularity= this.state.genresByPopularity.length > 0 && this.state.genresByPopularity[0].name;
    const datas = this.state.genresByPopularity.map((el, index) => {
       return [el.name, el.sum];
      });
    datas.unshift(["a", "Sum"]);
 
    return (
      <div className="Statistics">
       <Layout>
        <SEO title="Page three" />
        <h1>Statistics API</h1>
        <Chart
          width={'500px'}
          height={'300px'}
          chartType="BubbleChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
            ['CAN', 80.66, 1.67, 'North America', 33739900],
            ['DEU', 79.84, 1.36, 'Europe', 81902307],
            ['DNK', 78.6, 1.84, 'Europe', 5523095],
            ['EGY', 72.73, 2.78, 'Middle East', 79716203],
            ['GBR', 80.05, 2, 'Europe', 61801570],
            ['IRN', 72.49, 1.7, 'Middle East', 73137148],
            ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
            ['ISR', 81.55, 2.96, 'Middle East', 7485600],
            ['RUS', 68.6, 1.54, 'Europe', 141850000],
            ['USA', 78.09, 2.05, 'North America', 307007000],
          ]}
          options={{
            title:
              'Fields by popularity',
            hAxis: { title: 'Name' },
            vAxis: { title: 'Country' },
            bubble: {
              textStyle: {
                fontSize: 12,
                fontName: 'Times-Roman',
                color: 'green',
                bold: true,
                italic: true,
                auraColor: 'none',
              },
            },
          }}
          rootProps={{ 'data-testid': '3' }}
        />

        <Link to="/">Go back to the homepage</Link>
      </Layout>
     </div>
  );
  }
}
