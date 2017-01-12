import React from 'react'
import test from 'tape'

import { shallow } from 'enzyme'

import App from '../src/components/App'

test('This should work without exploding', t => {
  const wrapper = shallow(<App />)

  t.equal(wrapper.find('div').length, 1)
  t.end()
})

