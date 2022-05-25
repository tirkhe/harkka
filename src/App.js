import React, { useEffect, useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import User from "./components/User";

const App = () => {
  const [tuotteet, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("http://localhost:4000/tuotteet")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (name, email) => {
    await fetch("http://localhost:4000/tuotteet", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((tuotteet) => [...tuotteet, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id) => {
    await fetch(`"http://localhost:4000/tuotteet"${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            tuotteet.filter((user) => {
              return tuotteet.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(tuotteet);
  return (
    <div className="App">
      <h3>Varasto Luettelointi</h3>

      <br />
      <AddUser onAdd={onAdd} />
      <div>
        {tuotteet.map((user) => (
          <User
            id={user.id}
            key={user.id}
            name={user.name}
            email={user.email}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
