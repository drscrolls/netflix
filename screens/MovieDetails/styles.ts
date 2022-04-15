import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      width: "100%",
      resizeMode: "cover",
      aspectRatio: 16/9
    },
    title: {
      fontSize: 24, 
      fontWeight: "bold"
    },
    match: {
        color: '#00aa00',
        fontWeight: "bold",
        marginRight: 15
    },
    ageContainer: {
      backgroundColor: 'yellow',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 2,
      paddingHorizontal: 3,
      marginRight: 15
    },
    age: {
      color: 'black',
      fontWeight: "bold",
      fontSize: 13
    },
    year: {
      color: '#757575',
      marginRight: 15
    },
    numberOfSeasons: {
      color: "#de3"
    },
    playButton: {
      backgroundColor: "white",
      borderRadius: 4,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: 'center',
      padding: 8
    },
    downloadButton: {
      backgroundColor: "#333",
      borderRadius: 4,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: 'center',
      padding: 8,
      marginTop: 5
    },
    plot: {
      marginVertical: 15
    },
    cast: {
      marginVertical: 5,
      color: '#757575',
    }
  });


export default styles;
  