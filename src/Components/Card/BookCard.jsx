import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
const BookCard = ({ id, titulo, imagen, autor, materia }) => {
  return (
    <>
      {/* <hr />
      <h1>{titulo}</h1>
      <img src={imagen} alt={titulo} />
      <p>{autor}</p>
      <button>
        <Link to={`/detail/${id}`}>ver mas</Link>
      </button>
      <hr /> */}

      {/* <div class="main" >
        
        <ul class="cards">
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <img src={imagen} alt={titulo} />
              </div>
              <div class="card_content">
                <h2 class="card_title">{titulo}</h2>
                <p class="card_text">{materia}</p>
                <button class="btn card_btn">
                  <Link to={`/detail/${id}`}>Detalles</Link>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div> */}

      <table>
        <caption>Team Information</caption>
        <thead>
          <tr class="thead">
            <th scope="col">Name</th>
            <th scope="col">Title</th>
            <th scope="col">Website</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Name">Jeevan Kumar</td>
            <td data-label="Title">Front-end Expert</td>
            <td data-label="Website">jeevankaree.com</td>
            <td data-label="Role">Admin</td>
          </tr>
          <tr>
            <td scope="row" data-label="Name">
              Lindsay Walton
            </td>
            <td data-label="Title">Designer</td>
            <td data-label="Website">lindawalton.com</td>
            <td data-label="Role">Member</td>
          </tr>
          <tr>
            <td scope="row" data-label="Name">
              Tom Cook
            </td>
            <td data-label="Title">Marketer</td>
            <td data-label="Website">tom.in</td>
            <td data-label="Role">Admin</td>
          </tr>
          <tr>
            <td scope="row" data-label="Name">
              Floyd Miles
            </td>
            <td data-label="Title">Principal Designer</td>
            <td data-label="Website">floydmiles.com</td>
            <td data-label="Role">Member</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default BookCard;
