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
  const { id } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
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
  }, [id]);

  if (!person) {
    return <div>Loading person...</div>;
  }

  /* Add the Universal Editor data-aue-* attirbutes to the rendered HTML */
  return (
    <div className="person"
      data-aue-resource={`urn:aemconnection:${person.path}/jcr:content/data/master`}
      data-aue-type="component"
      data-aue-label={person.fields.fullName}>
      <img className="person__image"
        src={process.env.REACT_APP_HOST_URI + person.references[person.fields.profilePicture].value.path}
        alt={person.fields.fullName}
        data-aue-prop="profilePicture"
        data-aue-type="media"
        data-aue-label="Profile Picture"
      />
      <div className="person__occupations">
        {person.fields.occupation.map((occupation, index) => {
          return (
            <span key={index} className="person__occupation">
              {occupation}
            </span>
          );
        })}
      </div>

      <div className="person__content">
        <h1 className="person__full-name"
          data-aue-prop="fullName"
          data-aue-type="text"
          data-aue-label="Full Name">
          {person.fields.fullName}
        </h1>
        <div className="person__biography"
          data-aue-prop="biographyText"
          data-aue-type="richtext"
          data-aue-label="Biography"
          dangerouslySetInnerHTML={{ __html: person.fields.biographyText.value }}
        />
      </div>
    </div>
  );
}

export default Person;