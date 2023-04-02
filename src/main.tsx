import { AuthProvider } from 'react-auth-kit'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import './assets/css/app.css'
import ScrollToTop from './base-components/ScrollToTop'
import Router from './router'
import { store } from './stores/store'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: 'always',
      retry: 1,
      retryDelay: 2000,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Provider store={store}>
        <AuthProvider
          authType={'cookie'}
          authName={'_auth'}
          cookieDomain={window.location.hostname}
          cookieSecure={window.location.protocol === 'https:'}
        >
          <Router />
        </AuthProvider>
      </Provider>
      <ScrollToTop />
    </BrowserRouter>
  </QueryClientProvider>,
)
