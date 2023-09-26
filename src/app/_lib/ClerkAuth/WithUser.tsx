import { WithUser } from "@clerk/clerk-react";
import React from "react";

export default class Greeting extends React.Component {
  render() {
    return (
      <WithUser>
        {(user) => (
          <div>
            {user.firstName ? `Hello, ${user.firstName}!` : "Hello there!"}
          </div>
        )}
      </WithUser>
    );
  }
}
