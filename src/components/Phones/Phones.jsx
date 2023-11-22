import axios from "axios";
import { useEffect, useState } from "react";


const Phones = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() =>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;
            const phonesWithFakeData = phoneData.map(phone =>{
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            console.log(phonesWithFakeData);
            setPhones(phonesWithFakeData);
        })
    }, [])
    return (
        <div>
           <h2 className="text-3xl">Phones: {phones.length}</h2>

            
        </div>
    );
};

export default Phones;