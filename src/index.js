import _ from 'lodash'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'

// Get an API KEY at: https://console.developers.google.com
const API_KEY = 'replace-me'

class App extends Component {

  constructor (props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null,
      term: ''
    }

    this.search('bernie sanders')
  }

  search (term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render () {
    const search = _.debounce((term) => {
      this.search(term)
    }, 500)

    return (
      <div>
        <div className='row'>
          <SearchBar search={ search.bind(this) }/>
        </div>
        <div className='row'>
          <VideoDetail video={ this.state.selectedVideo } />
          <VideoList
            videos={ this.state.videos }
            onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
          />
        </div>
      </div>
    )
  }

}

ReactDOM.render(
  React.createElement(App),
  document.querySelector('#app')
)
