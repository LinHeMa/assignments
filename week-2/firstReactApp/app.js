/* eslint-disable react/react-in-jsx-scope */

// eslint-disable-next-line no-undef
const { createRoot } = ReactDOM
const { Component } = React
const container = document.getElementById('app')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
const players = [
  { id: 1, name: 'Guil', score: 50 },
  { id: 2, name: 'Treasure', score: 85 },
  { id: 3, name: 'Ashley', score: 95 },
  { id: 4, name: 'James', score: 80 }
]
function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className='status'>totalPlayers :{props.totalPlayers}</span>
    </header>
  )
}

const Player = (props) => {
  return (
    <div className='player'>
      <button
        className='remove-player'
        onClick={() => props.removePlayer(props.id)}
      >
        X
      </button>
      <span className='palyer-name'>{props.name}</span>
      <Counter />
    </div>
  )
}

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      score: 0
    }
  }
  incrementScore = () => {
    this.setState((prevState) => {
      return { score: prevState.score + 1 }
    })
  }
  decrementScore() {
    this.setState((prevState) => {
      return { score: prevState.score - 1 }
    })
  }

  render() {
    return (
      <div className='counter'>
        <button
          className='counter-action decrement'
          onClick={() => this.decrementScore()}
        >
          -
        </button>
        <span className='counter-score'>{this.state.score}</span>
        <button
          className='counter-action increment'
          onClick={this.incrementScore}
        >
          +
        </button>
      </div>
    )
  }
}

class App extends Component {
  state = {
    players: [
      { id: 1, name: 'Guil' },
      { id: 2, name: 'Treasure' },
      { id: 3, name: 'Ashley' },
      { id: 4, name: 'James' }
    ]
  }

  handleDelete = (id) => {
    this.setState((prevState) => {
      return { players: prevState.players.filter((player) => player.id !== id) }
    })
  }

  render() {
    return (
      <div className='scoreboard'>
        <Header title='Scoreboard' totalPlayers={this.state.players.length} />
        {this.state.players.map((player) => (
          <Player
            key={player.id.toString()}
            id={player.id}
            name={player.name}
            removePlayer={this.handleDelete}
          />
        ))}
      </div>
    )
  }
}

root.render(<App />)
