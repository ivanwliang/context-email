import React from "react";
import { FAKE_USER } from "./api";

let UserContext;
const { Provider, Consumer } = (UserContext = React.createContext());

class UserProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: FAKE_USER,
      onLogout: this.handleLogout,
      onLogin: this.handleLogin
    };
  }

  handleLogin = user => {
    this.setState({ currentUser: user });
  };

  handleLogout = () => {
    this.setState({ currentUser: null });
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { UserProvider, Consumer as UserConsumer, UserContext };
