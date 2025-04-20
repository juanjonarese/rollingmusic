import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SongScreen = () => {
  const { id } = useParams();
  console.log(id);
  const [song, setSong] = useState(null);

  useEffect(() => {
    const downsongs = JSON.parse(localStorage.getItem("songs")) || [];
    setSong(downsongs);
    console.log(downsongs);
  }, []);

  return (
    <div>
      <h1>Tu canción seleccionada</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongScreen;
