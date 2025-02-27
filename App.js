
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Изображение профиля */}
      <Image 
        source={require('./assets/image.jpg')}
        style={styles.profileImage} 
      />
      
      <Text style={styles.name}>Зейнолла Асылбек</Text>
      <Text style={styles.group}>Группа: cs-402</Text>
      
      <Text style={styles.email}>Email: zeynolla31@mail.ru</Text>
      
      <Text style={styles.hobby}>
        Хобби: Программирование, стриминг, гейминг.
      </Text>
      <Text style={styles.quote}>
        Цитата: "Они больше не делают баги, как Банни (Bugs Bunny)."
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  group: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  hobby: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#666',
    textAlign: 'center',
  },
});

export default App;