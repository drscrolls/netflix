import { AntDesign } from '@expo/vector-icons';
import { Video } from 'expo-av';
import { Playback } from 'expo-av/build/AV';
import { useRef, useState } from 'react';
import { Image, FlatList, Pressable } from 'react-native';
import { Episode } from '../../types';
import { Text, View } from '../Themed';
import styles from './styles';


interface VideoPlayerProps {
  episode: Episode
}

const VideoPlayer = (props: VideoPlayerProps) => {
  const { episode } = props;
  const [status, setStatus] = useState({});

  const video = useRef(null);

  // const handleVideoRef = (component: Playback) => {
  //   const playbackObject = component;
  //   console.log(playbackObject);
   
  //   const source = {
  //     uri: episode.video
  //   };

  //   const initialStatus = {

  //   };
  //   playbackObject.loadAsync( source, initialStatus, false );
  // }
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: episode.video,
        }}
        posterSource={{
          uri: episode.poster
        }}
        usePoster={true}
        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
  );

}

export default VideoPlayer;