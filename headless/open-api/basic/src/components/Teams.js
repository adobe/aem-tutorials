/*
Copyright 2025 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Teams.scss";

function Teams() {

  // The teams folder is the only folder-tree that is allowed to contain Team Content Fragments.
  const TEAMS_FOLDER = '/content/dam/my-project/en/teams';

  // State to store the teams data
  const [teams, setTeams] = useState(null);

  useEffect(() => {
    /**
    * Fetches all teams and their associated member details
    * This is a two-step process:
    * 1. First, get all team content fragments from the specified folder
    * 2. Then, for each team, fetch the full details including hydrated references to get the team member names
    */
    const fetchData = async () => {
      try {
        // Step 1: Fetch all teams from the teams folder
        const response = await fetch(
          `${process.env.REACT_APP_HOST_URI}/adobe/contentFragments?path=${TEAMS_FOLDER}`
        );
        const allTeams = (await response.json()).items || [];

        // Step 2: Fetch detailed information for each team with hydrated references
        const hydratedTeams = [];
        for (const team of allTeams) {
          const hydratedTeamResponse = await fetch(
            `${process.env.REACT_APP_HOST_URI}/adobe/contentFragments/${team.id}?references=direct-hydrated`
          );
          hydratedTeams.push(await hydratedTeamResponse.json());
        }

        setTeams(hydratedTeams);
      } catch (error) {
        console.error("Error fetching content fragments:", error);
      }
    };

    fetchData();
  }, [TEAMS_FOLDER]);

  // Show loading state while teams data is being fetched
  if (!teams) {
    return <div>Loading teams...</div>;
  }

  // Render the teams
  return (
    <div className="teams">
      {teams.map((team, index) => {
        return (
          <Team
            key={index}
            {...team}
          />
        );
      })}
    </div>
  );
}

/**
   * Team - renders a single team with its details and members
   * @param {Object} fields - The authored Content Fragment fields
   * @param {Object} references - Hydrated references containing member details such as fullName
   * @param {string} path - Path of the team content fragment
   */
function Team({ fields, references, path }) {
  if (!fields.title || !fields.teamMembers) {
    return null;
  }

  return (
    <>
      {/* Specify the correct Content Fragment variations path suffix in the data-aue-resource attribute */}
      <div className="team"
        data-aue-resource={`urn:aemconnection:${path}/jcr:content/data/master`}
        data-aue-type="component"
        data-aue-label={fields.title}>

        <h2 className="team__title"
          data-aue-prop="title"
          data-aue-type="text"
          data-aue-label="Team Title">{fields.title}</h2>
        <p className="team__description"
          data-aue-prop="description"
          data-aue-type="richtext"
          data-aue-label="Team Description"
          dangerouslySetInnerHTML={{ __html: fields.description.value }}
        />
        <div>
          <h4 className="team__members-title">Members</h4>
          <ul className="team__members">
            {fields.teamMembers.map((teamMember, index) => {
              return (
                <li key={index} className="team__member">
                  <Link to={`/person/${teamMember}`}>
                    {references[teamMember].value.fields.fullName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Teams;