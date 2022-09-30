import {h, Component} from 'preact';
import './App.scss';

import { useState } from 'preact/hooks';

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    console.log("clicled ", 1);
    setCount(count + 1)
  }
  const decrement = () => setCount((currentCount) => currentCount - 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default class App extends Component {
	render () {
		const date = new Date();
		const message = typeof window === 'undefined' ? 'Server rendered at: ' + new Date().getTime() : 'Hydrated at: ' + new Date().getTime();

		return (
			<div>
				<h1>Hello Preact</h1>
        <span style={{ color: 'red' }}>Testing Class</span>
				<div>{message}</div>
        <Counter />
			</div>
		);
	}
}