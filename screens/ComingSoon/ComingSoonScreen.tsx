import { StyleSheet } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import styles from './styles';

const ComingSoonScreen = ({ navigation }: RootTabScreenProps<'Coming_Soon'>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coming Soon</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/ComingSoonScreen.tsx" />
    </View>
  );
}


export default ComingSoonScreen;