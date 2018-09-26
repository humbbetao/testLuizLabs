import React, {PureComponent} from "react"
import PropTypes from 'prop-types'
import {GoogleMap, Map, Marker, withGoogleMap} from "react-google-maps"
import {connect} from "react-redux";
import result from "../reducers/searchReducer";

var INITIAL_LOCATION = {
    address: 'Rua Terra, 219',
    position: {
        latitude: 23.4931164,
        longitude: -46.8691146
    }
}

class ContainerMap extends PureComponent {
    render() {
        const {result}  = this.props
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <GoogleMap
                            defaultZoom={8}
                            defaultCenter={result.location}
                        >
                            {<Marker position={result.location}/>}
                        </GoogleMap>
                        />
                    </div>
                </div>
            </div>
        )
    }
}

ContainerMap.defaultProps = {
    result: {}
}
ContainerMap.propsTypes = {
    result: PropTypes.object
}

const mapStateToProps = state => ({
    result: state.result
});

export default connect(mapStateToProps)(withGoogleMap(ContainerMap))
