import React from 'react'
import {shallow} from 'enzyme'
import {Body} from '../components'

describe('Body', () => {
    it('main screen must renderer a div', () => {
        let wrapper = shallow(<Body/>)
        expect(wrapper.find('div').text()).toBe('test')
    })
})
