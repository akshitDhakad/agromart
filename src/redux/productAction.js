import {
  dataFetchStart,
  dataFetchSuccess,
  dataFetchFailure,
} from "./productSlice";
import axios from "axios";


export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(dataFetchStart());
    try {
      const { data } = await axios.get("http://localhost:5000/products");
      console.log("Fetched Data:", data); // Log the fetched data
      dispatch(dataFetchSuccess(data));
    } catch (error) {
      console.error("Fetch Error:", error.message); // Log any errors
      dispatch(dataFetchFailure(error.message));
    }
  };
};
// export const fetchProductById = (id) => {
//   return async (dispatch) => {
//     dispatch(dataFetchStart());
//     try {
//       const {data} = await axios.get(`http://localhost:3000/products/${id}`);
//       dispatch(dataFetchSuccess(data));
//     } catch (error) {
//       dispatch(dataFetchFailure(error.message));
//     }
//   }
// }
