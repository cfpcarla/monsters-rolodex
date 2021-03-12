import '../src/App.css';
import { Component } from 'react';
import { CardList } from '../src/card-list/card-list.component.jsx'
import { SearchBox } from '../src/search-box/search-box.component.jsx'


class App extends Component {
  constructor() {
    super();
  
    this.state = {
      monsters: [],
      searchField: ''
    };
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({ monsters: users }));
}

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )
    return (
      <div className="App">
      <SearchBox placeholder= 'search monsters'
      handleChange={e => this.setState({ searchField: e.target.value })} />
      <CardList monsters={filteredMonsters}/> 
      </div>
    );
  }
}
export default App;

