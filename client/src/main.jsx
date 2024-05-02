import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './contexts/useUser';
import './index.css'
import { QueryClientProvider, QueryClient } from 'react-query';
import App from './app/App';
import { Provider } from 'react-redux';
import { store } from './app/store';

const client = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={client}>
    <Provider store={store}>
      <Router>
        <UserProvider>
          <App />
        </UserProvider>
      </Router>
    </Provider>
  </QueryClientProvider>
);
