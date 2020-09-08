import React, { useRef } from 'react'

import useLocalStorage from 'react-hooks-uselocalstorage'

const App = () => {
  const [ls1, setLs1] = useLocalStorage('holae');
  const inputRef = useRef(null);

  const clickHandler = () => {
    setLs1(inputRef.current.value)
  }

  return (
    <div>
      <h2>{ls1}</h2>
      <input ref={inputRef} type='text' />
      <button onClick={clickHandler}>Set</button>
    </div>
  )
}

export default App
