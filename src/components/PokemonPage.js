import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    search: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemon =>  this.setState({ pokemon: pokemon }))
  }

  handleSearch = (event) => {
    event.preventDefault()
    this.setState({
      search: event.target.value      
    })
  }

  addPokemon = (newPokemon) => {
    const options = {
      method: 'POST',
      body: JSON.stringify(newPokemon),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    fetch('http://localhost:3000/pokemon', options)
    .then(resp => resp.json())
    .then(pokemon =>  this.setState({ 
      pokemon: [...this.state.pokemon, pokemon] 
    }))
  }

  render() {
    const searchedPokemon = this.state.pokemon.filter(p => p.name.includes(this.state.search))
    console.log(searchedPokemon)
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search handleSearch={this.handleSearch} />
        <br />
        <PokemonCollection pokemon={searchedPokemon} />
      </Container>
    )
  }
}

export default PokemonPage
