import { StyleSheet, Text, View } from 'react-native';
import { bip39Generate } from 'react-native-wasm-crypto-test';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Result: {bip39Generate(24)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
