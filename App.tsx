import React from 'react'
import AppRoutes from './src/navigation/RootNavigator'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import { ThemeProvider } from './src/theme/ThemeProvider'
import Toast from 'react-native-toast-message'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppRoutes />
        <Toast />
      </ThemeProvider>
    </Provider>
  )
}

export default App