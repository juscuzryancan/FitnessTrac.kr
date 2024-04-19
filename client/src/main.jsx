import { App } from './components'
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { UserProvider } from './contexts/useUser';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <UserProvider>
        <App />
        <ReactQueryDevtools />
      </UserProvider>
    </Router>
  </QueryClientProvider>,
  document.querySelector('#root')
);
