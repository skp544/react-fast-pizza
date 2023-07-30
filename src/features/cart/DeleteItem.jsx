import { useDispatch } from "react-redux";
import { deleteItem } from "../../redux/slices/cartSlice";
import { Button } from "../../ui";

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
};

export default DeleteItem;
