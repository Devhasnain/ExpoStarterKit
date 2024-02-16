import { StatusBar } from "expo-status-bar";
import React from "react";
import AppThemeProvider from "./components/ThemeProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Main from "./navigations/Main";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <AppThemeProvider>
          <StatusBar style="auto" />
          <SafeAreaProvider>
            <Main />
          </SafeAreaProvider>
        </AppThemeProvider>
      </Provider>
    </React.Fragment>
  );
}
