import '../styles/globals.css'; // Ajuste o caminho conforme necessário
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
