import axios from "axios";

const axiosDishes = axios.create({
  baseURL:
    "https://restaurant-menu-attractor-default-rtdb.europe-west1.firebasedatabase.app/",
});

export default axiosDishes;
