import { Alert, Button, Image, Pressable, SafeAreaView, ScrollView, Text, TextInput, View, ViewBase } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

const App = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert(email, password);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image style={styles.logo} source={require('./assets/icon.jpg')} />
        <Text style={styles.title}>Seja Bem Vindo(a)</Text>
        <Text style={styles.subtitle}>Faça seu Login</Text>

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
            <Text style={styles.textButton}>Acessar</Text>
          </Pressable>
        </View>
      </ScrollView>

      <View style={styles.devArea}>
        <Text style={styles.devText}>Desenvolvido por Gabriel Sabatini</Text>
      </View>
    </SafeAreaView>

  );

}

export default App;