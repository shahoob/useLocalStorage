import React from 'react'

import { useMyHook } from 'react-hooks-uselocalstorage'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
