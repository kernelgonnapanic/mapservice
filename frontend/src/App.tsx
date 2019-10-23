import React, { useEffect } from 'react'
import { api } from './core'
import AddPlace from './components/AddPlace'

const App: React.FC = () => {
	useEffect(() => {
		async function fakeDate(): Promise<void> {
			const res = await api.get('/')

			console.log(res)
		}

		fakeDate()
	}, [])

	return (
		<div className="App">
			<AddPlace />
		</div>
	)
}

export default App
