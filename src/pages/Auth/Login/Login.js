import React from "react";
import { View, Pressable, Text, ScrollView, ImageBackground} from "react-native";
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';

import Buttonn from '../../../components/Buttonn/Buttonn';
import Input from "../../../components/Input/Input";

import styles from './Login.style';

const initialFormValues = {
    usermail: '',
    password: '',
};

const Login = ({navigation}) => {

    const image = {uri: 'https://www1.chester.ac.uk/sites/default/files/styles/hero/public/Events%20Management%20festival%20image.jpg?itok=eJ3k-5R6'}


    const handleSignUp = () => {
        navigation.navigate('Sign')
    }
    const handleFormSubmit = async (formValues) => {
        try {
           await auth().signInWithEmailAndPassword(
                formValues.usermail.trim(),
                formValues.password,
            )
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <ImageBackground source={image} style={styles.image}>
            <ScrollView style={styles.container}>
        <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
            {({handleChange, handleSubmit, values }) => (
                <>
            <Input placeholder={'email'} value={values.usermail} onChangeText={handleChange('usermail')} IconName={'account-outline'}/>
            <Input placeholder={'password'} value={values.password} onChangeText={handleChange('password')} IconName={'account-key-outline'}/>
            <Buttonn title={"LOGİN"} onPress={handleSubmit} />
            </>
            )}
        </Formik>
        <View style={styles.register_container}>
            <Text style={styles.register_title}>You don't have an account ?</Text>
        <Pressable onPress={handleSignUp}>
            <Text style={styles.register_button}>Create</Text>
        </Pressable>
        </View>
        </ScrollView>
        </ImageBackground>

    )
}
export default Login;