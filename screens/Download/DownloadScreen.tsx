import { StyleSheet } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import styles from './styles';

const DownloadScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Downloads</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/DownloadScreen.tsx" />
    </View>
  );
}

export default DownloadScreen;
