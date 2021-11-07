import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("http://localhost:5000/api/get-all")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };

  const handleSubmit = () => {
    const body = {
      name: name,
      age: age,
      address: address,
      phone: phone,
    };

    fetch("http://localhost:5000/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/api/message/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.text()) // or res.json()
      .then((res) => console.log(res));
  };

  return (
    <div className="App">
      {console.log(data)}
      <div className="container">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="row">
            <div className="col-sm-12">
              <div className="col-sm-12">
                <h2
                  style={{
                    marginTop: "5%",
                    marginBottom: "5%",
                    textAlign: "center",
                  }}
                >
                  Enter Customer Details
                </h2>
              </div>

              <form className="form">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="age">Age</label>
                    <input
                      type="number"
                      className="form-control"
                      id="age"
                      placeholder="Age"
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="adress">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="Adress"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="phone">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="Phone"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Save Details
                </button>
              </form>

              <div className="col-sm-12">
                <h2
                  style={{
                    marginTop: "5%",
                    marginBottom: "5%",
                    textAlign: "center",
                  }}
                >
                  Customer List
                </h2>
              </div>

              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => {
                    return (
                      <tr scope="row">
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.address}</td>
                        <td>{item.phone}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleDelete(item._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
