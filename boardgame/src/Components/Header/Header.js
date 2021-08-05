import React from "react";

function Header({ pick }) {
  return (
    <div>
      <label htmlFor="chars">Karakter Seçiniz</label>
      <br></br>
      <select onChange={(e) => pick(e)} name="chars" id="chars">
        <option value="mario">Mario</option>
        <option value="batman">Batman</option>
      </select>
    </div>
  );
}

export default Header;
