import React, {useState, useEffect, useCallback} from 'react';
import {AwesomeTextInput} from 'react-native-awesome-text-input';
import {View} from 'react-native';
import Style from './Style';
import ErrorMessage from '../ErrorMessage';
import CustomButton from '../CustomButton';
import colors from '../../../../constants/colors';
const Input = ({
  title,
  styleTitle,
  value,
  styleValue,
  onChangeText,
  error,
  secure,
  editable = true,
  styleInput,
  styleContainer,
  styleMainContainer,
  multiline,
  placeholder,
}) => {
  const [Secure, setSecure] = useState(secure);
  const [focus, setFocus] = useState({borderColor: '#e3e3e3'});
  const onFocus = useCallback(() => setFocus({borderColor: '#0388fc'}), []);
  const onBlur = useCallback(
    () => (error ? setFocus({borderColor: 'red'}) : setFocus({})),
    [error],
  );
  useEffect(onBlur, [onBlur]);

  return (
    <View style={[Style.MainContainer, styleMainContainer]}>
      <AwesomeTextInput
        style={[Style.Value, styleValue]}
        editable={editable}
        placeholder={placeholder}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholderTextColor={colors.TXT_PRIMARY_COLOR}
        multiline={multiline}
        label={title}
        customStyles={{
          container: {...Style.Container, ...styleContainer, ...focus},
          title: {...Style.Title, ...styleTitle},
          inputContainer: {...Style.Input, ...styleInput},
        }}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={Secure}
      />
      {secure && (
        <CustomButton
          style={Style.Btn}
          styleIcon={Style.Icon}
          onPress={() => {
            setSecure(!Secure);
          }}
          iconName={Secure ? 'eye' : 'eye-slash'}
        />
      )}
      {error && <ErrorMessage errorMsg={error} iconName="exclamation-circle" />}
    </View>
  );
};

export default Input;
