import { Route, Routes } from "react-router-dom";
import {ParksForm} from "./DisneyParks/Parks"
import { ResortsForm } from "./DisneyResorts/Resort";
import { AttractionsForm } from "./DisneyAttractions/Attractions";
import {RestaurantsForm } from "./DisneyRestaurant/Restaurants";

export const ApplicationViews = () => {

  return  <Routes>
  <Route path="/Parks" element={<ParksForm />} />;
  <Route path ="/Resort" element={<ResortsForm/>}/>;
  <Route path ="/Attractions" element={<AttractionsForm/>}/>;
  <Route path ="/Restaurant" element={<RestaurantsForm/>}/>;

  </Routes>
};
