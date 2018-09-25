import React, {PureComponent} from 'react'
import {Header, Body} from "./index";

class MainScreen extends PureComponent {
    render() {
        return (
            <div className="container">
                <h2>Consulta de Endereço</h2>
                <Header/>
                <Body/>
            </div>
        )
    }
}

MainScreen.defaultProps = {}
MainScreen.propsTypes = {}
export default MainScreen
