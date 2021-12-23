import React, { useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import { useLocation } from "react-router";
import { dogApi } from "../../Redux/Actions/actions";

function FavBreed() {

  const location = useLocation();
  const favBreed = location.state;
  const dispatch = useDispatch();

  const { breedImg } = useSelector((state) => state.breedReducer);
console.log(breedImg, 'breed');
  useEffect(() => {
    dispatch(dogApi(favBreed));
  }, []);
  return <div>
    <img  src={breedImg} alt="img" />
  </div>;
}
export default FavBreed;
