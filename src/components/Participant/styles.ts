import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F1E25',
    width: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10

  },
  name: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    marginLeft: 16
  },
  buttonText: {
    color: '#FFFF',
    fontSize: 24
  },
  button: {
    height: 56,
    width: 56,
    borderRadius: 10,
    backgroundColor: '#E23C44',
    justifyContent: 'center',
    alignItems: 'center'
  }
});