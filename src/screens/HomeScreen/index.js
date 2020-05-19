import React , { useContext }from 'react';
import { View } from 'react-native';
import { Title } from 'react-native-paper';
import styles from './styles';
import FormButton from '../../components/FormButton';
import { AuthContext } from '../../navigation/AuthProvider';

export default function HomeScreen() {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Title>Home Screen</Title>
      <Title>All chat rooms will be listed here</Title>
      <Title>{user.uid}</Title>
      <FormButton 
        modeValue='contained' 
        title='Logout' 
        onPress={ () => logout()}
        />
    </View>
  );
}


  