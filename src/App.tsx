import { useState } from 'react'
import { Button } from '@/components/ui/button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count + 1)
  }

  return (
    <>
      <h1>Contador: {count}</h1>
      <Button onClick={handleClick}>
        Clickeame!
      </Button>
    </>
  )
}

export default App
