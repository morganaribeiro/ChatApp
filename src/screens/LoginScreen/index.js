import React, { useState , useContext } from 'react';
import { View } from 'react-native';
import { Title } from 'react-native-paper';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import styles from './styles';
import { AuthContext } from '../../navigation/AuthProvider';

export default function LoginScreen({ navigation }) {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    
    return (
        <View style={styles.container}>
            <Title style={styles.titleText}>Welcome to Chat App</Title>
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
                onChangeText={userPassword => setpassword(userPassword)}
            />
            <FormButton 
                title='Login'
                modeValue='contained'
                labelStyle={styles.loginButtonLabel}
                onPress= { () => login(email, password)}
            />
            <FormButton 
                title="New user? Join Here"
                modeValue='text'
                upperCase={false}
                labelStyle={styles.navButtonText}
                onPress={() => navigation.navigate('Signup')}
            />
            </View>
        );

}