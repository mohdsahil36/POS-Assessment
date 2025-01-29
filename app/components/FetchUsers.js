"use client"

import React, { useState, useEffect } from "react";
import { fetchSkillsetData } from "../lib/fetchSkillsetData";
import UserListAndSkillsets from "./UserListandSkillset";

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
        <h2 className="align-baseline text-gray-500 font-semibold text-4xl">
          Posh_UXdesigner_sr001
        </h2>
        <h2 className="align-baseline text-gray-500 text-2xl">
          {selectedUsers.length} candidates
        </h2>
      </div>

      <UserListAndSkillsets
        users={users}
        userSkillsets={userSkillsets}
        handleUserSelect={handleUserSelect}
      />
    </div>
  );
};

export default FetchUsers;
