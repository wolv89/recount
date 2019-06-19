import React, { Component } from 'react';

import Cluster from './Support/Cluster';

class App extends Component {

	render() {
		return (
			<Cluster>
				<div className="backlight"></div>
				<div className="App">
					<p>This is the way</p>
				</div>
			</Cluster>
		);
	}
}

export default App;
