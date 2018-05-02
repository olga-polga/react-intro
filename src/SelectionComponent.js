import React, {Component} from 'react';

import ListItem from "./ListItem";

class SelectionComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {selection: -1};
    }

    selectItem = (id) => {
        this.setState({selection: id})
    }

    renderItems() {
        if (this.props.listings !== undefined) {
            return this.props.listings.houses.map((item) =>
                <ListItem key={item.id}
                          id={item.id}
                          value={item.address}
                          selection={this.state.selection}
                          callback={() => this.selectItem(item.id)}
                />)
        }
    }

    render() {
        return (
            <div className="Left-nav">
                <h2>Listings</h2>
                <ul>
                    {this.renderItems()}
                </ul>
            </div>
        )
    }

}

export default SelectionComponent