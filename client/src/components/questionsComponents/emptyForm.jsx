import React from 'react';

const firstQ = () => {
  return (
    <form>
      <label>
        Add a new Question:
        <input type="text" name="Question" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};