import React, { useState , useContext } from 'react';
import { View , Button } from 'react-native';
import { Title } from 'react-native-paper';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import styles from './styles';
import { AuthContext } from '../../navigation/AuthProvider';

export default function SignupScreen({ navigation : {goBack }}) {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>Register to Chat</Title>
      <FormInput
        labelName='Email'
        value={email}
        autoCapitalize='none'
        onChangeText={userEmail => setEmail(userEmail)}
      />
      <FormInput
        labelName='Password'
        value={password}
        secureTextEntry={true}
        onChangeText={userPassword => setPassword(userPassword)}
      />
      <FormButton
        title='SignUp'
        modeValue='contained'
        labelStyle={styles.loginButtonLabel}
        onPress={() => register(email,password)}
      />
      <View style={{ marginTop: 30}}> 
      <Button
        title="Go back from ProfileScreen"
        backgroundColor="#3b5998"
        onPress={() => goBack()}
        // onPress= {() => navigation.goBack()}
      />
      </View>
    </View>
  );
}
