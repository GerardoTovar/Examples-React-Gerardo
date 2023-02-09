import React, {useState, useEffect, useCallback} from 'react';
import {AwesomeTextInput} from 'react-native-awesome-text-input';
import {StyleProp, TextStyle, View, ViewStyle} from 'react-native';
import Style from './Style';
import ErrorMessage from '../ErrorMessage';
import CustomButton from '../CustomButton';
import colors from '../../../../constants/colors';
interface IAwesomeTextInput {
  title?: string;
  styleTitle?: TextStyle;
  value?: string;
  styleValue?: StyleProp<TextStyle>;
  onChangeText?: (text: string) => void;
  error?: string;
  secure?: boolean;
  editable?: boolean;
  styleInput?: ViewStyle;
  styleContainer?: ViewStyle;
  styleMainContainer?: StyleProp<ViewStyle>;
  multiline?: boolean;
  placeholder?: string;
}

const Input = ({
  title,
  styleTitle,
  value,
  styleValue,
  onChangeText,
  error,
  secure = false,
  editable = true,
  styleInput,
  styleContainer,
  styleMainContainer,
  multiline = false,
  placeholder,
}: IAwesomeTextInput) => {
  const [Secure, setSecure] = useState(secure);
  const [focus, setFocus] = useState({borderColor: '#e3e3e3'});
  const onFocus = useCallback(() => setFocus({borderColor: '#0388fc'}), []);
  const onBlur = useCallback(
    () => (error ? setFocus({borderColor: 'red'}) : setFocus({} as any)),
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
        placeholderTextColor={colors.BTN_TXT_PRIMARY_COLOR}
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
