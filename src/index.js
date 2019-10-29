import React from "react";
import ReactDOM from "react-dom";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import UserContext from "./UserContext";
import "./index.css";

class Root extends React.Component {
  state = {
    currentUser: null
  };

  handleLogin = user => {
    this.setState({ currentUser: user });
  };

  handleLogout = () => {
    this.setState({ currentUser: null });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state.currentUser,
          onLogout: this.handleLogout,
          onLogin: this.handleLogin
        }}
      >
        {this.state.currentUser ? <MainPage /> : <LoginPage />}
      </UserContext.Provider>
    );
  }
}

ReactDOM.render(<Root />, document.querySelector("#root"));
