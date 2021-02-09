import React, { Component } from "react";

export default class MainMsgSocket extends Component {
  render() {
    const { message, handleMessage, sendMessage, messages } = this.props;

    return (
      <div id="main-msg">
        <header>New Message</header>
        <div className="currentChat"></div>
        <div className="msg-dialog">
          <ul>
            {messages.map((msg, i) => (
              <li key={i}>
                <strong>{msg.user}</strong>
                {msg.message}
              </li>
            ))}
          </ul>
        </div>

        <div className="msg-sender">
          <input
            type="text"
            placeholder="Write here your text..."
            value={message}
            onChange={e => handleMessage(e)}
            onKeyDown={this.typeText}
            autoComplete="off"
          />
          <button>
            <i className="fas fa-chevron-up"></i>
          </button>
        </div>
        <div className="media-uploads">
          <div className="media-icons">
            <i className="fas fa-image"></i>
            <i className="fas fa-paperclip"></i>
            <span>GIF</span>
            <i className="far fa-smile"></i>
            <i className="fas fa-video"></i>
          </div>
          <div className="msg-options">
            <button onClick={e => sendMessage(e)}>Send</button>
            <i className="fas fa-ellipsis-h"></i>
          </div>
        </div>
      </div>
    );
  }
}
