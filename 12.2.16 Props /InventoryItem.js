function InventoryItem({
  name,
  type,
  quantity = 0,
  price = 0.0,
}) /* TODO: Take the props. Set defaults to the quantity. */ {
  return (
    <div>
      {/* <h2><!-- TODO: Render the item's details. --></h2> */}
      <h2>
        {name} ({type})
      </h2>
      {/* <!-- TODO: Render the low stock alert based on the quantity of the item. --> */}
      {quantity < 5 && (
        <Message>
          <span>⚠️ Low stock!</span> {quantity} remained.
        </Message>
      )}

      {/* <!-- TODO: Render the high value alert based on the total value of the item. --> */}
      {quantity * price > 1000 && (
        <Message>
          <span>"💰 High Value "</span> - consider extra protections!
        </Message>
      )}
    </div>
  );
}
