import React, { useState, useEffect } from 'react';

import {getUserRoutines} from '../../api'

const MyRoutines = (props) => {
    const { user, token, activities } = props;
    const [routines, setRoutines] = useState([]);
    

    return (<h1>My routines</h1>);
}

export default MyRoutines;
