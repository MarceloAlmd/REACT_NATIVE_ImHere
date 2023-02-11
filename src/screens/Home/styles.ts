import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 22
  },
  eventName: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 48
  },
  eventDate: {
    color: '#a49e9e',
    fontWeight: 'bold',
    fontSize: 14,
  },
  input: {
    flex: 1,
    height: 56,
    borderRadius: 10,
    backgroundColor: '#1F1E25',
    padding: 12,
    fontSize: 16,
    marginRight: 12
  },
  buttonText: {
    color: '#FFFF',
    fontSize: 24
  },
  button: {
    height: 56,
    width: 56,
    borderRadius: 10,
    backgroundColor: '#31CF67',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 36,
    marginBottom: 42
  },
  emptyList: {
    fontSize: 16,
    textAlign: 'center'
  }
 
});
