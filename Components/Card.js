import * as React from "react";
import { Text, View, StyleSheet } from 'react-native';
import { Card } from "react-native-paper";

const CustomCard = (props) => {
  const { title, content } = props;

  return (
    <React.Fragment>
      <Card style={styles.container}>
        <Card.Content>
          <View>
            <Text style={{ fontWeight: "bold" }}>{title}</Text>
          </View>
          <View style={styles.content}>
            { typeof content === 'string' ? <Text>{content}</Text> : content.map((row) => (
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                {row.map((cell) => <Text style={{flex: 1}}>{cell}</Text> )}
              </View>
            ))}
          </View>
        </Card.Content>
        <Card.Content style={styles.horizontalLine} />
      </Card>
    </React.Fragment>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  content: {
    marginVertical: 10,
  },
  horizontalLine: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginHorizontal: 25,
    paddingVertical: 5,
  },
  action: { flexDirection: "row", paddingTop: 5 }
});
