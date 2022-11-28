import { ConnectKitProvider } from 'connectkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

import '@/styles/globals.css';

import Toast from '@/components/layout/Toast';

import { ToastProvider } from '@/contexts/ToastContext';

const avalancheChain = {
  id: 43_114,
  name: `Avalanche`,
  network: `avalanche`,
  nativeCurrency: {
    decimals: 18,
    name: `Avalanche`,
    symbol: `AVAX`,
  },
  rpcUrls: {
    default: `https://api.avax.network/ext/bc/C/rpc`,
  },
  blockExplorers: {
    default: { name: `SnowTrace`, url: `https://snowtrace.io` },
  },
  testnet: false,
};

const avalancheFuji = {
  id: 43_113,
  name: `Avalanche Fuji Testnet`,
  network: `avalancheFuji`,
  nativeCurrency: {
    decimals: 18,
    name: `Avalanche`,
    symbol: `AVAX`,
  },
  rpcUrls: {
    default: `https://api.avax-test.network/ext/bc/C/rpc`,
  },
  blockExplorers: {
    default: { name: `SnowTrace`, url: `https://testnet.snowtrace.io/` },
  },
  testnet: true,
};

const { provider, chains } = configureChains(
  [avalancheChain, avalancheFuji],
  [
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain.id !== avalancheChain.id) return null;
        return { http: chain.rpcUrls.default };
      },
    }),
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain.id !== avalancheFuji.id) return null;
        return { http: chain.rpcUrls.default };
      },
    }),
  ]
);

const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({
      chains,
      options: {
        shimDisconnect: true,
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
        rpc: { [43_114]: `https://api.avax.network/ext/bc/C/rpc` },
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: `Injected`,
        shimDisconnect: true,
      },
    }),
  ],
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider
        options={{
          walletConnectName: `Wallet Connect`,
        }}
      >
        <ToastProvider>
          <Toast />
          <Component {...pageProps} />
        </ToastProvider>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
