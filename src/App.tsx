import { useEffect } from "react";
import "./App.css";
import { initSilk } from "@silk-wallet/silk-wallet-sdk";
import { WagmiConfig, createClient, configureChains, mainnet, goerli } from "wagmi";
import { Chain, gnosis, hardhat, polygon } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import TestComponent from "./TestComponent";

const defaultChains: Chain[] = [mainnet, polygon, gnosis, goerli]

if (process.env.NODE_ENV == 'development') {
  defaultChains.push(hardhat)
}

const { chains, provider, webSocketProvider } = configureChains(
  defaultChains,
  [publicProvider()]
);
const connectors = [
  new InjectedConnector(),
  new WalletConnectConnector({
    options: {
      projectId: 'b589b5f837abf3430f55ee8a0138f72a',
    },
  }),
];
const wagmiClient = createClient({
  autoConnect: false,
  provider,
  webSocketProvider,
  connectors,
});

function App() {

  useEffect(() => {
    try {
      const provider = initSilk()
      // @ts-ignore
      window.silk = provider
    } catch (err) {
      console.error(err)
    }
  }, []);

  return (
    <WagmiConfig client={wagmiClient}>
      <div className="App">
        <TestComponent />
      </div>
    </WagmiConfig>
  );
}

export default App;
