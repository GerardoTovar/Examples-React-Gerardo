/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import propiedades from '../../data/propiedades.json';
import CustomIcon from '../../components/atoms/CustomIcon';
import CustomButtom from '../../components/atoms/CustomButtom';
import CustomImage from '../../components/atoms/CustomImage';
import {CardContainer, CardContent, CardItem} from '../../styles/card';
import styles from './styles';
import CustomLikeBtn from '../../components/atoms/CustomLikeBtn';
const prop = propiedades;
const uidUser = '456321';

const Principal = ({navigation, route}) => {
  const [like, setLike] = useState(false);
  const handleLike = item => {
    if (item.like.includes(uidUser)) {
      item.like.splice(item.like.indexOf(uidUser), 1);
    } else {
      item.like.push(uidUser);
    }
    setLike(!like);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {prop.map((item, key) => (
          <CardContainer key={key}>
            <CustomImage name="star" size={15} color="#eeba00" text={item.startsScore} uri={item.img}/>
            <CardContent>
              <Text style={styles.text}>{item.name}</Text>
              <CustomIcon name="map-marker-outline" size={25} color="grey" text={item.location.address} styleText={styles.text2}/>
              <CardItem>
                <CustomIcon name="bed-king-outline" size={25} color="grey" text={item.space.rooms} styleText={styles.text}/>
                <CustomIcon name="shower" size={25} color="grey" text={item.space.bathroom} styleText={styles.text}/>
                <CustomIcon name="move-resize" size={25} color="grey" text={item.surface + ' ft²'} styleText={styles.text}/>
              </CardItem>
              <CardItem>
                <Text style={styles.text}>${item.cost}/m</Text>
                <CustomButtom name="heart-circle" size={35} color={item.like.includes(uidUser) ? 'red' : '#00b074'} onPress={() => handleLike(item)}/>
                <CustomLikeBtn isLiked = {item.like.includes(uidUser)} onLikePost={() => handleLike(item)} />
              </CardItem>
            </CardContent>
          </CardContainer>
        ))}
      </ScrollView>
    </View>
  );
};

export default Principal;
