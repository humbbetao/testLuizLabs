import React, {PureComponent} from 'react'
import {connect} from "react-redux"
import {search} from "../actions/search";
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
    }

    render() {
        console.log(this.props)
        return (
            <div className="jumbotron">
                <h4>Consultar</h4>
                <form className="navbar-form form-inline navbar-right">
                    <div className="input-group">
                        <input className="form-control input-lg" id='searchBox' placeholder="Search..." type="text"
                               value={this.state.query}
                               onChange={(e) => this.handleChange(e)}
                        />
                        <span className="input-group-btn">
                        <button type="submit" className="btn input-lg" id="searchButton"
                                onClick={(e) => this.handleSubmit(e)}>
                            <span className="glyphicon glyphicon-search"></span>
                        </button>
                    </span>
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
        search: query => dispatch(search(query))
    }
}

export default connect(null, mapDispatchToProps)(Header)
