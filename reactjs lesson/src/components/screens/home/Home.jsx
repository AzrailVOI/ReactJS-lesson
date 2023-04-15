import {useContext, useState} from "react";
import CarItem from "./car-item/CarItem";
import {cars as carsData} from './cars.data'
import CreateCarForm from "./create-car-form/CreateCarForm.jsx";
import {AuthContext} from "../../../providers/AuthProvider.jsx";
function Home() {
    const [cars, setCars] = useState(carsData)
    console.log(cars)
    const {user, setUser} = useContext(AuthContext)
    return (
      <div>
        <h1>Cars catalog</h1>

          {user ? <>
            <h2>
                Welcome, {user.name}
            </h2>
              <button onClick={()=>setUser(null)}>Logout</button>
            </>
              :(
              <button onClick={()=>{setUser(
                  {
                    name: 'Max'
                  })
              }}>Login</button>)
          }
        <CreateCarForm setCars={setCars}/>
          <div>
              {cars.length ? cars.map(car=>(
                  <CarItem key={car.id} car={car}></CarItem>
              ))
              : <p>There are no cars</p>
              }
          </div>
      </div>
    )
}
export default Home
