import React, { PureComponent } from "react";

export default class MsgSideSocket extends PureComponent {
  render() {
    return (
      <div id="msg-side">
        <header>
          <p>Messaging</p>
          <div className="icons-msg">
            <ion-icon name="create-outline"></ion-icon>
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </header>
        <div className="msg-side-body">
          <input type="text" placeholder="Search Messages" />
          <div className="msg-container"></div>
          <button>Start a new message</button>
        </div>
      </div>
    );
  }
}
