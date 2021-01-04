import React from 'react';
import Header from "./Header/Header";
import Room from "./Room/Room";
import Plaintext from "./Plaintext/Plaintext";
class Container extends React.Component {
    render() {
        return <div className={"container shadow"}>
            <div className={"main"}>
                <Header />
                <Room />
                <Plaintext />
            </div>
        </div>
    }
}


export default Container;
