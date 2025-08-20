/*
Copyright 2025 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/

import "./Person.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/**
* Person component - displays detailed information about a single person
* Fetches person data from AEM using the ID from the URL parameters
*/
function Person() {
  // Get the person ID from the URL parameter
  const { id } = useParams();

  // State to store the person data
  const [person, setPerson] = useState(null);

  useEffect(() => {
    /**
    * Fetches person data from AEM Content Fragment Delivery API
    * Uses the ID from URL parameters to get the specific person's details
    */
    const fetchData = async () => {
      try {
        /* Hydrate references for access to profilePicture asset path */
        const response = await fetch(
          `${process.env.REACT_APP_HOST_URI}/adobe/contentFragments/${id}?references=direct-hydrated`
        );
        const json = await response.json();
        setPerson(json || null);
      } catch (error) {
        console.error("Error fetching person data:", error);
      }
    };
    fetchData();
  }, [id]); // Re-fetch when ID changes

  // Show loading state while person data is being fetched
  if (!person) {
    return <div>Loading person...</div>;
  }

  return (
    <div className="person">
      {/* Person profile image - Look up the profilePicture reference in the references object */}
      <img
        className="person__image"
        src={process.env.REACT_APP_HOST_URI + person.references[person.fields.profilePicture].value.path}
        alt={person.fields.fullName}
      />
      {/* Display person's occupations */}
      <div className="person__occupations">
        {person.fields.occupation.map((occupation, index) => {
          return (
            <span key={index} className="person__occupation">
              {occupation}
            </span>
          );
        })}
      </div>

      {/* Person's main content: name and biography */}
      <div className="person__content">
        <h1 className="person__full-name">{person.fields.fullName}</h1>
        {/* Render biography as HTML content */}
        <div
          className="person__biography"
          dangerouslySetInnerHTML={{ __html: person.fields.biographyText.value }}
        />
      </div>
    </div>
  );
}

export default Person;