module.exports = (item) => {
  return {
    item_id: item.item_id,
    title: item.title,
    description: item.description,
    quantity: item.quantity,
    price: item.price,
    link: item.link,
    purchased: item.purchased,
    list_id: item.list_id
  };
};
