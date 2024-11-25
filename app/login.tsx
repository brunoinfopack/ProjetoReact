import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import TextField from '@/components/input/TextField';
import { useState } from 'react';
import { router } from 'expo-router';

export default function LoginScreen() {
    const [inputUser, setInputUser] = useState<string>("");
    const [inputPassword, setInputPassword] = useState<string>("");
    const [inputUserFeedback, setInputUserFeedback] = useState<string>("");
    const [inputPasswordFeedback, setInputPasswordFeedback] = useState<string>("");

    const loginSubmit = () => {
        setInputUserFeedback("");
        setInputPasswordFeedback("");
        if (inputUser && inputPassword) {
            router.push('/(private)');
        } else {
            if (!inputUser) setInputUserFeedback("Preencha este campo.");
            if (!inputPassword) setInputPasswordFeedback("Preencha este campo.");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('@/assets/logo.png')} style={styles.logo} />
            </View>
            <View style={styles.card}>
                <Text style={styles.title}>Bem-vindo!</Text>
                <Text style={styles.subtitle}>Acesse sua conta para continuar</Text>
                <TextField
                    placeholder="Usuário"
                    value={inputUser}
                    onChangeText={setInputUser}
                    feedback={inputUserFeedback}
                />
                <TextField
                    placeholder="Senha"
                    value={inputPassword}
                    onChangeText={setInputPassword}
                    feedback={inputPasswordFeedback}
                    isPassword
                />
                <Pressable style={styles.button} onPress={loginSubmit}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e9ecef',
        padding: 20,
    },
    logoContainer: {
        marginBottom: 30,
        alignItems: 'center',
    },
    logo: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },
    card: {
        width: '100%',
        maxWidth: 400,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 25,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333333',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#555555',
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    forgotPassword: {
        marginTop: 10,
        alignSelf: 'flex-end',
    },
    forgotPasswordText: {
        color: '#007bff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});
