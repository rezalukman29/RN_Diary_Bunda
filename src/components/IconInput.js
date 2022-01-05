import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { themeColor,useTheme } from 'react-native-rapi-ui';

export function IconInput({name,onPress,color}) {
  const { isDarkmode, setTheme } = useTheme();
  return (
 
      <MaterialCommunityIcons  name={name} color={color} size={30} style={{paddingHorizontal: 6}} onPress={onPress} />
  
  );
}

