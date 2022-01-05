import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { themeColor,useTheme } from 'react-native-rapi-ui';

export function IconButton({name,onPress,color}) {
  const { isDarkmode, setTheme } = useTheme();
  return (
 
    <MaterialCommunityIcons  name={name} color={color} size={52} style={{paddingHorizontal: 3}} onPress={onPress} />

  
  );
}

