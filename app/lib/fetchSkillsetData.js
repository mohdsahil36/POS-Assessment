export const fetchSkillsetData = async (userId) => {
    const response = await fetch(`https://forinterview.onrender.com/people/${userId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user skillset");
    }
    return response.json();
  };
  