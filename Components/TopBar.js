import * as React from "react";
import { Appbar } from "react-native-paper";

const TopBar = () => (
  <Appbar.Header>
    <Appbar.Content title="Sachit's Personal App" subtitle="Monitoring Resources"
        style={{
          textAlign: 'center',
          margin: 'auto'
        }}/>
  </Appbar.Header>
);

export default TopBar;