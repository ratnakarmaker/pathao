import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import Vehicles from '../Vehicles/Vehicles';

const Home = () => {
    const fake4 = fakeData;
    const [transport, setTransport] = useState(fake4);
    const [cart, setCart] = useState([]);

    const handleAddVehicle = (fakeData) => {
        const newCart = [...cart, fakeData];
        setCart(newCart);
    }
    useEffect (() => {
        setTransport(fakeData)
    }, [])

    return (
        <div className="transport-container mt-5">
            <div className="vehicle">
                <div className="row w-100 d-flex justify-content-center">
                    {
                        transport.map(tp => <Vehicles
                            handleAddVehicle = {handleAddVehicle}
                            transport={tp}></Vehicles>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;