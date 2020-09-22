# useLocalStorage - React custom hook
React custom Hook to manage [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

## Why useLocalStorage?
With this hook, you can handle your localStorage:
- Manage and use it as a simple [React State](https://reactjs.org/docs/hooks-reference.html#usestate).
- Don't need to call the [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window) interface.

## TL;DR;
> **const** [storageVariable, setStorageVariable] = **useLocalStorage**('storage data');

## Usage
Just install:

```console
npm install react-hook-uselocalstorage
```

And import the hook:

```javascript
import useLocalStorage from 'react-hook-uselocalstorage';
```

Use it in your component:

```javascript
import React, { useRef } from 'react'
import useLocalStorage from 'react-hook-uselocalstorage'

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

```

<!-- ## LIVE Example
([Check it in deployed example](https://github.com/franlol/useModal-example)) -->

## License
MIT © [franlol](https://github.com/franlol)
