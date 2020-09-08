import React, { useRef } from 'react'
import useLocalStorage from 'react-hooks-uselocalstorage'

const App = () => {
  const [storageVariable, setStorageVariable] = useLocalStorage('storage data');
  const inputRef = useRef(null);

  const clickHandler = () => {
    setStorageVariable(inputRef.current.value);
  }

  return (
    <div>
      <h2>{storageVariable}</h2>

      <input ref={inputRef} type='text' />
      <button onClick={clickHandler}>Set</button>
    </div>
  )
}

export default App
