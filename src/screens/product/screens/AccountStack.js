
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
const Stack = createNativeStackNavigator();

import Account from "./Account";
import EditProfile from "./EditProfile";
import DonHang from "./DonHang";

const AccountStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="DonHang" component={DonHang} />

    </Stack.Navigator>
  )
}

export default AccountStack;