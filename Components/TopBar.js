import * as React from "react";
import { Appbar } from "react-native-paper";

const TopBar = (props) => {
  const { handleRefresh } = props;

  return (
    <Appbar.Header style={{marginTop: 30}}>
      <Appbar.Content title="Sachit's Personal App" subtitle="Monitoring Resources"
          style={{
            textAlign: 'center',
            margin: 'auto',
          }}/>
      <Appbar.Action icon="refresh" onPress={handleRefresh} />
    </Appbar.Header>
  );
};

export default TopBar;