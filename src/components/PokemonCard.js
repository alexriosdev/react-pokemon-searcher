import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state ={
    clicked: false
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    const pokemon = this.props.pokemon;

    return (
      <Card onClick={this.handleClick} >
        <div>
          <div className="image">
            {this.state.clicked ? <img src={pokemon.sprites.back} alt={pokemon.name} /> : <img src={pokemon.sprites.front} alt={pokemon.name} />} 
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
