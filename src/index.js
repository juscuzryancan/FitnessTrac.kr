import { App } from './components'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { TokenProvider } from './contexts/useToken';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <TokenProvider>
        <App />
        <ReactQueryDevtools />
      </TokenProvider>
    </Router>
  </QueryClientProvider>,
  document.querySelector('#root')
);
