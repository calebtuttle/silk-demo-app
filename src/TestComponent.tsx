import Login from "./components/Login"
import LoginSelector from "./components/LoginSelector"
import ConnectAccount from "./components/ConnectAccount"
import SwitchChains from "./components/SwitchChains"
import Balance from "./components/Balance"
import PersonalSign from "./components/PersonalSign"
import EthSignTypedData from "./components/EthSignTypedData"

function TestComponent() {
  return (
    <div>
      <Login />
      <LoginSelector />
      <ConnectAccount />
      <SwitchChains />
      <Balance />
      <PersonalSign />
      <EthSignTypedData />
    </div>
  );
}

export default TestComponent;
