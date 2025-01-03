import { useState, useTransition } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const sleep = () => {
    return new Promise(resolve => setTimeout(resolve, 10000))
}


function App() {
  const [isPending, startTransition] = useTransition();

  const [count, setCount] = useState(0)

  const onSubmit = () => {
      // @ts-ignore
      startTransition(async () => {
          await sleep()
      })
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
         <p>
            <button onClick={onSubmit}>startTransition {JSON.stringify(isPending)}</button>
         </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
