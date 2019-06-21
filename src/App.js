import React, { Component } from 'react';

import Cluster from './Support/Cluster';

class App extends Component {

	state = {
		counter: 'Swans vs Hawk',
		compare: '',
		letters: []
	}


	editCounter = (event) => {

		const letters = [];
		if(event.target.value) {
			for(let l in event.target.value) {
				const the_letter = event.target.value[l].toUpperCase();
				letters.push({id: l, name: the_letter, used: 0});
			}
		}

		const updated_state = {
			counter: event.target.value,
			compare: '',
			letters: letters
		};

		this.setState(updated_state);

	}



	editCompare = (event) => {

		const letters = [...this.state.letters];

		for(let letter in letters) {
			letters[letter].used = 0;
		}

		if(event.target.value) {
			for(let l in event.target.value) {
				const the_letter = event.target.value[l].toUpperCase();
				// letters.push({id: l, name: the_letter, used: 0});
				for(let letter in letters) {
					if(letters[letter].name === the_letter && letters[letter].used !== 1) {
						letters[letter].used = 1;
						break;
					}
				}
			}
		}

		const updated_state = {
			...this.state,
			compare: event.target.value,
			letters: letters
		};

		this.setState(updated_state);

	}


	render() {

		let the_counter = this.state.letters
			.map(letter => {
				let className = '';
				if(letter.used) className = 'u';
				return <span key={letter.id} className={className}>{letter.name}</span>;
			});

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
								<input value={this.state.counter} onChange={(event) => this.editCounter(event)} type="text" className="field__input" placeholder="Words or Phrase" />
							</div>

							<div className="counter">
								<h3 className="counter__title">{the_counter}</h3>
							</div>

							<div className="compare">
								<h3 className="compare__title">{this.state.compare}</h3>
							</div>

							<div className="field field--bottom">
								<input value={this.state.compare} onChange={(event) => this.editCompare(event)} type="text" className="field__input" placeholder="Compare" />
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
