import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AntDesing from "react-native-vector-icons/AntDesign";

const contactsMenuButtons = [
  {
    type: "starred",
    name: "Starred",
  },
  {
    type: "contact",
    name: "Tom Cruise",
    photo: require("../assets/Tom-Cruise.png"),
  },
  {
    type: "contact",
    name: "Ryan Reynolds",
    photo: require("../assets/RyanReynolds-2019_r.jpg"),
  },
  {
    type: "contact",
    name: "Tom Holland",
    photo: require("../assets/Tom-Holland.jpg"),
  },
];

export const ContactsMenu = () => {
  return (
    <View style={styles.container}>
      {contactsMenuButtons.map((contact, index) => (
        <View key={index} style={styles.row}>
          {contact.type == "starred" ? (
            <View style={styles.starredIcon}>
              <AntDesing name="star" size={30} color={"#efefef"} />
            </View>
          ) : (
            <Image source={contact.photo} style={styles.image} />
          )}
          <Text style={styles.text}>{contact.name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  starredIcon: {
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    color: "white",
    paddingLeft: 15,
    fontSize: 18,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 20,
  },
});
