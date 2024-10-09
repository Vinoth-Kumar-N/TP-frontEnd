import React, { useState, useEffect } from 'react';
import { getCity } from '../services/api'
import { useLocation } from 'react-router-dom';

const EndOut = () => {
    const [citData, setCitData] = useState([]);
    const location = useLocation();
    const { FormData } = location.state || {};

    const handleFetch = async () => {
        if (FormData && FormData.destination) {
            try {
                console.log(FormData.destination);
                const cityname = FormData.destination;
                console.log(cityname);
                const res = await getCity(cityname);
                if(res.messsage === 'City not found'){
                    console.log('City not found');
                }
                setCitData(res.data);
                console.log(citData);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
    };

    useEffect(() => {
        handleFetch();
    }, []);

    return (
        <>
            <div className="h-auto w-screen flex items-center justify-center">
                <div className="h-full w-[90vw] flex flex-col items-center justify-center m-10 ">

                    <div className="md:h-[22rem] w-full flex flex-col justify-center bg-slate-100">
                        <h2 className="text-2xl font-bold md:mb-7">{citData.cityname}</h2>

                        <div className="w-[90vw] md:h-[8rem] md:flex justify-between items-center m-10">
                            <img src={citData.cityimage} alt="city image" className="rounded-md max-w-[17rem] h-[15rem]" />
                            <p className="text-xl md:w-[60%] mt-3">{citData.desc}</p>
                        </div>
                    </div>

                    <div className="h-auto w-[90vw] mt-7 bg-slate-100 flex justify-center items-center">
                        {citData.places &&
                            <div className="h-full w-full">
                                <h2 className="text-xl font-bold">Places to Visit</h2>
                                <div className="md:flex items-center gap-7">
                                    {
                                        citData.places.map((place, index) => {
                                            return (
                                                <div key={index} className="h-[15rem] lg:w-[20rem] m-10 ">
                                                    <img src={place.pimg} alt="" className="h-[14rem] rounded-md shadow-black shadow-md transition transform hover:scale-105" />
                                                    <p className="text-xl font-bold mt-3">{place.pname}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        }
                    </div>

                    <div className="h-auto w-[90vw] mt-7 bg-slate-100">
                        {citData.hotels &&
                            <div className="h-full w-full">
                                <h2 className="text-xl font-bold">Hotels you can Stay</h2>
                                <div className="w-full h-full md:flex items-center gap-7">
                                    {
                                        citData.hotels.map((hotel, index) => {
                                            return (
                                                <div key={index} className="h-auto w-auto p-3 md:flex flex-col items-center justify-center m-8">
                                                    <img src={hotel.himg} alt="" className="h-[14rem] rounded-md shadow-black shadow-md transition transform hover:scale-105" />
                                                    <p className="font-bold mt-2">{hotel.rent}</p>
                                                    <p className="w-[70%] text-xl font-bold mt-3">{hotel.hname}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        }
                    </div>

                </div>
            </div>
        </>
    );
};

export default EndOut;














{/* {citData.map((item, index) => (
                        <div key={index} className="">
                            <h2 className="text-3xl font-bold">{item.name}</h2>

                            <h2 className="text-xl font-bold mt-8">Hotels to stay</h2>
                            <div className="hotel-list h-auto grid grid-cols-3 gap-6 m-6">
                                {item.Hotels.map((hotel, hotelIndex) => (
                                    <div key={hotelIndex} className="hotel-item">
                                        <img src={hotel} alt="Hotel" className="hotel-image w-[22rem] h-[22rem] bg-cover" />
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-xl font-bold mt-9">Places to visit</h2>
                            <div className="place-list h-auto grid grid-cols-3 gap-6 m-6">
                                {item.places.map((place, placeIndex) => (
                                    <div key={placeIndex} className="hotel-item">
                                        <img src={place} alt="Hotel" className="hotel-image w-[22rem] h-[22rem] bg-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))} */}
