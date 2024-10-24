"use client";  // Add this at the top to make it a client component

import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdWifiCalling3 } from "react-icons/md";
import { IoIosMail } from "react-icons/io";


export default function ContactRateUs() {
    const [isModalOpen, setIsModalOpen] = useState(false); // Set default to false to not show the modal initially
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const submitRating = () => {
        setIsModalOpen(false);
        alert(`Thank you for rating us ${rating} out of 5! Comment: ${comment}`);
    };

    const handleRating = (value: number) => {
        setRating(value);
    };

    console.log("ContactRateUs component loaded");

    return (
        <div className="w-[90%] lg:w-[75%] mx-auto mb-24">
            <div className="flex flex-col md:flex-row lg:justify-between lg:items-center gap-x-40">
                {/* Left part: Form */}
                <div className="lg:w-1/2 bg-gradient-to-r from-purple-50 to-purple-200 shadow-lg shadow-purple-400 rounded-2xl">
                    <div className="px-10 py-7">
                        <h1 className="text-3xl md:text-5xl md:leading-[3.5rem] font-bold gradient-text w-3/4">
                            Get In Touch
                        </h1>
                        <p className="my-3 text-lg">
                            We are here for you! How can we help?
                        </p>
                        {/* Form for getting in touch */}
                        <form>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 text-black shadow-lg shadow-purple-200 border-2 border-purple-100 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-300 transition-all ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 text-black shadow-lg shadow-purple-200 border-2 border-purple-100 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-300 transition-all ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
                                    placeholder="Enter your email address"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 text-black shadow-lg shadow-purple-200 border-2 border-purple-100 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-300 transition-all ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
                                    rows={4}
                                    placeholder="Go ahead, we are listening..."
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="transform -translate-y-1/2 text-sm sm:text-base hover:bg-gradient-to-r hover:from-slate-600 hover:to-slate-800 mt-4 text-white px-4 py-2 rounded bg-gradient-to-r from-purple-500 to-purple-900 transition-all duration-300 hover:shadow-md shadow-purple-400 shadow-sm hover:shadow-gray-500"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right part: Image, Contact info, Rate Us button */}
                <div className='lg:w-1/2 flex flex-col justify-center md:justify-end items-center mt-10 lg:mt-0'>
                    <div className='mb-5'>
                        <img src="customer-service.jpg" alt="Customer Service" className="w-full max-w-[350px]" />
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2 mb-5">
                        <div className='flex flex-row items-center justify-start'>
                            <div className="bg-purple-200 p-2 rounded-full">
                                <MdWifiCalling3 className="text-lg text-slate-700" />
                            </div>
                            <p className="ml-2 text-lg">+91 9876543210</p>
                        </div>
                        <div className='flex flex-row items-center justify-start'>
                            <div className="bg-purple-200 p-2 rounded-full">
                                <IoIosMail className="text-lg text-slate-700" />
                            </div>
                            <p className="ml-2 text-lg">himeshparashar424@gmail.com</p>
                        </div>
                    </div>

                    {/* Rate Us Button */}
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="text-xl lg:text-2xl hover:bg-gradient-to-r hover:from-slate-600 hover:to-slate-800 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-900 transition-all duration-300 hover:shadow-md shadow-purple-400 shadow-sm hover:shadow-gray-500"
                    >
                        Rate Us
                    </button>
                </div>

                {/* Rating Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 flex justify-center items-center z-50">
                        <div className="bg-white p-8 rounded-lg shadow-lg shadow-purple-400 lg:w-[300px]">
                            <h2 className="text-xl font-bold mb-4 text-center gradient-text">Rate Us</h2>
                            <div className="flex justify-center mb-4">
                                {[1, 2, 3, 4, 5].map((value) => (
                                    <span
                                        key={value}
                                        className={`cursor-pointer text-2xl ${rating >= value ? 'purple-gradient' : 'text-gray-300'}`}
                                        onClick={() => handleRating(value)}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                            <textarea
                                className="w-full border text-black border-gray-300 rounded p-2 mb-4"
                                rows={4}
                                placeholder="Write your comments here..."
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />
                            <div className="flex justify-around">
                                <button
                                    onClick={submitRating}
                                    className="text-sm mr-3 sm:text-base hover:bg-gradient-to-r hover:from-slate-600 hover:to-slate-800 text-white px-4 py-2 rounded bg-gradient-to-r from-purple-500 to-purple-900 transition-all duration-300 hover:shadow-md shadow-purple-400 shadow-sm hover:shadow-gray-500"
                                >
                                    Submit
                                </button>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="ml-2 text-gray-600 underline"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
}
