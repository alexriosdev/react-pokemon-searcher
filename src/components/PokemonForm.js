import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  state = {
    id: '',
    name: '',
    hp: '',
    sprites: {
      front: '',
      back: '',
    }
  }

  handleInfo = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.name === 'hp' ? parseInt(event.target.value, 10) : event.target.value
    })
  }

  handleSprites = (event) => {
    event.preventDefault()
    this.setState({
      sprites: {
        ...this.state.sprites,
        [event.target.name]: event.target.value
      }
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={() => this.props.addPokemon(this.state)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleInfo} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleInfo} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="front" onChange={this.handleSprites} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="back" onChange={this.handleSprites} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
