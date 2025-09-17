import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="container">

      <div class="section">
        <div class="box"></div>
        <div class="peach-box">
          <div class="red-group">
            <div class="inner"></div>
            <div class="inner"></div>
          </div>
        </div>
        <div class="box"></div>
      </div>

      <div class="middle">
        <div class="left"></div>
        <div class="right">
          <div></div>
          <div></div>
        </div>
      </div>

      <div class="bottom">
        <div class="side"></div>
        <div class="center">
          <div></div>
          <div></div>
        </div>
        <div class="side"></div>
      </div>

    </div>
  )
}

export default App
