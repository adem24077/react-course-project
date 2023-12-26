import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut({ signIn }) {
  return (
    <div>
      <Menu>
        <Button onClick={signIn} primary>
          Giriş Yap
        </Button>
        <Button primary style={{ margineLeft: "0.5em" }}>
          Kayıt Ol
        </Button>
      </Menu>
    </div>
  );
}
