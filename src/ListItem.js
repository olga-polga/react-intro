import React from 'react';
import PropTypes from "prop-types";

const ListItem = ({id, selection, value, callback}) => (
    <li onClick={callback} className={id === selection ? 'selected' : 'list-item'}>
        <span>{value}</span>
    </li>
)

ListItem.propTypes = {
    id: PropTypes.number.isRequired,
    selection: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired
}

export default ListItem
