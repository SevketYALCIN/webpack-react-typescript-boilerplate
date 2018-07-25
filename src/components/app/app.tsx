import * as React from "react";
import './app.scss';
import * as tsLogo from './ts.png'

class App extends React.Component<AppProps> {
	render() {
		return (
			<div className="app">
				<h1>{this.props.title}</h1>
				<img src={tsLogo} />
			</div>
		);
	}
}

interface AppProps{
	title: string
}

export default App;