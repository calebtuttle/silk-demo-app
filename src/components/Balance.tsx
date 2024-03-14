import { useAccount, useBalance } from "wagmi";

function Balance() {
  const { address, isConnected } = useAccount();

  const { data } = useBalance({
    address,
  })

  return (
    <div>
      <h2>Balance Demo</h2>
      {isConnected ? (
        <p>Balance: {data?.formatted ?? '<null>'}</p>
      ) : (
        <p>Connect to view balance</p>
      )}
    </div>
  );
}

export default Balance;
