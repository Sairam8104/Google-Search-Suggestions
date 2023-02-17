// Write your code here
import './index.css'

const SearchItems = props => {
  const {searchItem, AddUser} = props
  const {id, suggestion} = searchItem
  const onAdd = () => {
    AddUser({suggestion})
  }
  return (
    <li className="listItems">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-logo"
        onClick={onAdd}
      />
    </li>
  )
}

export default SearchItems
