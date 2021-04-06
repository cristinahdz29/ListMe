import React, { useState } from "react";
import axios from "axios";

function ViewList(props) {
  const [ItemDetails, setItemDetails] = useState({
    title: "",
    quantity: "",
    price: "",
    link: "",
    description: "",
    purchased: false,
  });

  // function to handle event listening and setting state with list info
  const handleChange = (e) => {
    setItemDetails({
      ...ItemDetails,
      [e.target.name]: e.target.value,
      purchased: e.target.checked,
    });
  };

  // add items to list -- have items saved to state

  const handleAddItems = async () => {
    let listId = props.match.params.listId;
    try {
      const response = await axios.post(
        `http://localhost:3001/list/${listId}/item`,
        {
            title: ItemDetails.title,
            quantity: ItemDetails.quantity,
            price: ItemDetails.price,
            link: ItemDetails.link,
            description: ItemDetails.description,
            purchased: ItemDetails.purchased
        }
      )
      const result = response.data;
      console.log(result)
    } catch (err) {
      return null;
    }
  };

  return (
    <div>
      <h1>View List Component</h1>
      <input
        name="title"
        type="text"
        placeholder="Title"
        onChange={handleChange}
      ></input>
      <input
        name="quantity"
        type="number"
        placeholder="Quantity"
        onChange={handleChange}
      ></input>
      <input
        name="price"
        type="number"
        placeholder="Price"
        onChange={handleChange}
      ></input>
      <input
        name="link"
        type="text"
        placeholder="Link"
        onChange={handleChange}
      ></input>
      <textarea
        id="listDescription"
        name="description"
        rows="4"
        cols="50"
        placeholder="Anything you'd like us to know about this item? Do tell!"
        onChange={handleChange}
      ></textarea>
      <input
        type="checkbox"
        id="isPurchased"
        name="purchased"
        value={ItemDetails.purchased} // When checked needs to be true, when unchecked needs to be false
        onChange={handleChange}
      ></input>
      <label for="isPurchased"> Purchased</label> <br />
      <button onClick={handleAddItems}>Add item</button>
    </div>
  );
}

export default ViewList;
