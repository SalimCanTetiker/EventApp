import React from "react";
import { View, Pressable, Text, ScrollView, ImageBackground} from "react-native";
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';

import Buttonn from '../../../components/Buttonn/Buttonn';
import Input from "../../../components/Input/Input";

import styles from './Sign.style';

const initialFormValues = {
    usermail: string = '',
    password: '',
    repassword: '',
}

const Sign = ({navigation}) => {

    const image = {uri: 'https://www1.chester.ac.uk/sites/default/files/styles/hero/public/Events%20Management%20festival%20image.jpg?itok=eJ3k-5R6'}

    const handleForm = async (formValues) => {
        if (formValues.password !== formValues.repassword){
            console.log('error');
            return;
    }
        
        try {
            await auth().createUserWithEmailAndPassword(
                formValues.usermail.trim(),
                formValues.repassword,
            );
            navigation.navigate('Login');  
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <ImageBackground source={image} style={styles.image}>
            <ScrollView style={styles.container}>
        <Formik initialValues={initialFormValues} onSubmit={handleForm}>
            {({handleChange, handleSubmit, values }) => (
                <>
            <Input placeholder={'email giriniz'} value={values.usermail} onChangeText={handleChange('usermail')} IconName={'account-outline'} />
            <Input placeholder={'password'} value={values.password} onChangeText={handleChange('password')} IconName={'account-key-outline'} />
            <Input placeholder={'repassword'} value={values.repassword} onChangeText={handleChange('repassword')} IconName={'account-key-outline'} />
            <Buttonn title="SİGN UP" onPress={handleSubmit} />
            </>
        )}
        </Formik>  
        <View style={styles.register_container}>
            <Text style={styles.register_title}>Have you registered before ?</Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
                <Text style={styles.register_button}>Login</Text>
            </Pressable>
            </View>
            </ScrollView>
        </ImageBackground>
    )
}
export default Sign;