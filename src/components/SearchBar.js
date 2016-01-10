import React, { Component } from 'react'

class SearchBar extends Component {

  constructor (props) {
    super(props)

    this.state = { term: '' }
  }

  onChange (event) {
    const term = event.target.value
    this.setState({ term: term })
    this.props.search(term)
  }

  render () {
    return (
      <div className='col-xs-12 search-bar'>
        <input
          className='form-control'
          placeholder='Search...'
          value={ this.state.term }
          onChange={ this.onChange.bind(this) }
        />
      </div>
    )
  }

}

export default SearchBar
