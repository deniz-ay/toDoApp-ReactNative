import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import Input from "../components/input";
import Button from "../components/Button";

import { addItem } from "../actions";
const { width, height } = Dimensions.get("window");

// add item on the list
// listeye eleman ekle

const addList = (props) => {
  const [title, setTitle] = useState("");
  const [dsc, setDsc] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#20232A" }}>
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
          text={"ADD"}
          onPress={() => {
            let obj = {
              title,
              dsc,
            };
            props.navigation.pop();
            props.addItem(obj);
          }}
        />
        {props.loading && <ActivityIndicator size="large" />}
      </View>
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
  const {} = listResponse;

  return {};
};

export default connect(mapStateToProps, { addItem })(addList);
