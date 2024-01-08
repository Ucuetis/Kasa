import React from 'react'
import './App.css'
import RoutesPath from './Routes/RoutesPath'

/**
 * The `function App() {` is defining the functional component `App`.
 * This component returns a JSX element that represents the structure and content of the application.
 *
 * @function
 * @name App
 * @kind function
 * @returns {React.JSX.Element}
 */
function App() {
	return (
		<div className="App">
			<RoutesPath />
		</div>
	)
}

export default App
