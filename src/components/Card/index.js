import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import CardList from './CardList'

const Card = ({repository, handleLikeRepository}) => {
  return (
    <View style={styles.repositoryContainer} > 
      <CardList 
        repository={repository} 
        handleLikeRepository={handleLikeRepository}
      />
    </View>
  );
}

export default Card;