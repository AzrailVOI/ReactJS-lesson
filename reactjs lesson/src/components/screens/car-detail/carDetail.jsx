import {useParams} from "react-router-dom";
import {cars} from '../home/cars.data'
import {useState} from "react";
import CarItem from "../home/car-item/CarItem.jsx";
export const CarDetail=()=>{
    const {id} = useParams()
    const [car, setCar] = useState({})
    if (!car?.name) return <p>Loading...</p>;
    return (
        <div>
            <CarItem car={car}></CarItem>
        </div>
    )
}