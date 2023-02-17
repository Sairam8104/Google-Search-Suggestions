// Write your code here

import {Component} from 'react'
import SearchItems from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  AddUser = suggestion => {
    this.setState({searchInput: suggestion.suggestion})
  }

  render() {
    const {suggestionsList} = this.props

    const {searchInput} = this.state

    const searchResult = suggestionsList.filter(eachSearch =>
      eachSearch.suggestion.toLowerCase().includes(searchInput),
    )
    return (
      <div className="main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="search-container">
          <div className="container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              alt="search icon"
              className="search-logo"
            />
            <input
              type="search"
              className="search-bar"
              placeholder="Search Google"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
          <ul className="list-container">
            {searchResult.map(eachItem => (
              <SearchItems
                searchItem={eachItem}
                key={eachItem.id}
                AddUser={this.AddUser}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
