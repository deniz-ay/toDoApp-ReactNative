import React, { useState, version, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import Input from "../components/input";
import Button from "../components/Button";
import { useDispatch, useSelector, connect } from "react-redux";

import { deleteItem } from "../actions";
import { Icon } from "native-base";

const { width, height } = Dimensions.get("window");

//list items

const List = (props) => {
  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate("updateList", {
          item: item,
          index: index,
        })
      }
    >
      <View style={styles.item}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.dsc}>{item.dsc}</Text>
        </View>
        <View>
          <Icon
            type="Entypo"
            name="trash"
            style={{ color: "white" }}
            onPress={() => {
              props.deleteItem(index);
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#20232A" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <FlatList
          data={props.lists}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "2%",
                }}
              >
                <View
                  style={{
                    width: "85%",
                    height: 1,
                    backgroundColor: "#f79e04",
                  }}
                ></View>
              </View>
            );
          }}
          ListEmptyComponent={() => {
            return (
              <View
                style={{ alignItems: "center", paddingTop: "10%", height: 350 }}
              >
                <Text
                  style={{
                    color: "#61DAFB",
                    fontSize: 18,
                    marginBottom: "10%",
                  }}
                >
                  Listeniz Boş !!
                </Text>
                <Button
                  text={"Add Item"}
                  onPress={() => props.navigation.navigate("addList")}
                />
              </View>
            );
          }}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  addItemView: {
    flex: 1,
    alignItems: "center",
    paddingTop: "5%",
    marginTop: 20,
  },
  item: {
    marginLeft: 10,
    borderLeftWidth: 5,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: "#61DAFB",
    marginBottom: 5,
    height: height * 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  dsc: {
    fontSize: 16,
    color: "#868686",
  },
});

const mapStateToProps = ({ listResponse }) => {
  const { lists } = listResponse;
  return { lists };
};

export default connect(mapStateToProps, { deleteItem })(List);
