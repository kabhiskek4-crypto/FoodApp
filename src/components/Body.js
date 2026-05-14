import RestaurantCard from "./RestaurantCard";
import listOfRestaurant from "../utils/mockData";
import {useState} from "react";


const Body = () => {

    const [restaurants, setRestaurants] = useState(listOfRestaurant);
    console.log(restaurants);

    return(
        <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={() => {
                let filteredList = restaurants.filter(res => res.data.avgRating >4.0);
                setRestaurants(filteredList);
            }}
            >
                Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {restaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
                ))}
            </div>
        </div>
    )
}

export default Body;