import '../styles/app/app.css';
import React from "react";
import axios from "axios";
import io from "socket.io-client";


import Left from "./chatting/Left/Left";
import Right from "./chatting/Right/Right";
class App extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return <div className={"chatting"}>
            <Left />
            <Right />
        </div>
    }

}

export default App;
