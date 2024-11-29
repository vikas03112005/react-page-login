import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Ser from '../img/recruitment.gif'
import "../App.css"
export default function History() {
  const [apiData, setApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // Set the number of items per page//
  const [itemsPerPage, setItemsPerPage] = useState(10); 
  const [search, setSearch]= useState("")

  function getData() {
    axios.get('https://656b20fadac3630cf727baa7.mockapi.io/crud-form')
      .then((response) => {
        setApiData(response.data);
      })
      .catch((err) => {
        window.alert(err);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://656b20fadac3630cf727baa7.mockapi.io/crud-form/${id}`)
      .then(() => {
        getData();
      })
      .catch((err) => {
        window.alert(err);
      });

      
  }

  function setDataToStorage(id, name, lastname, fathername, date, number, altnumber, gender,student) {
    localStorage.setItem('id', id);
    localStorage.setItem('name', name);
    localStorage.setItem('lastname', lastname);
    localStorage.setItem('fathername', fathername);
    localStorage.setItem('date', date);
    localStorage.setItem('number', number);
    localStorage.setItem('altnumber', altnumber);
    localStorage.setItem('gender', gender);
    localStorage.setItem('student', student);
   
  }

  useEffect(() => {
    getData();
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(apiData.length / itemsPerPage);

  // Generate an array of page numbers for pagination
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  // Calculate the index of the last item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  // Calculate the index of the first item on the current page
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Get the current page of items
  const currentItems = apiData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <div className="newdata mb-3 mt-3">
        <Link to="/">
          <td>
            <button className="btn btn-primary">Create New data</button>
          </td>
        </Link>

        <img src={Ser} alt="" width={"30px"} id='searchicon'/>
        <input type="search" className="form-control " placeholder='search Name' id='search' onChange={(e)=>setSearch(e.target.value)} />
     
      </div>

      <table className="table table-striped table-dark table-hover">
     
        <thead>

          <tr>
            <th scope="col">ID</th>
            <th scope="col">Firstname</th>
            <th scope="col">LastName</th>
            <th scope="col">FatherName</th>
            <th scope="col">Date</th>
            <th scope="col">Number</th>
            <th scope="col">AltNumber</th>
            <th scope="col">Gender</th>
            <th scope="col">Who</th>
            
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.filter((item) => {
           return search.toLowerCase()===""?item:item.e_name.toLowerCase().includes(search)
          })
          .map((item) => {
            return (
              <>
                {/* ... Table rows ... */}
                <tr>

                  <td>{item.id}</td>
                  <td>{item.e_name}</td>
                  <td>{item.e_lastname}</td>
                  <td>{item.e_father}</td>
                  <td>{item.e_date}</td>
                  <td>{item.e_number}</td>
                  <td>{item.e_altnumber}</td>
                  <td>{item.e_gender}</td>
                  <td>{item.e_student}</td>
               
                  <td>  <Link to='/Edite'><button className='btn btn-primary' onClick={() => setDataToStorage(item.id, item.e_name, item.e_lastname, item.e_father, item.e_date, item.e_number, item.e_altnumber, item.e_gender, item.e_parent)}>Edit</button></Link> </td>
                  <td><button className='btn btn-danger' onClick={() => { if (window.confirm("comform to delet your data ?")) { handleDelete(item.id) } }}>Delete</button></td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>

      {/* Pagination buttons */}
      <div className="page-btn">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button className="page-link" onClick={() => setCurrentPage(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

