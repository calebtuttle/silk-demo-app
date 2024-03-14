import {
  useNetwork,
  useSwitchNetwork,
} from "wagmi";
import { hardhat } from "wagmi/chains";


function SwitchChains() {
  const { chain, chains } = useNetwork();
  const { switchNetwork, error } = useSwitchNetwork();

  return (
    <div>
      <div>
        <div>
          <h2>Switch Chains Demo</h2>
          <p>Connected to: {chain?.name}</p>
          <button 
            onClick={() => {
              if (switchNetwork) {
                switchNetwork(1)
              } else {
                console.error('switchNetwork is not defined')
              }
            }} 
            className="button"
          >
            Switch to Ethereum Mainnet
          </button>
        </div>
        
        <div>
          <button 
            onClick={() => {
              if (switchNetwork) {
                switchNetwork(5)
              } else {
                console.error('switchNetwork is not defined')
              }
            }} 
            className="button"
          >
            Switch to Ethereum Goerli
          </button>
        </div>

        <div>
          <button 
            onClick={() => {
              if (switchNetwork) {
                switchNetwork(137)
              } else {
                console.error('switchNetwork is not defined')
              }
            }} 
            className="button"
          >
            Switch to Polygon PoS
          </button>
        </div>

        <div>
          <button 
            onClick={() => {
              if (switchNetwork) {
                switchNetwork(100)
              } else {
                console.error('switchNetwork is not defined')
              }
            }} 
            className="button"
          >
            Switch to Gnosis
          </button>
        </div>

        {process.env.NODE_ENV == 'development' && (
          <div>
            <button 
              onClick={() => {
                if (switchNetwork) {
                  switchNetwork(hardhat.id)
                } else {
                  console.error('switchNetwork is not defined')
                }
              }} 
              className="button"
            >
              Switch to Local Hardhat
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SwitchChains;
