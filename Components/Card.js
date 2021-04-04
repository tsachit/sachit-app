import * as React from "react";
import { StyleSheet } from "react-native";
import { Card, Text, Paragraph } from "react-native-paper";
import { Row, Grid } from "react-native-easy-grid";

const CustomCard = (props) => {
  const { title, content } = props;

  const displayObject = () => {
    return (
      <Grid>
        {content.map(row => (
          <Row>
            {row.map(cell => <Text style={{ width: 'auto', minWidth: (row.length > 3 ? 50 : 100)}}>{cell}</Text>)}
          </Row>
        ))}
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Card style={styles.container}>
        <Card.Content>
          <Paragraph>
            <Text style={{ fontWeight: "bold" }}>{title}</Text>
          </Paragraph>
          <Paragraph style={typeof content === 'object' ? styles.tableContent : styles.content}>
            {typeof content === 'object' ? displayObject() : content}
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
    margin: 10
  },
  content: {
    marginBottom: 10,
  },
  tableContent: {
    paddingTop: 100
  },
  horizontalLine: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginHorizontal: 25,
    paddingVertical: 5,
  },
  action: { flexDirection: "row", paddingTop: 5 }
});
