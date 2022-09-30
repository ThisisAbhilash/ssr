import { h } from 'preact';
import { shallow } from 'enzyme';
import App from './app';

test('loads app page', () => {
  const context = shallow(<App />)
  expect(context.find('h1').text()).toBe('Hello Preact');
});