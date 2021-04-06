import React, { useState } from "react";
import axios from 'axios'

function CreateList(props) {
  // Need to capture data from input boxes -- use State
  const [listDetails, setListDetails] = useState({
    title: "",
    event: "",
    eventDate: "",
    description: "",
  });

  // need function to handle event listening and setting state with list info

  const handleChange = (e) => {
    setListDetails({
      ...listDetails,
      [e.target.name]: e.target.value,
    });
  };

  // need handleSubmit function to create list
  // have function created, need to test by logging in and having a token
  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:3001/list", {
            title: listDetails.title,
            event: listDetails.event,
            event_date: listDetails.eventDate,
            description: listDetails.description,
        });
        const result = response.data
        // console.log(result)
        // console.log(result.list_id)
        // console.log(props.history)
        props.history.push(`/list/${result.list_id}`)
      } catch (err) {
          return null
      }
  }

  return (
    <div>
      <form>
        <input
          name="title"
          type="text"
          placeholder="Title"
          onChange={handleChange}
        ></input>{" "}
        <br />
        <input
          name="event"
          type="text"
          placeholder="Event"
          onChange={handleChange}
        ></input>{" "}
        <br />
        {/* Need to make event date input return date -- use calendar */}
        <input
          name="eventDate"
          type="text"
          placeholder="Event date"
          onChange={handleChange}
        ></input>{" "}
        <br />
        <label for="listDescription">Description:</label> <br />
        <textarea
          id="listDescription"
          name="description"
          rows="4"
          cols="50"
          placeholder="Tell us what this list will help you achieve!"
          onChange={handleChange}
        ></textarea>{" "}
        <br />
        <button onClick={handleSubmit}>Create List</button>
      </form>
    </div>
  );
}

export default CreateList;
