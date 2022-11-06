import React, {useRef, useEffect} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Styles from './Styles';
import LottieView from 'lottie-react-native';

const CustomLikeBtn = ({isLiked = false, onLikePost = () => {}}) => {
  const animation = useRef(null);
  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      if (isLiked) {
        animation.current.play(66, 66);
      } else {
        animation.current.play(19, 19);
      }
      isFirstRun.current = false;
    } else if (isLiked) {
      animation.current.play(19, 50);
    } else {
      animation.current.play(0, 19);
    }
  }, [isLiked]);
  const Component = (
    <View style={Styles.actions}>
      <TouchableOpacity onPress={onLikePost}>
        {/* https://lottiefiles.com/44921-like-animation */}
        <LottieView
          ref={animation}
          style={Styles.heartLottie}
          source={require('../../../assets/lottie/like.json')}
          autoPlay={false}
          loop={false}
        />
      </TouchableOpacity>
    </View>
  );
  return Component;
};

export default CustomLikeBtn;
