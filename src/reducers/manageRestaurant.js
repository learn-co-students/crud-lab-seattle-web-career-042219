import cuid from "cuid";
export const cuidFn = cuid;

export default function manageRestaurants(
  state = {
    restaurants: [],
    reviews: []
  },
  action
) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const newRestaurant = {
        id: cuid(),
        text: action.text
      };
      return { ...state, restaurants: [...state.restaurants, newRestaurant] };
    case "DELETE_RESTAURANT":
      return {
        restaurants: state.restaurants.filter(
          restaurant => restaurant.id !== action.id
        )
      };
    case "UPDATE_RESTAURANT":
      const updatedRestaurant = {
        text: action.restaurant.text,
        id: action.restaurant.id
      };
      return {
        ...state,
        restaurants: state.restaurants.map(restaurant => {
          return restaurant.id === action.restaurant.id
            ? updatedRestaurant
            : restaurant;
        })
      };
    case "ADD_REVIEW":
      const newReview = {
        id: cuid(),
        text: action.review.text,
        restaurantId: action.review.restaurantId
      };
      return { ...state, reviews: [...state.reviews, newReview] };
    case "DELETE_REVIEW":
      return {
        ...state,
        reviews: state.reviews.filter(review => review.id !== action.id)
      };
    case "UPDATE_REVIEW":
      const updatedReview = {
        text: action.review.text,
        id: action.review.id,
        restaurantId: action.review.restaurantId
      };
      return {
        ...state,
        reviews: state.reviews.map(review => {
          return review.id === action.review.id ? updatedReview : review;
        })
      };
    default:
      return state;
  }
}
