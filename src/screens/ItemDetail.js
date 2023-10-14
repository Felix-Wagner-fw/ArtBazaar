import React, { useEffect, useState } from 'react';

function ItemDetail({ match }) {
  const [item, setItem] = useState({});
  
  useEffect(() => {
    // Fetch item details from API or state management library
  }, [match.params.id]); // Run effect when component mounts and when id changes
  
  return (
    <div>
      <h1>{item.name}</h1>
      {/* Display other item details */}
    </div>
  );
}

export default ItemDetail;
