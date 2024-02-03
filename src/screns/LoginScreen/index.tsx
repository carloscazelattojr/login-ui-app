import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInUp, FadeInDown } from 'react-native-reanimated';

import { styles } from './styles';

import imgTop from '../../assets/images/background.png';
import imgLight from '../../assets/images/light.png';
import { useNavigation } from '@react-navigation/native';

export function LoginScreen() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Image source={imgTop} style={styles.imageBG} />
            <View style={styles.contentTop}>
                <Animated.Image
                    entering={FadeInUp.delay(200).duration(1000).springify().damping(5)}
                    source={imgLight}
                    style={styles.imgLight1}
                />
                <Animated.Image
                    entering={FadeInUp.delay(400).duration(1000).springify().damping(5)}
                    source={imgLight}
                    style={styles.imgLight2}
                />
            </View>

            {/* Titulo e Formulário */}
            <View style={styles.main}>

                {/* Login */}
                <View style={styles.login}>
                    <Animated.Text
                        entering={FadeInUp.duration(1000).springify()}
                        style={styles.loginText}>Login
                    </Animated.Text>
                </View>

                {/* Formulario */}
                <View style={styles.form}>

                    <Animated.View
                        entering={FadeInDown.duration(1000).springify()}
                        style={styles.formInputArea}>
                        <TextInput placeholder='E-mail' placeholderTextColor={'gray'} />
                    </Animated.View>

                    <Animated.View
                        entering={FadeInDown.delay(200).duration(1000).springify()}
                        style={styles.formInputArea}>
                        <TextInput placeholder='senha' placeholderTextColor={'gray'} secureTextEntry />
                    </Animated.View>

                    <Animated.View
                        entering={FadeInDown.delay(400).duration(1000).springify()}
                        style={styles.formButtonArea}>
                        <TouchableOpacity style={styles.formButton}>
                            <Text style={styles.formButtonText}>Login</Text>
                        </TouchableOpacity>
                    </Animated.View>

                    <Animated.View
                        entering={FadeInDown.delay(600).duration(1000).springify()}
                        style={styles.formFooter}>
                        <Text>Não possui cadastro ?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Singup')}>
                            <Text style={styles.formFooterSingup} >Cadastrar</Text>
                        </TouchableOpacity>
                    </Animated.View>


                </View>
            </View>
        </View >
    );
}