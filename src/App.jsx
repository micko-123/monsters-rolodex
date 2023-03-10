import { Component } from 'react'
import './App.css'
import { CardList} from './components/card-list/card-list.component'; 
import { SearchBar } from './components/search-bar/search-bar.component'

class App extends Component {

  constructor(){
    super()

    this.state = {
        monsters:[],
        searchField:''        
    };

  }

  handleChange = (e)=> {
    this.setState({searchField:e.target.value})
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render(){

    const { monsters, searchField } = this.state;
    const filterdList = monsters.filter( monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )    
    return (
    <div>

      <h1 className='header'>Monster Rolodex</h1>
      <SearchBar 
       placeholder='monster search' 
       handleChange={ this.handleChange }
      /> 
      <CardList monsters={filterdList} />
    </div>
  )
  }
}

export default App
