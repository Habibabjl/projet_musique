import React, { Component } from "react"
import Axios from "axios"
import * as JsSearch from "js-search"

class Search extends Component {
  state = {
    bookList: [],
    search: [],
    isLoading: true,
    isError: false
  }
  /**
   * React lifecycle method to fetch the data
   */
  async componentDidMount() {
    Axios.get(`https://bvaughn.github.io/js-search/books.json`)
      .then(result => {
        const bookData = result.data
        this.setState({ bookList: bookData.books })
        this.rebuildIndex()
      })
      .catch(err => {
        this.setState({ isError: true })
        console.log(`====================================`)
        console.log(`Something bad happened while fetching the data\n${err}`)
        console.log(`====================================`)
      })
  }

  /**
   * rebuilds the overall index based on the options
   */
  rebuildIndex = () => {
    const { bookList } = this.state

    const dataToSearch = new JsSearch.Search(`isbn`)

    /**
     *  defines a indexing strategy for the data
     * more more about it in here https://github.com/bvaughn/js-search#configuring-the-index-strategy
     */
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()

    /**
     * defines the sanitizer for the search
     * to prevent some of the words from being excluded
     *
     */
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()

    /**
     * defines the search index
     * read more in here https://github.com/bvaughn/js-search#configuring-the-search-index
     */
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex(`isbn`)

    dataToSearch.addIndex(`name`) // sets the index attribute for the data
    dataToSearch.addIndex(`picture`) // sets the index attribute for the data

    dataToSearch.addDocuments(bookList) // adds the data to be searched
    this.setState({ search: dataToSearch, isLoading: false })
  }

  //data recovery - Get artist or song by search
  findData = async e => {
    const query = e.target.value;
    await this.setState({ searchQuery: query });
    const result = await Axios.get(`https://wasabi.i3s.unice.fr/search/fulltext/${query}`);
    result && result.data && Array.isArray(result.data)
     ? this.setState({ queryResults: result.data })
     : this.setState({ queryResults: [] });
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    const {
      isError,
      isLoading,
      queryResults,
    } = this.state


    if (isLoading) {
      return (
        <div style={{ margin: `1.2rem 1rem 1.2rem 1rem` }}>
          <h1 style={{ marginTop: `3em`, textAlign: `center` }}>
            Getting the search all setup
          </h1>
        </div>
      )
    }
    if (isError) {
      return (
        <div style={{ margin: `1.2rem 1rem 1.2rem 1rem` }}>
          <h1 style={{ marginTop: `3em`, textAlign: `center` }}>Ohh no!!!!!</h1>
          <h3
            style={{
              marginTop: `2em`,
              padding: `2em 0em`,
              textAlign: `center`,
            }}
          >
            Something really bad happened
          </h3>
        </div>
      )
    }
    
    return (
      <div>
        <div style={{ margin: `0 auto` }}>
          <form onSubmit={this.handleSubmit}>
            <div style={{ margin: `0 auto` }}>
              <label htmlFor="Search" style={{ paddingRight: `10px` }}>
                Enter your search here
              </label>
              <input
                id="Search"
                onChange={this.findData}
                placeholder="Enter your search here"
                style={{ margin: `0 auto`, width: `400px` }}
              />
            </div>
          </form>
          <div>
            Number of items:
            {queryResults && queryResults.length}
            {queryResults && queryResults.length > 0 && (
              <table
              style={{
                width: `100%`,
                borderCollapse: `collapse`,
                borderRadius: `4px`,
                border: `1px solid #d3d3d3`,
              }}
            >
              <thead style={{ border: `1px solid #808080` }}>
                <tr>
                  <th
                    style={{
                      textAlign: `left`,
                      padding: `5px`,
                      fontSize: `14px`,
                      fontWeight: 600,
                      borderBottom: `2px solid #d3d3d3`,
                      cursor: `pointer`,
                    }}
                  >
                    Name
                  </th>
                  <th
                    style={{
                      textAlign: `left`,
                      padding: `5px`,
                      fontSize: `14px`,
                      fontWeight: 600,
                      borderBottom: `2px solid #d3d3d3`,
                      cursor: `pointer`,
                    }}
                  >
                    Picture
                  </th>
                  <th
                    style={{
                      textAlign: `left`,
                      padding: `5px`,
                      fontSize: `14px`,
                      fontWeight: 600,
                      borderBottom: `2px solid #d3d3d3`,
                      cursor: `pointer`,
                    }}
                  >
                    Title
                  </th>
                  <th
                    style={{
                      textAlign: `left`,
                      padding: `5px`,
                      fontSize: `14px`,
                      fontWeight: 600,
                      borderBottom: `2px solid #d3d3d3`,
                      cursor: `pointer`,
                    }}
                  >
                    Album Title
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* eslint-disable */}
                {queryResults && queryResults.length > 0 &&  queryResults.map((item, key) => {
                  return (
                    
                    <tr key={`row_${item.name}`} key={key}>
                      <td
                        style={{
                          fontSize: `14px`,
                          border: `1px solid #d3d3d3`,
                        }}
                      >
                        {item && item.name}
                      </td>
                      <td
                        style={{
                          fontSize: `14px`,
                          border: `1px solid #d3d3d3`,
                        }}
                      >
                        {item && item.picture && <img src={item.picture} alt={item.name} />}
                      </td>
                      <td
                        style={{
                          fontSize: `14px`,
                          border: `1px solid #d3d3d3`,
                        }}
                      >
                        {item && item.title}
                      </td>
                      <td
                        style={{
                          fontSize: `14px`,
                          border: `1px solid #d3d3d3`,
                        }}
                      >
                        {item && item.albumTitle}
                      </td>
                    </tr>
                  )
                })}
                {/* eslint-enable */}
              </tbody>
            </table>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Search