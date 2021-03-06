import React, { useState }  from "react";
import {FormControl, Image, InputGroup, Button} from "react-bootstrap";


function ChatHelper() {
    const [chatBox, toggleChatBox] = useState(false);
    return (
        chatBox ? <ChatBox chatBox={chatBox} toggleChatBox={toggleChatBox} /> : <ChatButton toggleChatBox={toggleChatBox} />
    )
}

function ChatButton(props){
    return (
        <Button variant="primary" className="chat-helper" onClick={() => {props.toggleChatBox(true)}}>
            <Image src="/images/icon-chat.svg" /> &nbsp;Get Help
        </Button>
    )
}

function ChatBox(props) {
    return (
        <div className="chat-box">
            <h4 className="chat-title">Chat box
                <Button className="close-icon" variant="link" onClick={() => { props.toggleChatBox(!props.chatBox) }}>✕</Button>
            </h4>
            <div className="chat-content">
                <svg xmlns="http://www.w3.org/2000/svg" height="42" viewBox="0 0 14 13.351"><path d="M5.33,0C2.418,0,0,2.1,0,4.743A4.484,4.484,0,0,0,1.49,8.03a2.191,2.191,0,0,1-.728.964c-.171.139-.338.259-.473.377a.936.936,0,0,0-.184.193.458.458,0,0,0-.07.359l.035.105.1.061a1.785,1.785,0,0,0,1.017.158,6.126,6.126,0,0,0,1.166-.219,12.644,12.644,0,0,0,1.394-.482A5.31,5.31,0,0,0,8.7,12.571a7.532,7.532,0,0,0,1.113-.105,9.855,9.855,0,0,0,3.217.885,1.594,1.594,0,0,0,.8-.175l.105-.061.026-.105c.082-.3-.172-.511-.5-.771a2.832,2.832,0,0,1-.956-1.1A4.526,4.526,0,0,0,14,7.828,4.852,4.852,0,0,0,10.406,3.34,5.278,5.278,0,0,0,5.33,0Zm0,.561A4.711,4.711,0,0,1,9.853,3.48c0,.007.007.011.009.018s.005.018.009.026c.038.111.069.219.1.333.02.079.03.156.044.237,0,.021.005.041.009.061.012.075.027.152.035.228,0,.011,0,.024,0,.035.009.106.018.216.018.324a3.57,3.57,0,0,1-.026.421,3.829,3.829,0,0,1-.07.421,3.766,3.766,0,0,1-.281.78,4,4,0,0,1-.438.71c-.085.111-.183.221-.281.324s-.2.2-.307.3-.217.187-.333.272a5.08,5.08,0,0,1-2.078.868,5.361,5.361,0,0,1-.956.088c-.19,0-.378-.01-.561-.026-.009,0-.018,0-.026,0l-.07-.009c-.065-.008-.131-.016-.193-.026-.083-.013-.16-.026-.237-.044l-.088-.026-.088.035A15.469,15.469,0,0,1,2.2,9.494a5.81,5.81,0,0,1-1.061.2,1.237,1.237,0,0,1-.307-.044c.09-.07.165-.126.281-.219A2.584,2.584,0,0,0,2.1,8.03l.035-.167L2.008,7.75A3.949,3.949,0,0,1,.561,4.743,4.507,4.507,0,0,1,5.33.561Z" fill="#0056D2"/></svg>
                <br/><i>Chat conversation loads here...</i>
            </div>
            <div className="chat-input">
                <InputGroup>
                    <FormControl placeholder="Start typing.."/>
                    <InputGroup.Append>
                        <Button variant="outline-primary">→</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        </div>
    )
}


export default ChatHelper