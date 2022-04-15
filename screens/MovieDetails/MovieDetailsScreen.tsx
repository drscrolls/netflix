import { StyleSheet, Image, FlatList, Pressable } from 'react-native';
import { Text, View } from '../../components/Themed';
import styles from './styles';
import { MaterialIcons, Feather, FontAwesome5, AntDesign } from '@expo/vector-icons';
import movie from '../../assets/data/movie';
import EpisodeItem from '../../components/EpisodeItem';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import VideoPlayer from '../../components/VideoPlayer';

const firstSeason = movie.seasons.items[0];
const firstEpisode = firstSeason.episodes.items[0];


const MovieDetailsScreen = () => {

  const [currentSeason, setCurrentSeason] = useState(firstSeason);
  const [currentEpisode, setCurrentEpisode] = useState(firstSeason.episodes.items[0]);
  
  const seasonNames = movie.seasons.items.map(season => season.name);
  
  return (
    <View style={styles.container}>

      <VideoPlayer episode={currentEpisode}/>
      {/* <Image style={styles.image} source={{ uri: firstEpisode.poster }} /> */}


      <FlatList
        data={currentSeason.episodes.items}
        renderItem={({ item }) => <EpisodeItem episode={item} onPress={(episode)=> {
          console.log(episode); 
          setCurrentEpisode(episode)
        }} />}
        ListHeaderComponent={(
          <View>

            <View style={{ padding: 12 }}>
              <Text style={styles.title}>{movie.title}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.match}>98% match</Text>
                <Text style={styles.year}>{movie.year}</Text>
                <View style={styles.ageContainer}>
                  <Text style={styles.age}>12+</Text>
                </View>
                <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
                <MaterialIcons name="hd" size={24} color="grey" />
              </View>
            </View>

            <Pressable style={styles.playButton} onPress={() => { console.warn("Pressed play") }}>
              <FontAwesome5 name="play" size={16} color="black" />
              <Text style={{ color: "black", fontWeight: "bold", paddingLeft: 10, fontSize: 16 }}>Play</Text>
            </Pressable>

            <Pressable style={styles.downloadButton} onPress={() => { console.warn("Pressed Download") }}>
              <AntDesign name="download" size={16} color="white" />
              <Text style={{ color: "white", fontWeight: "bold", paddingLeft: 10, fontSize: 16 }}>Download</Text>
            </Pressable>

            <Text style={styles.plot}>{movie.plot}</Text>
            <Text style={styles.cast}>Cast: {movie.cast}</Text>
            <Text style={styles.cast}>Creator: {movie.creator}</Text>


            <View style={{ flexDirection: "row", marginVertical: 10 }}>
              <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                <AntDesign name="plus" size={20} color="white" />
                <Text style={{ color: 'darkgrey', marginTop: 5 }}>My List</Text>
              </View>
              <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                <FontAwesome5 name="thumbs-up" size={20} color="white" />
                <Text style={{ color: 'darkgrey', marginTop: 5 }}>Rate</Text>
              </View>
              <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                <AntDesign name="sharealt" size={20} color="white" />
                <Text style={{ color: 'darkgrey', marginTop: 5 }}>Share</Text>
              </View>
            </View>

            <Picker
              selectedValue={currentSeason.name}
              onValueChange={(itemValue, itemIndex) =>{
                setCurrentSeason(movie.seasons.items[itemIndex])
              }}
              dropdownIconColor={"white"}
              style={{ color: 'white', width: 140}}>
                 {
                    seasonNames.map(seasonName => (
                    <Picker.Item label={seasonName} value={seasonName} key={seasonName}/>
                 ))
                }
                </Picker>

          </View>
        )}
      />



    </View>
  );
}

export default MovieDetailsScreen;