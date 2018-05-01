import React from 'react'
import PropTypes from 'prop-types'
import { Jumbotron, Button } from 'react-bootstrap';

//Functional component is just a JavaScript function.
//It takes in an optional input - called 'props':


//@TODO: "destructure" props
const StatelessComponent = (props) => (
    <div className="Main">
        <Jumbotron>
            <h1>{props.headline}</h1>
            <div>{props.children}</div>
            <p><Button bsStyle="primary" onClick={props.callback}>Click Me</Button></p>
        </Jumbotron>
    </div>
)

StatelessComponent.propTypes = {
    headline: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired
}

export default StatelessComponent
