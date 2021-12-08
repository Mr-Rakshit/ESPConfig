import * as React from 'react';
import { TextInput } from 'react-native-paper';

const MyComponent = () => {
  const [text, setText] = React.useState('');

  return (
    <TextInput mode="outlined"
      label="Jar ID"
      value={text}
      onChangeText={text => setText(text)}
    />
  );
};

export default MyComponent;