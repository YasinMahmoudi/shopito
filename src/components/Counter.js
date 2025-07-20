import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

export default function Counter({ quantity, onSetQuantity }) {
    function handleDecrease() {
      onSetQuantity((quantity) => (quantity > 0 ? quantity - 1 : 0));
    }
  
    function handleIncrease() {
      onSetQuantity((quantity) => quantity + 1);
    }
  
    return (
      <div className="counter">
        <button onClick={handleDecrease}>
          <RemoveRoundedIcon />
        </button>
        <span> {quantity} </span>
        <button>
          <AddRoundedIcon onClick={handleIncrease} />
        </button>
      </div>
    );
  }

