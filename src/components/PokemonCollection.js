import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    const result = this.props.pokemon.map(p => <PokemonCard key={p.id} pokemon={p} />)
    return (      
      <Card.Group itemsPerRow={6}>
        {result}
      </Card.Group>
    )
  }
}

export default PokemonCollection
