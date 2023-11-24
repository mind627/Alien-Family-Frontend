import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Settings from "./Settings";
import MainScreen from "./MainScreen";
import Logout from "./Logout";
import FamilyInfo from "./FamilyInfo";
import Lab from "./Lab";

const Drawer = createDrawerNavigator();

export default function MainDrawer({ navigation }) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MainScreen" component={MainScreen} />
      <Drawer.Screen name="FamilyInfo" component={FamilyInfo} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Logout" component={Logout} />
      <Drawer.Screen name="Lab" component={Lab} />
    </Drawer.Navigator>
  );
}