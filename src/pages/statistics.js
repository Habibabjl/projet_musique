import React, { useState } from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import * as statsApi from "../services/StatsApi";
import { Chart } from "react-google-charts";
import {
  Grid,
  Container,
  Typography,
  makeStyles,
  Slider
} from "@material-ui/core";
import useLoader from "../hooks/useLoader";

const useStyles = makeStyles(theme => ({
  root: {
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    }
  }
}));

const Statistics = props => {
  const classes = useStyles();
  const limits = [
    {
      value: 1
    },
    {
      value: 5
    },
    {
      value: 10
    },
    {
      value: 15
    }
  ];
  const [loader, showLoader, hideLoader] = useLoader();
  const [languagesStats, setLanguagesStats] = useState([]);
  const [genresByPopularity, setGenreByPopularity] = useState([]);

  const initDatas = () => {
    showLoader();
    statsApi
      .getStatsAboutLyricsLanguages()
      .then(lyricsStats => {
        statsApi
          .getGenresByPopularity(5)
          .then(result => {
            setLanguagesStats(lyricsStats);
            setGenreByPopularity(result);
            hideLoader();
          })
          .catch(error => {
            hideLoader();
            console.log(error);
          });
      })
      .catch(error => {
        hideLoader();
        console.log(error);
      });
  };

  const updateGenresByPopularity = limit => {
    showLoader();
    statsApi
      .getGenresByPopularity(limit)
      .then(result => {
        setGenreByPopularity(result);
        hideLoader();
      })
      .catch(error => {
        hideLoader();
        console.log(error);
      });
  };

  const updateStatsAboutLanguages = limit => {
    showLoader();
    statsApi
      .getStatsAboutLyricsLanguages(limit)
      .then(result => {
        setLanguagesStats(result);
        hideLoader();
      })
      .catch(error => {
        hideLoader();
        console.log(error);
      });
  };

  const majorsLanguagesStatsDatas = () => {
    let chartDatas = [["Languages", "Popularity"]];
    let temp = [...languagesStats];
    temp.splice(5);
    temp.forEach(item => {
      chartDatas.push([item._id, item.sum]);
    });
    return chartDatas;
  };

  const minorsLanguagesStatsDatas = () => {
    let chartDatas = [["Languages", "Popularity"]];
    let temp = [...languagesStats];
    let splitted = temp.splice(5);
    splitted.forEach(item => {
      chartDatas.push([item._id, item.sum]);
    });
    return chartDatas;
  };

  const genresByPopularityDatas = () => {
    let chartDatas = [["Genres", "Popularity"]];
    genresByPopularity.forEach(item => {
      chartDatas.push([item._id, item.sum]);
    });
    return chartDatas;
  };

  useState(() => {
    initDatas();
  });

  return (
    <div>
      <Layout>
        <SEO title="Page three" />
        <h1>Statistics API</h1>
        {loader}
        <Container>
          {languagesStats.length > 0 && (
                <Grid container>
                  <h2>Most used languages in lyrics</h2> 
                  <Grid item xs={12}>
                    <Chart
                      chartType="Bar"
                      loader={<div>Loading Chart</div>}
                      data={majorsLanguagesStatsDatas()}
                      options={{
                        chart: {
                          title: "Popularity of major languages"
                        }
                      }}
                      rootProps={{ "data-testid": "2" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Chart
                      chartType="Bar"
                      loader={<div>Loading Chart</div>}
                      data={minorsLanguagesStatsDatas()}
                      options={{
                        chart: {
                          title: "Popularity of minor languages"
                        }
                      }}
                      rootProps={{ "data-testid": "2" }}
                    />
                  </Grid>
                </Grid>
           
          )}
          {genresByPopularity.length > 0 && (
                <Grid container>
                <h2>Most popular genres</h2> 
                  <Grid item xs={12}>
                    <Typography id="discrete-slider" gutterBottom>
                      Number of genres
                    </Typography>
                    <Slider
                      defaultValue={5}
                      getAriaValueText={value => value}
                      onChangeCommitted={(event, value) => {
                        console.log(value);
                        updateGenresByPopularity(value);
                      }}
                      aria-labelledby="discrete-slider"
                      valueLabelDisplay="auto"
                      step={5}
                      marks={limits}
                      min={1}
                      max={20}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Chart
                      chartType="Bar"
                      loader={<div>Loading Chart</div>}
                      data={genresByPopularityDatas()}
                      options={{
                        chart: {
                          title: "Popularity of major genres"
                        }
                      }}
                      rootProps={{ "data-testid": "2" }}
                    />
                  </Grid>
                </Grid>
          )}
        </Container>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    </div>
  );
};

export default Statistics;
