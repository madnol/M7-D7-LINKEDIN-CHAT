import React, { Component } from "react";
import "../Messaging_Component/Messaging_Styles/MsgPage.scss";
import "../Messaging_Component/Messaging_Styles/MainMsg.scss";
import "../css/RightSide.scss";
import io from "socket.io-client";
import footericon from "../images/footericon.png";
import { withAuth0 } from "@auth0/auth0-react";
import MsgSideSocket from "./MsgSideSocket";
import MainMsgSocket from "./MainMsgSocket";

const connOpt = {
  transports: ["websocket", "polling"],
};

let socket = io("https://striveschool-api.herokuapp.com", connOpt);

class MsgPageSocket extends Component {
  state = {
    username: null,
    message: "",
    messages: [],
  };

  componentDidMount() {
    socket.on("bmsg", msg =>
      this.setState({ messages: this.state.messages.concat(msg) })
    );
    socket.on("connect", () => console.log("connected to socket"));
  }

  sendMessage = e => {
    e.preventDefault();
    console.log("send");
    console.log(this.state.message);
    if (this.state.message !== "") {
      socket.emit("bmsg", {
        from: this.state.username,
        text: this.state.message,
        to: this.state.messages.user,
      });

      this.setState({ message: "" });
    }
  };

  handleMessage = e => {
    this.setState({ message: e.target.value });
  };

  render() {
    return (
      <div id="msg-page">
        <div className="main-body">
          <MsgSideSocket />
          <MainMsgSocket
            username={this.state.username}
            message={this.state.message}
            handleMessage={e => this.handleMessage(e)}
            sendMessage={e => this.sendMessage(e)}
            messages={this.state.messages}
          />
        </div>
        <div id="footer-right" style={{ position: "sticky", top: "60px" }}>
          <div className="links-footer-right">
            <span>About</span>
            <span>Accessibility</span>
            <span>Help Center</span>
            <span>Privacy & Terms</span>
            <span>Ad Choices</span>
            <span>Advertising</span>
            <span>Business Services</span>
            <span>Get the LinkedIn app</span>
          </div>
          <p>More</p>
          <div className="linkedin-rights">
            <span>
              <img src={footericon} alt="" />
            </span>
            <span>Linkedin Corporation © 2020</span>
          </div>
        </div>
      </div>
    );
  }
}
export default withAuth0(MsgPageSocket);
