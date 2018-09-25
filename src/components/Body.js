import React, {PureComponent} from 'react'
import {connect} from "react-redux"
import PropTypes from "prop-types"

class Body extends PureComponent {
    render() {
        console.log(this.props)
        const {cep} = this.props

        return (<div>
            <h2>{cep.logradouro}</h2>
            <h2>{cep.bairro}</h2>
            <h2>{cep.localidade}</h2>
            <h2>{cep.cep}</h2>
        </div>)
    }
}

Body.defaultProps = {
    cep: {
        "cep": "XXXXX-XXX",
        "logradouro": "Rua...",
        "complemento": "",
        "bairro": "Jardim...",
        "localidade": "São Paulo",
        "uf": "SP",
        "unidade": "",
        "ibge": "XXXXX",
        "gia": "XXX"
    }
}
Body.propsTypes = {
    cep: PropTypes.object
}

const mapStateToProps = state => ({
    cep: state.search,
});

export default connect(mapStateToProps)(Body)
