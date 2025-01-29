"use client"

import React, { useState, useEffect } from "react";
import { fetchUserData } from "../lib/fetchUserData";
import { fetchSkillsetData } from "../lib/fetchSkillsetData";
import UserDetails from "./UserDetails";
import UserSkillset from "./UserSkillset";
import { Plus } from 'lucide-react';

const FetchUsers = () => {
    const [users, setUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [userDetails, setUserDetails] = useState(null);
    const [userSkillset, setUserSkillset] = useState(null);

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
        const fetchUserDetails = async () => {
            if (selectedUserId) {
                try {
                    const userData = await fetchUserData(selectedUserId);
                    setUserDetails(userData);
                    const skillsetData = await fetchSkillsetData(selectedUserId);
                    setUserSkillset(skillsetData);
                } catch (error) {
                    console.error("Error fetching user data or skillset:", error);
                }
            }
        };

        fetchUserDetails();
    }, [selectedUserId]);

    console.log("userSkilset,", userSkillset);

    return (
        <div>
            <div className="flex max-w-[90%] mx-auto justify-between align-baseline">
                <h2 className="align-baseline text-gray-500 font-semibold text-4xl">Posh_UXdesigner_sr001</h2>
                <h2 className="align-baseline text-gray-500 text-2xl">23 candidates</h2>
            </div>
            <div className="flex">
            <ul className="mt-8 border w-[15%] border-black text-center">
                <h3 className="border bottom-5 text-center font-light py-4  text-black text-xl">Most Recommended</h3>
                {users.length === 0 ? (
                    <p>Loading users...</p>
                ) : (
                    users.map((user) => (
                        <div>
                            <li key={user.id} className="py-3 mx-5 border-b border-b-gray-300 bg-[#F6F6EF]">
                                <button onClick={() => setSelectedUserId(user.id)}>{user.name}<Plus size={2} color="black"/></button>
                            </li>
                        </div>
                    ))
                )}
            </ul>

            {userDetails && <UserDetails details={userDetails} />}

            {userSkillset && <UserSkillset skillset={userSkillset} />}
            </div>
        </div>
    );
};

export default FetchUsers;
