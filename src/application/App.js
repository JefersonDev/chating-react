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
        this.state = {
            profile: {id: '123456798', avatar: 'img/afro.png', username: 'username', status: 'online'},
            conversation: {to: undefined, room: undefined},
            handler: 'contacts',

            conversations: [
                {room: "321", by: {id:"987",avatar: "img/punk.png", username: "punk", status: "online"}},
                {room: "332", by: {id:"741",avatar: "img/woman.png", username: "woman", status: "busy"}},
                {room: "852", by: {id:"963",avatar: "img/girl.png", username: "girl", status: "offline"}},
            ],

            contacts: [
                {type:undefined, id:"852",avatar: "img/punk.png",username:"punk",status:"online"},
                {type:undefined, id:"741",avatar: "img/woman.png", username: "woman", status: "busy"},
                {type:undefined, id:"963",avatar: "img/girl.png", username: "girl", status: "offline"},
                {type:"order", id:"965",avatar: "img/hipster.png", username: "hipster", status: "offline"},
                {type:"invite", id:"789",avatar: "img/rock.png", username: "rock", status: "admin"}
            ],

            messages:[{
                id: "741963",
                msg:"alguma mensagem do punk para afro",
                room:"321",
                by:{id:"987",avatar: "img/punk.png", username: "punk", status: "online"}
            },
                {
                    id: "852963",
                    msg:"alguma mensagem do afro para o seu amigo punk",
                    room:"321",
                    by:{id:"987",avatar: "img/afro.png", username: "afro", status: "online"}
                },
                {
                    id: "741569",
                    msg:"alguma mensagem do punk para afro",
                    room:"321",
                    by:{id:"987",avatar: "img/punk.png", username: "punk", status: "online"}
                },
                {
                    id: "741963",
                    msg:"alguma mensagem do afro para a sua amiga woman",
                    room:"332",
                    by:{id:"987",avatar: "img/afro.png", username: "afro", status: "online"}
                },
                {
                    id: "741252",
                    msg:"alguma mensagem da woman para a seu amigo afro",
                    room:"332",
                    by:{id:"987",avatar: "img/woman.png", username: "woman", status: "online"}
                }]

        }
    }

    componentDidMount() {

    }

    /// check container is has active
    isContainer(container) {
        return this.state.handler === container;
    }

    isHandlerClass(handler) {
        return this.state.handler === handler ? "active" : ""
    }

    isConversationClass(room) {
        return this.state.conversation.room === room ? "active" : "";
    }

    isConversation(room) {
        return this.state.conversation.room === room
    }

    filterMessages(room) {
        return this.state.messages.filter(msg => msg.room === room)
    }


    handlerConversation(conversation) {
        this.setState({conversation})
        this.handlerHandler("conversations")
    }

    handlerHandler = (handler) => {
        this.setState({handler})
    }

    render() {
        return (
            <react.Fragment>
                <div className={"left"}>
                    <div className={"notification shadow"}>
                        <div>
                            <div className={"unreadys"}>
                                <ul>
                                    <li><img width={"100%"} src={"img/fernanda.png"} alt={""}/></li>
                                </ul>
                            </div>
                            <div className={"groups"}>
                                <ul>
                                    <li><img width={"100%"} src={"img/group.png"} alt={""}/></li>
                                </ul>
                            </div>
                        </div>
                        <div className={"handlers"}>
                            <ul>
                                <li className={"plus"}><i className="fas fa-plus"/></li>
                            </ul>
                        </div>
                    </div>
                    <div className={"navigation shadow"}>
                        <div className={"handlers"}>
                            <ul>
                                <li
                                    className={this.isHandlerClass("conversations")}>
                                <i className="fas fa-comment-dots"/></li>
                                <li onClick={() => this.handlerHandler("contacts")}
                                    className={this.isHandlerClass("contacts")}>
                                    <i className="fas fa-user-alt"/></li>
                                <li onClick={() => this.handlerHandler("cogs")}
                                    className={this.isHandlerClass("cogs")}>
                                    <i className="fas fa-cog"/></li>
                            </ul>
                        </div>
                        <div className={"profile"}>
                            <img src={this.state.profile.avatar} alt={""} width={"100%"}/>
                            <div className={"profile-status online"}/>
                        </div>
                    </div>
                    <div className={"tab shadow"}>
                        <div className={"tab-container"}>
                            <ul>
                                {this.state.conversations.map(conversation => (
                                    <li onClick={() => this.handlerConversation({room: conversation.room, to: conversation.by.id})}
                                        className={this.isConversationClass(conversation.room)}>
                                        <div className={"li-avatar"}>
                                            <img width={"35px"} src={conversation.by.avatar} alt={""}/>
                                            <div className={`li-status ${conversation.by.status}`}/>
                                        </div>
                                        <div className={"li-body"}>{conversation.by.username}</div>
                                        <div className={"li-action"}><i className="fas fa-times"/></div>
                                    </li>))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={"right shadow"}>
                    <div className={"container"}>
                        {this.isContainer("conversations") ? <div className={"main"}>
                            <div className={"header shadow"}/>
                            {this.state.conversations.map(conversation => (
                                this.isConversation(conversation.room) ? <div className={"room"}>
                                        {this.filterMessages(conversation.room).map(msg => (
                                            <div className={"msg"}>
                                               <div className={"msg-content  shadow"}>
                                                   <div className={"msg-avatar"}>
                                                       <img width={"35px"} src={msg.by.avatar}/>
                                                   </div>
                                                   <div className={"msg-body"}>
                                                       {msg.msg}
                                                   </div>
                                               </div>
                                            </div>
                                        ))}
                                </div>: ""
                            ))}
                            <div className={"plaintext shadow"}>
                                <div className={"plaintext-input"}>
                                    <input type={"text"}/>
                                </div>
                                <div className={"plaintext-action"}>
                                    <i className="fas fa-grin-tongue-wink"/>
                                </div>
                            </div>
                        </div> : ""}
                        {this.isContainer("contacts") ? <div className={"main-container"}>
                            <div className={"header"}>
                                <div className={"invite-form"}>
                                    <input type={"text"}/>
                                    <button><i className="fas fa-plus"/></button>
                                </div>
                            </div>
                            <div className={"tab-container contacts"}>
                                <ul>
                                    {this.state.contacts.map(contact => (
                                        <li className={contact.type}>
                                            <div className={"li-avatar"}>
                                                <img width={"35px"} src={contact.avatar} alt={""}/>
                                                {contact.type === undefined ? <div className={`li-status ${contact.status}`}/>: ""}
                                            </div>
                                            <div className={"li-body"}>{contact.username}</div>
                                            <div className={"li-action"}><i className="fas fa-bars"/></div>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        </div> : ""}
                        {this.isContainer("cogs") ?
                            <div className={"main-container"}>
                                configurações
                            </div> : ""}

                    </div>
                    <div className={"wrappers shadow"}/>
                </div>
            </react.Fragment>
        )
    }

}

export default App;
