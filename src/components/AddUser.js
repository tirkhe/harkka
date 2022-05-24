import React from "react";

const AddUser = ({ onAdd }) => {

const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value,e.target.email.value);
    e.target.name.value = "";
    e.target.email.value = "";
}

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <h3>Lisää tuote</h3>
        <input placeholder="Tuote" name="name" />
        <input placeholder="Hylly" name="email" />
        <button onSubmit={handleOnSubmit}>Lisää</button>
        <hr />
      </form>
    </div>
  );
};

export default AddUser;
