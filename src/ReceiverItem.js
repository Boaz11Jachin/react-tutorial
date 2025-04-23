import Receiver from "./Receiver";

function ReceiverItem({ elm, idx, clickHandle }) {
  return (
    <div className="receiver-item" key={idx}>
      <span>{elm}</span>
      <button onClick={clickHandle} value={elm}>
        X
      </button>
    </div>
  );
}

export default ReceiverItem;
