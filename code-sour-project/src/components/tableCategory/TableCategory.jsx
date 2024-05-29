
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const TableCategory = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchData("https://api-guest-noauth.codesour.com​/category/{id}");
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api-guest-noauth.codesour.com​/category/{id}');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreate = async () => {
    try {
      await fetch("https://api-guest-noauth.codesour.com/category/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      fetchData();
    } catch (error) {
      console.error('Error creating data: ', error);
    }
  };

  const handleUpdate = async (id, newData) => {
    try {
      await fetch(`https://api-guest-noauth.codesour.com//category/edit/{id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });
      fetchData();
    } catch (error) {
      console.error('Error updating data: ', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`https://api-guest-noauth.codesour.com​/category​/delete​/{id}`, {
        method: 'DELETE',
      });
      fetchData();
    } catch (error) {
      console.error('Error deleting data: ', error);
    }
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
           
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => handleUpdate(item.id, newData)}>Update</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="form-container">
        <h2>Create New</h2>
        <input type="text" name="name" placeholder="Name" onChange={handleInputChange} />
        <input type="text" name="description" placeholder="Description" onChange={handleInputChange} />
        <button onClick={handleCreate}>Create</button>
      </div>

      <Link to="/">Back to List</Link>
    </div>
  );
};

export default TableCategory;
