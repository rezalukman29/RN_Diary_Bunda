import React from 'react';

import { MaterialIcons  } from '@expo/vector-icons';
import { themeColor,useTheme } from 'react-native-rapi-ui';

export function IconArrow({name,onPress,color}) {
  const { isDarkmode, setTheme } = useTheme();
  return (
 
      <MaterialIcons   name={name} color={isDarkmode? themeColor.white : themeColor.black200} size={20} style={{top: 3}} onPress={onPress} />
  
  );
}

