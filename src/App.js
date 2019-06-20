import React, { Component } from 'react';

import Cluster from './Support/Cluster';

class App extends Component {

	state = {
		counter: '',
		compare: ''
	}


	editField = (event, field) => {

		const updated_state = {
			...this.state
		};

		updated_state[field] = event.target.value;
		this.setState(updated_state);

	}


	render() {
		return (
			<Cluster>
				<div className="backlight"></div>
				<div className="app">

					<div className="app__border">

						<header className="header">

							<h1 className="header__title">Re<span>Count</span></h1>

						</header>

						<main>

							<div className="field field--top">
								<input value={this.state.counter} onChange={(event) => this.editField(event,'counter')} type="text" className="field__input" placeholder="Words or Phrase" />
							</div>

							<div className="counter">
								<h3 className="counter__title">{this.state.counter}</h3>
							</div>

							<div className="compare">
								<h3 className="compare__title">{this.state.compare}</h3>
							</div>

							<div className="field field--bottom">
								<input value={this.state.compare} onChange={(event) => this.editField(event,'compare')} type="text" className="field__input" placeholder="Compare" />
							</div>

						</main>

						<footer className="footer">

						</footer>

					</div>

				</div>
			</Cluster>
		);
	}
}

export default App;
