import { AntDesign } from '@expo/vector-icons';
import { Image, FlatList, Pressable } from 'react-native';
import { Episode } from '../../types';
import { Text, View } from '../Themed';
import styles from './styles';


interface EpisodeItemProps {
  episode: Episode,
  onPress: (episode: Episode) => {}
  
}

const EpisodeItem = (props: EpisodeItemProps) => {
  const { episode, onPress } = props;

  return (
    <Pressable style={styles.container} onPress={() => onPress(episode)}>
       <View style={{flexDirection: "row", width: "100%", justifyContent: "space-between"}}>

          <View style={{flexDirection: "row"}}>
            <Image style={styles.image} source={{uri: episode.poster}}/>
            <View style={{justifyContent: "center", marginLeft: 10}}>
              <Text style={styles.title}>{episode.title}</Text>
              <Text style={styles.duration}>{episode.duration}</Text>
            </View>
          </View>

          <Pressable style={styles.downloadButton} onPress={() => {console.warn("Pressed Download")}}>
            <AntDesign name="download" size={16} color="gray" />
          </Pressable>

       </View>
       <Text style={styles.plot}>{episode.plot}</Text>
    </Pressable>
  );

}

export default EpisodeItem;