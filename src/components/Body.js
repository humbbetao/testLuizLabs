import React, {PureComponent} from 'react'
import {connect} from "react-redux"
import PropTypes from "prop-types"
import ContainerMap from "./ContainerMap"

class Body extends PureComponent {
    render() {
        console.log(this.props)
        const {result} = this.props
        const {cep} = result

        return (
            <div>
                {Boolean(cep) &&
                <div>
                    <h2>{cep.logradouro}</h2>
                    <h2> {cep.bairro}</h2>
                    <h2>{cep.localidade}</h2>
                    <h2>{cep.cep}</h2>
                    <ContainerMap/>
                </div>
                }
            </div>)
    }
}

Body.defaultProps = {
    result: {}
}
Body.propsTypes = {
    result: PropTypes.object
}

const mapStateToProps = state => ({
    result: state.result,
});

export default connect(mapStateToProps)(Body)
