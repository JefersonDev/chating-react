import React from 'react';

import Handlers from "./Handlers/Handlers";
import Navigations from './Navigations/Navigations';
import Notifications from "./Notifications/Notifications";

class Left extends React.Component {
    render() {
        return  <div className={"left"}>
            <Notifications />
            <Navigations />
            <Handlers />
        </div>
    }
}


export default Left
