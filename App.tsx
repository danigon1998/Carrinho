import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/app.routes";
import AppProvider from "./src/context/appContext";

export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
}