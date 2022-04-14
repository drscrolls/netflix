import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image : {
      width: 100,
      height: 150,
      resizeMode: 'cover',
      borderRadius: 5,
      margin: 2,
      marginRight: 3
    },
    title:  {
      fontSize: 19,
      fontWeight: "bold",
      // marginLeft: 15,
      marginBottom: 5,
      color: "#ccc"

    }
  });


export default styles;
  