import 'react-perfect-scrollbar/dist/css/styles.css';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './style/GlobalStyles';
import './mixins/chartjs';
import theme from './theme/index';
import Dashboard from './pages/Dashboard'
import DashboardSidebar  from './components/container/DashboardSidebar';
import MainLayout from './components/navbar/MainLayout'

const App = () => {

  return (
    <>
      <DashboardSidebar />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MainLayout />
        <Dashboard />
      </ThemeProvider>
    </>

  );
};

export default App;

