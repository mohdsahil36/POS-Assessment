"use client";

import React, { useState, useEffect } from "react";
import { fetchSkillsetData } from "../lib/fetchSkillsetData";
import UserSkillset from "./UserSkillset";
import { Plus } from 'lucide-react';
import { CircleUserRound } from 'lucide-solid';

const FetchUsers = () => {
    const [users, setUsers] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [userSkillsets, setUserSkillsets] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://forinterview.onrender.com/people");
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        const fetchSkillsets = async () => {
            try {
                const skillsetData = await Promise.all(
                    selectedUsers.map((userId) => fetchSkillsetData(userId))
                );
                setUserSkillsets(skillsetData);
            } catch (error) {
                console.error("Error fetching skillsets:", error);
            }
        };

        if (selectedUsers.length > 0) {
            fetchSkillsets();
        }
    }, [selectedUsers]);

    const handleUserSelect = (userId) => {
        if (!selectedUsers.includes(userId)) {
            setSelectedUsers((prev) => [...prev, userId]);
        }
    };

    return (
        <div>
            <div className="flex max-w-[90%] mx-auto justify-between align-baseline">
                <h2 className="align-baseline text-gray-500 font-semibold text-4xl">Posh_UXdesigner_sr001</h2>
                <h2 className="align-baseline text-gray-500 text-2xl">{selectedUsers.length} candidates</h2>
            </div>
            <div className="flex">
                <ul className="mt-8 border w-[15%] border-black text-center">
                    <h3 className="border-b text-center font-light py-4 text-black text-xl">Most Recommended</h3>
                    {users.length === 0 ? (
                        <p>Loading users...</p>
                    ) : (
                        users.map((user) => (
                            <li key={user.id} className="bg-[#F6F6EF] font-semibold">
                                <div className=" py-3 border-b border-b-gray-300 flex justify-between max-w-[75%] mx-auto">
                                    <div className="flex flex-col justify-center">
                                        <span>{user.name}</span>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <Plus className="w-5 h-5 cursor-pointer" color="#A497FD" onClick={() => handleUserSelect(user.id)} />
                                    </div>
                                </div>
                            </li>
                        ))
                    )}
                </ul>

                <div className="flex-1">
                    {userSkillsets.length > 0 && userSkillsets.map((skillset, index) => (
                        <UserSkillset key={index} skillset={skillset} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FetchUsers;
