import React, { useEffect, useState } from "react";
import { URL_BASE } from "../../Config/URL_BASE";
import BookCard from "../../Components/Card/BookCard";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
const Home = () => {
  const [url, setUrl] = useState(`${URL_BASE}/archivo/`);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [actualPage, setActualPage] = useState(null);
  const [data, setData] = useState({
    loading: true,
    results: [],
  });
  const getLibros = async () => {
    const token = localStorage.getItem("token");

    const request = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });
    const response = await request.json();
    console.log(response);
    setNextPage(response.info.next);
    setPrevPage(response.info.prev);
    setActualPage(response.info.page_number);
    setData({
      loading: false,
      results: response.results,
    });
  };
  const { loading, results } = data;

  const handlePrevPage = () => {
    if (prevPage !== null) {
      setUrl(prevPage);
    }
  };
  const handleNextPage = () => {
    if (nextPage !== null) {
      setUrl(nextPage);
    }
  };
  useEffect(() => {
    getLibros();
  }, [url]);

  return (
    <>
      <Navbar />

      <div className="main-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table>
            <caption>Lista de archivos</caption>
            <thead>
              <tr className="thead">
                <th scope="col">titulo</th>
                <th scope="col">materia</th>
                <th scope="col">autor</th>

                <th scope="col">fecha de publicacion</th>
                <th scope="col">ver mas ...</th>
              </tr>
            </thead>
            <tbody>
              {results.map((item) => (
                <tr key={item.id}>
                  <td data-label="Name">{item.titulo}</td>
                  <td data-label="Title">{item.materia}</td>
                  <td data-label="Website">{item.autor}</td>

                  <td data-label="Role">{item.fecha_publicacion}</td>
                  <td data-label="Role"><Link to={`/detail/${item.id}`}>Detalles</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <br></br>

        <form className="form-pagina">
          <button className="button-prev" onClick={handlePrevPage}>
            Anterior
          </button>
          <label className="label-pagina">Pagina actual: {actualPage}</label>
          <button className="button-next" onClick={handleNextPage}>
            Siguiente
          </button>
        </form>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Home;
