import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({
    name,
    cloudinaryImageId,
    avgRating,
    cuisines,
    areaName
}) =>{
    return(
        <div className="res-card">
        <img className="res-image" src={CDN_URL+cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4>{avgRating}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <p>{areaName}</p>
        </div>
    )
}

export default RestaurantCard;