import FoodSvg from '../../../assets/mapicons/food.svg'
import L from 'leaflet'

const pointerIcon = new L.Icon({
    iconUrl: FoodSvg,
    iconRetinaUrl: FoodSvg,
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [25, 55],
    shadowUrl: '../assets/marker-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [20, 92],
  })
  
export default {
    pointerIcon
}