import { useDispatch, useSelector } from "react-redux";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { addFavorite, removeFavorite } from "../../redux/favoriteSlice";
import { selectFavorites } from "../../redux/selectors";

const FavoriteButton = ({ data }) => {
  const dispatch = useDispatch();
    const favoriteCars = useSelector(selectFavorites);
           const isChecked=favoriteCars?.some(item => item.id === data.id);

  const handleToggleFavorite = () => {
    if (isChecked) {
      dispatch(removeFavorite(data));
      Notify.success("Deleted from favorites");
    } else {
      dispatch(addFavorite(data));
      Notify.success("Added your favorites");
    }
  };
  return (
    <button type="button" onClick={handleToggleFavorite}>
      {isChecked ? <AiTwotoneHeart /> : <AiOutlineHeart />}
    </button>
  );
};

export default FavoriteButton;
