import { Text, View, TextInput, Alert, Pressable } from "react-native";
import { styles } from "../styles";
import { useState } from "react";

export const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert(email, password);
  }

  return (
    <View style={styles.inputArea}>
      <TextInput
        style={styles.input}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder="Senha"
        secureTextEntry
        onChangeText={setPassword}
      />
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.textButton}>poise</Text>
      </Pressable>
    </View>
  );

}