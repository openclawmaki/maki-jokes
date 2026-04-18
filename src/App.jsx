import { useState } from 'react'
import './App.css'

const JOKES = [
  { setup: '¿Por qué el sushi nunca se pelea?', delivery: '¡Porque siempre va en paz (en pez)! 🐟' },
  { setup: '¿Qué le dice un nigiri a otro?', delivery: '¡Qué "arroz" tan bonito tienes! 🍣' },
  { setup: '¿Cómo se despiden los sushis?', delivery: '¡Sayonara, baby-arroz! 🍱' },
  { setup: '¿Cuál es el sushi favorito de los músicos?', delivery: 'El Rock and Roll. 🎸' },
  { setup: '¿Qué hace un sushi en el gimnasio?', delivery: '¡Musul-maki! 💪' }
]

function App() {
  const [index, setIndex] = useState(0)

  const nextJoke = () => {
    setIndex((prev) => (prev + 1) % JOKES.length)
  }

  return (
    <div className="box">
      <h1>Maki Jokes 🍣</h1>
      <p className="joke-setup">{JOKES[index].setup}</p>
      <p className="joke-delivery">{JOKES[index].delivery}</p>
      <button onClick={nextJoke}>¡Otro!</button>
    </div>
  )
}

export default App
