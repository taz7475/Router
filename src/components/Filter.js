/** @format */

import React from "react";
import Stars from "react-rating-stars-component";
import { Form, FormControl } from "react-bootstrap";

const Filter = ({ handleTitle, handleRate }) => {
  return (
    <div>
      <Form inline>
        <FormControl
          type="text"
          placeholder="search"
          onChange={e => handleTitle(e.target.value)}
        ></FormControl>

        <Stars
          count={5}
          onChange={handleRate}
          size={24}
          activeColor="#ffd700"
        />
      </Form>
    </div>
  );
};

export default Filter;
