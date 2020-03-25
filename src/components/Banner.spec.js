import React from 'react'
import Banner from './Banner'
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<Banner />)
})
