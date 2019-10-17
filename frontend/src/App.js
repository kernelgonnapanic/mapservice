import React, { useEffect } from 'react'
import { api } from './core'

function App() {
	useEffect(() => {
		api.get(`https://www.instagram.com/mistosio/`)
	})

	return <div className="App"></div>
}

export default App
