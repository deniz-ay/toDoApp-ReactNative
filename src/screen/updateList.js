import React, { useState } from "react";
import { Text, View, SafeAreaView, Dimensions, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import Input from "../components/input";
import Button from "../components/Button";
import { updateItem } from "../actions";
const { width, height } = Dimensions.get("window");
// update item
const UpdateList = (props) => {
  const { item, index } = props.route.params;

  const [title, setTitle] = useState(item.title);
  const [dsc, setDsc] = useState(item.dsc);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#20232A" }}>
      <ScrollView contentContainerStyle={{flex:1}} >
      <View style={styles.addItemView}>
        <Input
          placeholder={"Title"}
          value={title}
          onChangeText={(value) => setTitle(value)}
        />
        <Input
          placeholder={"Description"}
          value={dsc}
          onChangeText={(value) => setDsc(value)}
          multiline
          style={{
            height: height * 0.2,
          }}
        />
        <Button
          text={"UPDATE"}
          onPress={() => {
            let obj = {
              title,
              dsc,
            };

            props.updateItem(obj, index);
            props.navigation.pop();
          }}
        />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  addItemView: {
    flex: 1,
    alignItems: "center",
    paddingTop: "5%",
  },
});

const mapStateToProps = ({ listResponse }) => {
  const { loading, lists } = listResponse;

  return { loading, lists };
};

export default connect(mapStateToProps, { updateItem })(UpdateList);
