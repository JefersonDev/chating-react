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
                    <div className={"notification shadow"}>
                        <div>
                            <div className={"unreadys"}>
                                <ul>
                                    <li><img width={"100%"} src={"img/avatar.png"} alt={""} /></li>
                                </ul>
                            </div>
                            <div className={"groups"}>
                                <ul>
                                    <li><img width={"100%"} src={"img/group.png"} alt={""} /></li>
                                </ul>
                            </div>
                        </div>
                        <div className={"handlers"}>
                            <ul >
                                <li className={"plus"}><i className="fas fa-plus" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className={"navigation shadow"} >
                        <div className={"handlers"}>
                            <ul >
                                <li><i className="fas fa-comment-dots"/></li>
                                <li><i className="fas fa-user-alt" /></li>
                                {/*<li><i style={{marginLeft:'3px'}} className="fas fa-user-plus" /></li>*/}
                                {/*<li><i className="fas fa-exclamation" /></li>*/}
                                <li><i className="fas fa-cog" /></li>
                            </ul>
                        </div>
                        <div className={"profile"}>
                            <img src={"img/avatar.png"} alt={""} width={"100%"} />
                            <div className={"profile-status online"}/>
                        </div>
                    </div>
                    <div className={"tab shadow"}>
                        <div className={"tab-container"}>
                            <ul>
                                <li>
                                    <div className={"li-avatar"}>
                                        <img width={"35px"} src={"img/avatar.png"} alt={""} />
                                        <div className={"li-status online"} />
                                    </div>
                                    <div className={"li-body"}>afro</div>
                                    <div className={"li-action"}><i className="fas fa-times" /></div>
                                </li>
                            </ul>
                        </div>
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
