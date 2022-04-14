import { Image, FlatList } from 'react-native';
import { Text, View } from '../Themed';
import styles from './styles';
import categories from '../../assets/data/categories';


interface HomeCategoryProps {
  category: {
    id: string,
    title: string,
    movies : {
      id: string,
      poster: string
    }[]
  }
  
}

const HomeCategory = (props: HomeCategoryProps) => {
  const { category } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category.title}</Text>
      
      <FlatList data={category.movies}
      renderItem={({item})=> (
        <Image style={styles.image} source={{uri: item.poster}} />
      )} 
      horizontal/>
    </View>
  );
}

export default HomeCategory;