import styles from './CreateCarForm.module.css'
import {useState} from "react";
const CreateCarForm = ({setCars})=>{
    const [data, setData] = useState({
        price: '',
        name: '',
        image: ''
    })

    const createCar = (e) =>{
        e.preventDefault()
        setCars(prev=>[

            {
                id: prev.length+1,
                ...data
            },
            ...prev
        ])
        setData('')
    }
    return(
        <form className={styles.form} >
            <input type="text" placeholder="Name" onChange={e =>{
            setData(prev => ({
                ...prev,
            name: e.target.value}))
        }} value = {data.name}/>
            <input type="text" placeholder="Price" onChange={e =>{
            setData(prev => ({
                ...prev,
            price: e.target.value}))
        }} value = {data.price}/>
            <input type="text" placeholder="image" onChange={e =>{
            setData(prev => ({
                ...prev,
            image: e.target.value}))
        }} value = {data.image}/>
            <button className={styles.btn} onClick={e => createCar(e)}>Create</button>
        </form>
    )
}
export default CreateCarForm