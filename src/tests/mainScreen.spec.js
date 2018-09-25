import React from 'react'
import {shallow, mount} from 'enzyme'
import {MainScreen} from "../components";

describe('App', () => {
    it('main screen must renderer a div', () => {
        let wrapper = shallow(<MainScreen/>)
        expect(wrapper.find('h2').text()).toBe('Consulta de Endereço')
    })
})
