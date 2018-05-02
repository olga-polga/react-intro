import React, {Component} from 'react';
import {connect} from 'react-redux';
import ListItem from './ListItem';
import {selectListingAction} from '../actions';


class Listings extends Component {
    loadImages() {
        console.log("loading images...")
    }


    componentDidMount(){
        // axios
        //     .get('http://localhost:8765/')
        //     .then(({ data })=> {
        //         this.setState({
        //             listings: data._embedded.houses
        //         });
        //     })
        //     .catch((err)=> {})
    }
    renderItems() {
        if (this.props.listings !== undefined) {
            return this.props.listings.houses.map((item) =>
                <ListItem key={item.id} id={item.id} value={item.address}
                          handleClick={()=> this.props.selectListingAction(item)}/>);
        }
    }

    render() {
        return (
            <ul>
                {this.renderItems()}
            </ul>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    listings: state.listings,
});



const mapDispatchToProps = {
    selectListingAction,
};


export default connect(mapStateToProps, mapDispatchToProps)(Listings);



