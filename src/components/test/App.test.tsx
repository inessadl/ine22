import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />).contains(<h1>flourescent adolescent</h1>);

    expect(wrapper).toBeTruthy();
  })
})
