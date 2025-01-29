import React from "react";

const UserSkillset = ({ skillset }) => {
  const skillsData = skillset?.data?.data?.skillset;

  return (
    <div>
      <h3>Skillset</h3>
      {skillsData && skillsData.length > 0 ? (
        <ul>
          {skillsData.map((skillsetItem) => (
            skillsetItem.skills?.map((skill) => (
              <li key={skill.id}>
                <strong>{skill.name}</strong>
                <ul>
                  {skill.pos?.map((pos) => (
                    <li key={pos.id}>
                      Consensus Score: {pos.consensus_score}
                    </li>
                  ))}
                </ul>
              </li>
            ))
          ))}
        </ul>
      ) : (
        <p>No skillset data available.</p>
      )}
    </div>
  );
};

export default UserSkillset;
