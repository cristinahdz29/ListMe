import React, { useEffect, useState } from "react";
import axios from "axios";

function ViewList({ match }) {
  const listId = match.params.listId;
  const [ItemDetails, setItemDetails] = useState({
    title: "",
    quantity: "",
    price: "",
    link: "",
    description: "",
    purchased: false,
  });

  // state for list details
  const [listDetails, setListDetails] = useState({});

  // state for items

  const [items, setItems] = useState([]);

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
    try {
      const response = await axios.post(
        `http://localhost:3001/list/${listId}/items`,
        {
          title: ItemDetails.title,
          quantity: ItemDetails.quantity,
          price: ItemDetails.price,
          link: ItemDetails.link,
          description: ItemDetails.description,
          //purchased: ItemDetails.purchased,
        }
      );
      const result = response.data;
      console.log(result);
       await fetchItems()
    } catch (err) {
      return null;
    }
  };

  // function to get list details
  const fetchListDetails = async () => {
    const response = await axios.get(`http://localhost:3001/list/${listId}`);
    const result = response.data;
    //console.log(result);
    await setListDetails(result);
  };

  // function to fetch list items
  const fetchItems = async () => {
    const response = await axios.get(
      `http://localhost:3001/list/${listId}/items`
    );
    const result = response.data;
    console.log(result)
    setItems(result)
  };

  const handleDelete = async (itemId) => {
      await axios.delete(`http://localhost:3001/lists/${listId}/items/${itemId}`)
      await fetchItems();
  }

  useEffect(() => {
    fetchListDetails();
    fetchItems();
  }, []);

    console.log(items)
  return (
    <div>
      <div className="HeadingDiv">
        <h2>{listDetails.title} - Title</h2>
        <h4>{listDetails.event} - Event</h4>
        <h4>{listDetails.event_date} - Event Date</h4>
        <h4>{listDetails.description} - List Description</h4>
      </div>
      <div className='inputDiv'>
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
        {/* <input
          type="checkbox"
          id="isPurchased"
          name="purchased"
          value={ItemDetails.purchased} // When checked needs to be true, when unchecked needs to be false
          onChange={handleChange}
        ></input> */}
        {/* <label for="isPurchased"> Purchased</label> <br /> */}
        <br />
        <button onClick={handleAddItems}>Add item</button>
      </div>
      <div className='itemDisplayDiv'>
        {items.map(item => (
            <div key={item.item_id}>
                {item.title} - {item.price} - {item.link} - {item.description} - {item.quantity} - {(item.purchased).toString()}
                <button onClick={() => handleDelete(item.item_id)}>Delete</button>
            </div>
        ))}
      </div>
    </div>
  );
}

export default ViewList;
