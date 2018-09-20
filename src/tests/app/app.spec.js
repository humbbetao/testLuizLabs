import React from 'react'
import { shallow } from 'enzyme'
import App from '../../app'

describe('App', () => {
  it('app must render A div', () => {
    let wrapper = shallow(<App/>)
    expect(wrapper.find('.container').text()).toBe('teste')
  })
})
