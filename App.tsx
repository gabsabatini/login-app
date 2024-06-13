import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { Login } from "./components/Login";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image style={styles.logo} source={require('./assets/icon.jpg')} />
        <Text style={styles.title}>Seja Bem Vindo(a)</Text>
        <Text style={styles.subtitle}>Faça seu Login</Text>
        <Login />
      </ScrollView>

      <View style={styles.devArea}>
        <Text style={styles.devText}>Desenvolvido por Gabriel Sabatini</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;