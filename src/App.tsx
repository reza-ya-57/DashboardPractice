import { ThemeProvider } from '@mui/material/styles';
import { Router } from './router/router';
import { theme } from './theme/muiTheme';
import { RTL } from './theme/RTL';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <RTL>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </RTL>
    </QueryClientProvider>
  );
}

export default App;
