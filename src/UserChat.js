import React, { Component } from "react";
import "./App.css"; // Ensure this is present to pull in styles

class UserChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serverUrl: "ws://shoe-chat-server.com",
      category: "Nike",
      message: "",
      isOpen: false,
    };
    console.log("✅ Constructor: Chat initialized with server:", this.state.serverUrl);
  }

  componentDidMount() {
    console.log(`📡 componentDidMount: Connecting to ${this.state.serverUrl} for ${this.state.category} shoes...`);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.category !== this.state.category) {
      console.log(`🔄 Category changed from ${prevState.category} to ${this.state.category}. Reconnecting...`);
    }
    if (prevState.serverUrl !== this.state.serverUrl) {
      console.log(`🔄 Server changed from ${prevState.serverUrl} to ${this.state.serverUrl}. Reconnecting...`);
    }
  }

  componentWillUnmount() {
    console.log("❌ Chat closed. Disconnected from server.");
  }

  handleCategoryChange = (e) => {
    this.setState({ category: e.target.value });
  };

  handleMessageChange = (e) => {
    this.setState({ message: e.target.value });
  };

  handleSendMessage = () => {
    if (this.state.message.trim() !== "") {
      console.log(`💬 New Chat Request in ${this.state.category} category: "${this.state.message}"`);
      this.setState({ message: "" });
    }
  };

  toggleChat = () => {
    this.setState((prev) => ({ isOpen: !prev.isOpen }));
  };

  render() {
    return (
      <div className="user-chat-container">
        {this.state.isOpen ? (
          <div className="chat-window">
            <h3>User Marketplace Chat 👟</h3>
            <label>Select Shoe Brand:</label>
            <select value={this.state.category} onChange={this.handleCategoryChange}>
              <option value="Nike">Nike</option>
              <option value="Adidas">Adidas</option>
              <option value="Puma">Puma</option>
              <option value="Reebok">Reebok</option>
              <option value="Jordan">Air Jordan</option>
              <option value="Converse">Converse</option>
            </select>
            <textarea
              placeholder="Type your message..."
              value={this.state.message}
              onChange={this.handleMessageChange}
            />
            <button onClick={this.handleSendMessage}>Send</button>
            <button onClick={this.toggleChat} style={{ background: "red" }}>
              Close
            </button>
          </div>
        ) : (
          <button className="open-chat-btn" onClick={this.toggleChat}>
            💬 Chat
          </button>
        )}
      </div>
    );
  }
}

export default UserChat;