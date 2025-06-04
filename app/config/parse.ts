import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native';

// Configuração para React Native
Parse.setAsyncStorage(AsyncStorage);

// Inicialização do Parse
const PARSE_APPLICATION_ID = 'ZJpig0LsZU8TrWRixsHZ0CIeo4nRrM0J2vskcBbQ';
const PARSE_JAVASCRIPT_KEY = 'RfHXHSExmexhCCXJIs9FFSIz8emxpbPZJ2BeBbfM';

Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = 'https://parseapi.back4app.com/';

export default Parse; 