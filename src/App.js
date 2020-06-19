import React, {useState, useEffect} from "react";

import {
  SafeAreaView,  
  FlatList,
  StatusBar,   
} from "react-native";
import api from './services/api';
import styles from './styles';
import Card from './components/Card';

export default function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data);      
    });
  },[]);

  async function handleLikeRepository(id) {
    const {data} = await api.post(`repositories/${id}/like`);

    const likeNewRepository = repositories.map(repository => 
      repository.id === id ? { ...repository, likes: data.likes } : repository
    );
    setRepositories(likeNewRepository)
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

      <SafeAreaView style={styles.container}>      
          <FlatList 
            data={repositories}
            keyExtractor={repository => repository.id}
            renderItem={({item})=>(
              <Card 
                repository={item}
                handleLikeRepository={handleLikeRepository}
              />
            )}
          />   
      </SafeAreaView>
    </>
  );
}
