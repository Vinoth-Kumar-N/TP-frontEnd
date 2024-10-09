import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const SecTravList = [
    {
        id: 1,
        icon: '💺',
        title: 'Just Me',
        desc: 'A olo traveles in exploration',
        people: '1'
    },
    {
        id: 2,
        icon: '🥂',
        title: 'A Couple',
        desc: 'Two Travelers in exploration',
        people: '2 people'
    },
    {
        id: 3,
        icon: '👪',
        title: 'Family',
        desc: 'A group of Fun Loving adventurers',
        people: '3 to 5 people'
    },
    {
        id: 4,
        icon: '🥳',
        title: 'Friends',
        desc: 'A bunch of thrill-seeks',
        people: '5 to 10 People'
    }
]
const SecBudgetOptions = [
    {
        id: 1,
        icon: '💵',
        title: 'Affordable',
        desc: 'Stay concious of cost'
    },
    {
        id: 2,
        icon: '💸',
        title: 'Moderate',
        desc: 'Keep cost on average side'
    },
    {
        id: 3,
        title: 'Luxury',
        icon: '💰',
        desc: 'Dont worry about cost'
    }
];
const CreateTrip = () => {
    const navi = useNavigate();
    const [place, setplace] = useState();
    const [FormData, setFormData] = useState([]);

    const handleInputData = (name, value) => {
        setFormData({ ...FormData, [name]: value });
    }

    useEffect(() => {
        console.log(FormData);
    }, [FormData]);

    const onGenerateTrip = () => {
        if (!FormData?.destination || !FormData?.noOfDays || !FormData?.Travelers || !FormData?.budget) {
            toast('Please fill out all the required fields before generating the trip.');
            return;
        }
        navi('/endoutput', {state : {FormData}});
        console.log(FormData);
    }


    return (
        <>
            <ToastContainer />
            <div className=" h-auto md:h-full w-full flex flex-col items-center bg-slate-100">

                <div className="w-full md:w-[60%] flex flex-col items-center justify-center my-10 rounded-xl bg-slate-50">
                    <div className="sm:px-10 md:px-22 lg:px-56 xl:px-10 px-5 mt-20">
                        <h2 className="text-bold text-3xl">Tell us your travel preferences 🏝️ 🏂</h2>
                        <p className="mt-3 text-gray-500">just provide some basics informatiom, and our trip planner will generate customized itinerary based on your preferences</p>
                    </div>

                    <div className='w-full h-[4rem] flex flex-col items-start sm:px-10 md:px-22 lg:px-56 xl:px-10 px-5 mt-20'>
                        <div className="">
                            <h2 className="text-xl my-3 font-medium">What is Continent of choice?</h2>
                            <input className='h-[40px] w-[17rem] border rounded-md bord er-collapse border-blue-200 bg-slate-100 p-3' type="text" placeholder='Ex.Paris'
                                onChange={(e) => handleInputData("destination", e.target.value)}
                            />
                        </div>
                    </div>

                    <div className='w-full h-[10rem] flex flex-col items-start sm:px-10 md:px-22 lg:px-56 xl:px-10 px-5 mt-20'>
                        <div className="h-[80%] w-full">
                            <h2 className="text-xl my-3 font-medium">How many days are you planning your trip ?</h2>
                            <input className='h-[40px] w-[17rem] border rounded-md bord er-collapse border-blue-200 bg-slate-100 p-3' type="number" placeholder='Ex.3'
                                onChange={(e) => handleInputData("noOfDays", e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="w-full lg:h-[17rem] flex flex-col items-start sm:px-10 md:px-22 lg:px-56 xl:px-10 px-5 mt-10 ">
                        <div className="h-full w-full">
                            <h1 className="text-xl my-3 font-medium">What is your Budget?</h1>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
                                {
                                    SecBudgetOptions.map((data, index) => (
                                        <div key={index}
                                            onClick={() => handleInputData("budget", data.title)}
                                            className={`p-4 border rounded-lg hover:shadow-xl shadow-blue-400 m-6 bg-[#f8f8f8] cursor-pointer 
                                            ${FormData?.budget === data.title && 'border-2 border-black'}
                                            `}>
                                            <h2 className="text-lg font-bold">{data.icon}</h2>
                                            <h2 className="text-lg font-bold">{data.title}</h2>
                                            <h2 className="text-sm text-gray-500">{data.desc}</h2>
                                        </div>
                                    ))


                                }
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-auto md:h-[30rem] flex flex-col items-start sm:px-10 md:px-22 lg:px-56 xl:px-10 px-5 ">
                        <div className="h-full w-full">
                            <h1 className="text-xl my-3 font-medium">How many Members are plan to go</h1>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
                                {
                                    SecTravList.map((data, index) => (
                                        <div key={index}
                                            onClick={() => handleInputData("Travelers", data.people)}
                                            className={`p-4 hover:shadow-xl shadow-blue-400 m-6 bg-[#f8f8f8] cursor-pointer rounded-lg border
                                            ${FormData?.Travelers === data.people && 'border-2 border-black'}
                                            `}>
                                            <h2 className='text-lg font-bold'>{data.icon}</h2>
                                            <h2 className="text-lg font-bold">{data.title}</h2>
                                            <h2 className="text-sm text-gray-500">{data.desc}</h2>
                                            <h2 className="text-sm text-gray-500">{data.people}</h2>
                                        </div>
                                    ))

                                }
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[8rem] flex flex-col items-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-xl" onClick={onGenerateTrip}>Generate Trip</button>
                    </div>

                </div>

            </div >
        </>
    )
}

export default CreateTrip