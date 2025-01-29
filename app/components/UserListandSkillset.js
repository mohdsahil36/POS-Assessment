import React from 'react';
import { Plus } from 'lucide-react';
import UserSkillset from './UserSkillset';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const UserListAndSkillsets = ({ users, userSkillsets, handleUserSelect }) => {
    return (
        <>
            <div className="flex mt-8">
                <ul className="border w-[15%] border-black text-center">
                    <h3 className="border-b text-center font-light py-4 text-black text-xl">Most Recommended</h3>
                    {users.length === 0 ? (
                        <p>Loading users...</p>
                    ) : (
                        users.map((user) => (
                            <li key={user.id} className="bg-[#F6F6EF] font-semibold">
                                <div className="py-3 border-b border-b-gray-300 flex justify-between max-w-[75%] mx-auto">
                                    <div className="flex flex-col justify-center">
                                        <span>{user.name}</span>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <Plus
                                            className="w-5 h-5 cursor-pointer"
                                            color="#A497FD"
                                            onClick={() => handleUserSelect(user.id)}
                                        />
                                    </div>
                                </div>
                            </li>
                        ))
                    )}
                </ul>

                <div className="w-full mx-[7rem]">
                    <div className='flex justify-between border-b-2 border-black'>
                        <div className='flex'>
                            <button className='border border-black px-5 py-3 bg-[#219653] text-white'>Compare View</button>
                            <button className='border border-black px-5 py-3'>Individual View</button>
                            <button className='border border-black px-5 py-3'>Shortlisted Candidates</button>
                        </div>
                        <div className='flex'>
                            <button className="border border-black p-3 mb-2 shadow-lg">
                                <FaArrowLeft />
                            </button>
                            <button className='border border-black p-3 ms-2 mb-2'><FaArrowRight /></button>
                        </div>
                    </div>
                    <div className="flex-1">
                        {userSkillsets.length > 0 &&
                            userSkillsets.map((skillset, index) => (
                                <UserSkillset key={index} skillset={skillset} />
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserListAndSkillsets;
