import { Provider } from 'mobx-react'
import React from 'react'
import { AuthProvider } from 'react-auth-kit'
import AppStore from './mobx/store';
import App from './App';

const Index = () => {
  return (
    <AuthProvider
    authType={'cookie'}
    authName={'_auth'}
    cookieDomain={window.location.hostname}
    cookieSecure={false}>
        <Provider AppStore = {AppStore}>
            <App></App>
        </Provider>
    </AuthProvider>
  )
}

export default Index