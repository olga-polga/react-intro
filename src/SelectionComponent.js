import React, {Component} from 'react';

import ListItem from "./ListItem";
import ListingForm from "./ListingForm";

class SelectionComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {listings: this.staledata().houses, selection: -1};
    }

    componentDidMount() {
        //@TODO: read from API
    }

    selectItem = (id) => {
        this.setState({selection: id})
    }


    addItem = (address) => {
        let lastIndex =  this.state.listings.length;
        let newlisting = {id: ++lastIndex, address: address};

        console.log("--- new listing --- " + JSON.stringify(newlisting))

        let newstate =  this.state.listings;
        newstate.push(newlisting);
        this.setState(newstate);
    }

    renderItems() {
        return this.state.listings.map((item) =>
            <ListItem key={item.id}
                      id={item.id}
                      value={item.address}
                      selection={this.state.selection}
                      callback={() => this.selectItem(item.id)}
            />)
    }

    render() {
        return (
            <div className="Left-nav">
                <h2>Listings</h2>
                <ul>
                    {this.state.listings !== undefined && this.renderItems()}
                </ul>
                <ListingForm addListing={(value) => this.addItem(value)}/>
            </div>
        )
    }


    staledata = () => (
        {
            "houses":
                [
                    {
                        "address": "5 Privet Dr.",
                        "id": 1,
                        "_links": {
                            "self": {
                                "href": "http://localhost:9001/api/houses/1"
                            },
                            "house": {
                                "href": "http://localhost:9001/api/houses/1"
                            },
                            "pictures": {
                                "href": "http://localhost:9001/api/houses/1/pictures"
                            }
                        }
                    },
                    {
                        "address": "720 Paper St.",
                        "id": 2,
                        "_links": {
                            "self": {
                                "href": "http://localhost:9001/api/houses/2"
                            },
                            "house": {
                                "href": "http://localhost:9001/api/houses/2"
                            },
                            "pictures": {
                                "href": "http://localhost:9001/api/houses/2/pictures"
                            }
                        }
                    },
                    {
                        "address": "Apt. 56B, Whitehaven Mansions",
                        "id": 3,
                        "_links": {
                            "self": {
                                "href": "http://localhost:9001/api/houses/3"
                            },
                            "house": {
                                "href": "http://localhost:9001/api/houses/3"
                            },
                            "pictures": {
                                "href": "http://localhost:9001/api/houses/3/pictures"
                            }
                        }
                    },
                    {
                        "address": "123 Conch Street, Bikini Bottom",
                        "id": 4,
                        "_links": {
                            "self": {
                                "href": "http://localhost:9001/api/houses/4"
                            },
                            "house": {
                                "href": "http://localhost:9001/api/houses/4"
                            },
                            "pictures": {
                                "href": "http://localhost:9001/api/houses/4/pictures"
                            }
                        }
                    },
                    {
                        "address": "42 Wallaby Way, Sydney",
                        "id": 5,
                        "_links": {
                            "self": {
                                "href": "http://localhost:9001/api/houses/5"
                            },
                            "house": {
                                "href": "http://localhost:9001/api/houses/5"
                            },
                            "pictures": {
                                "href": "http://localhost:9001/api/houses/5/pictures"
                            }
                        }
                    }
                ]
        }

    )
}
export default SelectionComponent