import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

export default function App() {
  const products = [
    { id: 1, name: "Brimstone"},
    { id: 2, name: "Viper"},
    { id: 3, name: "Omen"},
    { id: 4, name: "Killjoy"},
    { id: 5, name: "Cypher"},
    { id: 6, name: "Sova"},
    { id: 7, name: "Sage"},
    { id: 8, name: "Phoenix"},
    { id: 9, name: "Jett"},
    { id: 10, name: "Reyna"},
    { id: 11, name: "Raze"},
    { id: 12, name: "Breach"},
    { id: 13, name: "Skye"},
    { id: 14, name: "Yoru"},
    { id: 15, name: "Astra"},
    { id: 16, name: "KAY/O"},
    { id: 17, name: "Chamber"},
    { id: 18, name: "Neon"},
    { id: 19, name: "Fade"},
    { id: 20, name: "Harbor"},
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.topic}>รายชื่อ Agents ใน Valorant</Text>
        <Text style={styles.discription}>( 20 Agents )</Text>
      </View>
      <ScrollView contentContainerStyle={styles.body}>
        {products.map((p) => (
          <View style={styles.card} key={p.id}>
            <Text style={styles.index}>Agent {p.id}</Text>
            <Text style={styles.title}>{p.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "black",
  },
  topic: {
    fontSize: 25,
    fontWeight: "700",
    color: "#fff",
    paddingTop: 20,
    paddingHorizontal: 20,
    marginBottom: 8,
    textAlign: "center",
  },
  discription: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",
  },
  body: {
    backgroundColor: "#e3e3e3",
    paddingTop: 50,
    paddingBottom: 50,
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 30,
    justifyContent: "center",
    minHeight: "100%",
  },
  card: {
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    padding: 16,
    width: 300,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  index: {
    fontSize: 18,
    fontWeight: "800",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
    color: "#616167ff",
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    color: "#68686bff",
  },
});