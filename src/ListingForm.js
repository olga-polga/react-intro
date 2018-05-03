import React, {Component} from 'react';
import {Icon} from 'react-fa'
import PropTypes from "prop-types";

class ListingForm extends Component {

    constructor(props) {
        super(props);
        this.state = {newListing: undefined};

        this._onChange = this._onChange.bind(this);
        this._onClick = this._onClick.bind(this);
    }

    _onClick(e) {
        // execute callback passed as this.props:
        this.props.addListing(this.state.newListing);

        // clear the state:
        this.setState({newListing: ""});
    }

    _onChange(e) {
        this.setState({newListing: e.target.value});
    }

    render() {
        return (
            <form>
                <label>
                    <textarea rows="2"
                              className="edit-area"
                              name="newListing"
                              placeholder="New listing ..."
                              value={this.state.newListing} onChange={this._onChange}/>
                </label>
                <Icon name="upload" size="lg" onClick={this._onClick} className="right-corner"/>
            </form>
        )
    }
}

ListingForm.propTypes = {
    addListing: PropTypes.func.isRequired
}
export default ListingForm
