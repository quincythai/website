import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar/Navbar';
import Block from './components/Block/Block';

function App() {
  // const [count, setCount] = useState(0)
  const links = [
    { text: 'Home', url: '/home'},
    { text: 'Contact', url: '/contact'}
  ];

  // TODO: add router

  return (
    <>
      <Navbar links = {links}/>
      <Block />
    </>
  )
}

export default App
