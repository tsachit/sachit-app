import * as React from "react";
import { StyleSheet } from "react-native";
import { Card, Text, Paragraph } from "react-native-paper";

const CustomCard = (props) => {
  return (
    <React.Fragment>
      <Card style={styles.container}>
        <Card.Content style={{ flexDirection: "row" }}>
          <Paragraph style={{ marginTop: 15 }}>
            <Text style={{ fontWeight: "bold" }}>{props.title}</Text>
          </Paragraph>
        </Card.Content>
        <Card.Content>
          <Paragraph style={styles.content}>
            {props.content}
          </Paragraph>
        </Card.Content>
        <Card.Content style={styles.horizontalLine} />
      </Card>
    </React.Fragment>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  content: {
    marginTop: 10,
  },
  horizontalLine: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginHorizontal: 15,
    paddingVertical: 5,
  },
  action: { flexDirection: "row", paddingTop: 5 },
});


const htmlStyles = StyleSheet.create({
  div: {
    fontWeight: '300',
    color: '#FF3366',
    display: 'flex'
  },
});