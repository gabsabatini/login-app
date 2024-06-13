import { Text, View, TextInput, Alert, Pressable } from "react-native";
import { styles } from "../styles";
import { useState } from "react";

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isValid = email && password;

    const handleLogin = () => {
        {isValid && Alert.alert(email, password)}
    }

    return (
        <View style={styles.inputArea}>
            <TextInput
                style={styles.input}
                value={email}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#ccc"
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                value={password}
                placeholder="Senha"
                placeholderTextColor="#ccc"
                secureTextEntry
                onChangeText={setPassword}
            />
            <Pressable style={[styles.button, !isValid && styles.buttonDisabled]} onPress={handleLogin}>
                <Text style={styles.textButton}>Acessar</Text>
            </Pressable>
        </View>
    );
}