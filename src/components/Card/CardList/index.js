import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const CardList = ({repository, handleLikeRepository}) => {
  const techs = repository.techs || [];  

  return (
    <View> 

      <Text style={styles.repository}>{repository.title}</Text>  

      <View style={styles.techsContainer}>   
        {techs.map((tech) =>
          <Text key={tech} style={styles.tech}>
            {tech}
          </Text>   
        )}
      </View>  

      <View style={styles.likesContainer}>
        <Text
          style={styles.likeText}
          // Remember to replace "1" below with repository ID: {`repository-likes-${repository.id}`}
          testID={`repository-likes-${repository.id}`}
        >
          {`${repository.likes} curtidas`}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleLikeRepository(repository.id)}
        // Remember to replace "1" below with repository ID: {`like-button-${repository.id}`}
        testID={`like-button-${repository.id}`}
      >
        <Text style={styles.buttonText}>Curtir</Text>
      </TouchableOpacity>  
      
    </View>  
  )  
}

export default CardList;