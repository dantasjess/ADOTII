import '../styles/globals.css';
import Layout from '../src/components/layout';
import { AuthProvider } from '../src/contexts/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </Layout>
    
  );
}

export default MyApp;
