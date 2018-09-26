import React, {PureComponent} from 'react'
import {connect} from "react-redux"
import {search, searchMap} from "../actions/search";
import PropTypes from "prop-types";

class Header extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (event) => {
        this.setState({query: event.target.value})
        console.log(event.target.value)
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.search(this.state.query)
        this.props.searchMap(this.state.query)
    }

    render() {
        console.log(this.props)
        return (
            <div className="jumbotron">
                <h4>Consultar</h4>
                <form className="form-inline" onSubmit={this.handleFormSubmit}>
                    <div className="row">
                        <div className="col-xs-8 col-sm-10">
                            <div className="form-group">
                                <label className="sr-only" htmlFor="address">Address</label>
                                <input type="text" className="form-control input-lg" id="address"
                                       placeholder="06414-060"
                                       value={this.state.query}
                                       onChange={(e) => this.handleChange(e)} required/>
                            </div>
                        </div>
                        <div className="col-xs-4 col-sm-2">
                            <button type="submit" className="btn btn-default btn-lg">
                                <span className="glyphicon glyphicon-search" aria-hidden="true"
                                      onClick={(e) => this.handleSubmit(e)}>Buscar</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

Header.defaultProps = {}
Header.propsTypes = {search: PropTypes.func}

const mapDispatchToProps = dispatch => {
    return {
        search: query => dispatch(search(query)),
        searchMap: query => dispatch(searchMap(query))
    }
}

export default connect(null, mapDispatchToProps)(Header)
