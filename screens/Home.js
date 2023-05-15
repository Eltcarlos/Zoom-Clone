import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { MenuButtons } from "../components/MenuButtons";
import { ContactsMenu } from "../components/ContactsMenu";

export default function Home() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ height: "100%" }}>
        {/* Header */}
        <Header />
        {/* SearchBar */}
        <SearchBar />
        {/* Menu Buttons */}
        <MenuButtons />
        {/* Contacts Menu */}
        <ContactsMenu />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    padding: 15,
  },
});
