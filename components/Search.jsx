import React, { useRef } from 'react';
function Search({ filterUpdate }) {
  const input = useRef(null);

  function handleChange() {
    filterUpdate(input.current.value);
  }

  return (
    <form>
      <input 
        type="text"
        placeholder="Type to Filter"
        ref={input}
        onChange={handleChange}
      />
    </form>
  );
}
export default Search;
