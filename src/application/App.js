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
                                    <li><img width={"100%"} src={"img/fernanda.png"} alt={""} /></li>
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
                            <ul>
                                <li><i className="fas fa-comment-dots"/></li>
                                <li><i className="fas fa-user-alt" /></li>
                                <li><i className="fas fa-cog" /></li>
                            </ul>
                        </div>
                        <div className={"profile"}>
                            <img src={"img/jeferson.png"} alt={""} width={"100%"} />
                            <div className={"profile-status online"}/>
                        </div>
                    </div>
                    <div className={"tab shadow"}>
                        <div className={"tab-container"}>
                            <ul>
                                <li>
                                    <div className={"li-avatar"}>
                                        <img width={"35px"} src={"img/joelton.png"} alt={""} />
                                        <div className={"li-status online"} />
                                    </div>
                                    <div className={"li-body"}>joelton</div>
                                    <div className={"li-action"}><i className="fas fa-times" /></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={"right shadow"}>
                    <div className={"container"}>
                        <div className={"main"}>
                            <div className={"header shadow"} />
                            <div className={"room"}>
                                <div className={"msg shadow"}>
                                    <div className={"msg-avatar"}>
                                        <img width={"35px"} src={"img/jeferson.png"} />
                                    </div>
                                    <div className={"msg-body"}>
                                        The viewport-percentage lengths are relative to the size of the initial containing block. When the height or width of the initial containing block is changed
                                    </div>
                                </div>
                                <div className={"msg shadow"}>
                                    <div className={"msg-avatar"}>
                                        <img width={"35px"} src={"img/bianca.png"} />
                                    </div>
                                    <div className={"msg-body"}>
                                        The viewport-percentage lengths are relative to the size of the initial containing block. When the height or width of the initial containing block is  The viewport-percentage lengths are relative to the size of the initial containing block. When the height or width of the initial containing block is changed
                                    </div>
                                </div>
                                <div className={"msg shadow"}>
                                    <div className={"msg-avatar"}>
                                        <img width={"35px"} src={"img/jeferson.png"} />
                                    </div>
                                    <div className={"msg-body"}>
                                        When the height or width of the initial containing block is changed
                                    </div>
                                </div>
                            </div>
                            <div className={"plaintext shadow"}>
                                <div className={"plaintext-input"}>
                                    <input type={"text"}/>
                                </div>
                                <div className={"plaintext-action"}>
                                    <i className="fas fa-grin-tongue-wink" />
                                </div>
                            </div>
                        </div>
                        <div className={"main-container"}>
                            {/*<div className={"header"}>*/}
                            {/*    <div className={"invite-form"}>*/}
                            {/*        <input type={"text"} />*/}
                            {/*        <button><i className="fas fa-plus" /></button>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className={"tab-container contacts"}>*/}
                            {/*    <ul>*/}
                            {/*        <li>*/}
                            {/*            <div className={"li-avatar"}>*/}
                            {/*                <img width={"35px"} src={"img/joelton.png"} alt={""} />*/}
                            {/*                <div className={"li-status online"} />*/}
                            {/*            </div>*/}
                            {/*            <div className={"li-body"}>joelton</div>*/}
                            {/*            <div className={"li-action"}><i className="fas fa-bars" /></div>*/}
                            {/*        </li>*/}
                            {/*        <li className={"order"}>*/}
                            {/*            <div className={"li-avatar"}>*/}
                            {/*                <img width={"35px"} src={"img/bianca.png"} alt={""} />*/}
                            {/*                <div className={"li-status online"} />*/}
                            {/*            </div>*/}
                            {/*            <div className={"li-body"}>bianca</div>*/}
                            {/*            <div className={"li-action"}><i className="fas fa-bars"></i></div>*/}
                            {/*        </li>*/}
                            {/*        <li className={"invite"}>*/}
                            {/*            <div className={"li-avatar"}>*/}
                            {/*                <img width={"35px"} src={"img/beatriz.png"} alt={""} />*/}
                            {/*                <div className={"li-status online"} />*/}
                            {/*            </div>*/}
                            {/*            <div className={"li-body"}>beatriz</div>*/}
                            {/*            <div className={"li-action"}><i className="fas fa-bars"></i></div>*/}
                            {/*        </li>*/}
                            {/*    </ul>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className={"wrappers shadow"} />
                </div>
            </react.Fragment>
        )
    }

}

export default App;
