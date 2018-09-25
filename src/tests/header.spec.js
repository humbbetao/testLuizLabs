import React from 'react'
import {shallow} from 'enzyme'
import {Header} from "../components";

describe('Header', () => {
    it('main screen must renderer a div', () => {
        let wrapper = shallow(<Header/>)
        expect(wrapper.find('div').text()).toBe('test')
    })
})
