import react from 'react';
import '../styles/app/app.css';
import '../styles/app/status.css';
import '../styles/room.css'
import '../styles/left/tab.css'
import '../styles/left/navigation.css'
import '../styles/left/notification.css'
import '../styles/right/container.css'
import '../styles/right/header.css'
import '../styles/right/plaintext.css'
import '../styles/right/wrappers.css'
import React from "react";
class App extends react.Component {

    constructor(props) {
        super(props);
        this.state = {profile: {id: '', avatar: '', username: '', status: ''}}
    }

    componentDidMount() {

    }

    render() {
        return (
            <react.Fragment>
                <div className={"left"}>
                    <div className={"notification shadow"} />
                    <div className={"navigation shadow"} />
                    <div className={"tab shadow"}>

                    </div>
                </div>
                <div className={"right shadow"}>
                    <div className={"container"}>
                        <div className={"header shadow"} />
                        <div className={"room"}>

                        </div>
                        <div className={"plaintext shadow"} />
                    </div>
                    <div className={"wrappers shadow"} />
                </div>
            </react.Fragment>
        )
    }

}

export default App;
