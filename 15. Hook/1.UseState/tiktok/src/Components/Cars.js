import {useState} from 'react'
let carArray = [
    {
        brand: "Honda",
        price: 1000,
        discount: 10,
        checked: false,
        checkedBox: false,
    },
    {
        brand: "mesadecs",
        price: 1000,
        discount: 5,
        checked: false,
        checkedBox: false

    },
];
function Cars(){
   
    const [brand,SetBrand] = useState("");
    const [price,SetPrice] = useState(0);
    const [discount,SetDiscount] = useState(0);
    const [cars, setCars] = useState(()=>
    {
        var arrayLocal = localStorage.getItem("jobs");
        if(arrayLocal){
            carArray = JSON.parse(arrayLocal);
        }
        return carArray;
    });
    const [isEdit,SetIsEdit] = useState(false);
    const [index,SetIndex] = useState();
    const addCar = function(){
        let newCar = {};
        if(!isEdit){
            newCar = {
                brand: brand,
                price: price,
                discount: discount
            };
            cars.push(newCar);
        }else{
            newCar = cars[index];
            newCar.brand = brand;
            newCar.price = price;
            newCar.discount = discount;
        }
        HandleSetCars(cars); 
        
        handleMapping({
            brand: "",
            price: 0,
            discount: 0,
            isEdit: false,
            index: ""
        });
    }
    const getEdit = function(index){
        let car = cars[index];
        handleMapping({...car,index,isEdit: true});
    }
    const handleMapping = function({...prop}){
        SetBrand(prop.brand);
        SetPrice(prop.price);
        SetDiscount(prop.discount);
        SetIsEdit(prop.isEdit);
        SetIndex(prop.index);
    }
    const handleRadioCheck = function(index){
        cars.forEach(x=>x.checked = false);
        const car = cars[index];
        car.checked = true;
        HandleSetCars(cars);
    }
    const handleCheckBox = function(index){
        const car = cars[index];
        car.checkedBox = !car.checkedBox;
        HandleSetCars(cars);
    }
    const HandleSetCars= function(cars){
        const newCars = [
            ...cars
        ]
        //save to local storage
        const jsonJobs = JSON.stringify(newCars);
        localStorage.setItem("jobs",jsonJobs);
        setCars(newCars);
    }
    return (
        <div>
            <div>
                <div>
                    <label>brand</label>
                    <input value={brand} onChange={e=>{SetBrand(e.target.value)}} />
                </div>
                <div>
                    <label>price</label>
                    <input value={price} onChange={e=> SetPrice(e.target.value)} />
                </div>
                <div>
                    <label>discount</label>
                    <input value={discount} onChange={e=> SetDiscount(e.target.value)} />
                </div>
                
            </div>
            <button onClick={()=> addCar()}>submit</button>
            <ul>
                {cars.map((x,index)=> 
                    <li key={index}>
                        {JSON.stringify(x)} 
                        <input type='radio' checked={x.checked} onChange={()=> handleRadioCheck(index)} /> 
                        <input type='checkbox' checked={x.checkedBox} onChange={()=> handleCheckBox(index)} /> 
                        <button onClick={()=> {getEdit(index)}}>
                            edit
                        </button> 
                    </li>
                )}
            </ul>
        </div>
    )
}
export default Cars;