import React from 'react';
import {Chat} from "stream-chat-react";
import {StreamChat} from "stream-chat";
import {ChannelContainer, ChannelListContainer} from "./components";
import "./App.css";


const apiKey = 'x8uqxw2zcxfa';

const client = StreamChat.getInstance(apiKey)
const App = () => {
    return <div className={"app__wrapper"}>
        <Chat client={client} theme={"team light"}>

            <ChannelListContainer/>
            <ChannelContainer/>

        </Chat>
    </div>
};

export default App;
