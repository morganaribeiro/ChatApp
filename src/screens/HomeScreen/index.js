import React , { useContext , useState , useEffect}from 'react';
import { View , FlatList } from 'react-native';
import { List, Divider } from 'react-native-paper';
import styles from './styles';
import Loading from '../../components/Loading';
// import FormButton from '../../components/FormButton';
// import { AuthContext } from '../../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';

export default function HomeScreen() {
  // const { user, logout } = useContext(AuthContext);
  const [threads, setThreads] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('THREADS')
      .onSnapshot(querySnapshot => {
        const threads = querySnapshot.docs.map(documentSnapshot => {
          return {
            _id: documentSnapshot.id,
            // give defaults
            name: '',
            ...documentSnapshot.data()
          };
        });

        setThreads(threads);

        if (loading) {
          setLoading(false);
        }
      });

    /**
     * unsubscribe listener
     */
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Loading />;
  }

  // ...rest of the component

  return (
    // <View style={styles.container}>
    //   <Title>Home Screen</Title>
    //   <Title>All chat rooms will be listed here</Title>
    //   <Title>{user.uid}</Title>
    //   <FormButton 
    //     modeValue='contained' 
    //     title='Logout' 
    //     onPress={ () => logout()}
    //     />
    // </View>

    /**
     * Listing data from the Firestore THREADS collection
     */
    <View style={styles.container}>
        <FlatList
        data={threads}
        keyExtractor={item => item._id}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => (
          <List.Item
            title={item.name}
            description='Item description'
            titleNumberOfLines={1}
            titleStyle={styles.listTitle}
            descriptionStyle={styles.listDescription}
            descriptionNumberOfLines={1}
            />
          )}
        />
    </View>
  );
}


  