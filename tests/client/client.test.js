import test from 'ava'
import React from 'react'
import { shallow, mount, render } from 'enzyme'

import './helpers/setup-dom'
import store from '../../client/store'
import App from '../../client/components/App'
import Home from '../../client/components/Home'
import About from '../../client/components/About'


App.prototype.componentDidMount = () => {}

// test.skip('App is rendering', t =>  {
//   const wrapper = shallow(
//     <App store={store}>
//       <div className='app-container' />
//     </App>
//   t.is(wrapper.contains(<div className='app-container' />)).to.equal(true))
// })

test('Home is rendering', t => {
  const wrapper = shallow(<Home store={store}/>)
  t.is(wrapper.find('.homepage').text(), 'Go Green!')
})

test('About is rendering', t => {
  const wrapper = shallow(<About store={store}/>)
  t.is(wrapper.find('.about').text(), 'Team Hoppers!')
})
