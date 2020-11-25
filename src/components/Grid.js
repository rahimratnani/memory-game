import React from "react";

export default function Grid(props) {
  const { images } = props;
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline is-mobile">
          {/* Card */}

          {images.map((image) => {
            return (
              <div key={image.id} className="column is-half-mobile is-4-tablet">
                <div className="box p-2">
                  <article className="media">
                    <div className="media-content">
                      <figure className="image is-480x480">
                        <img
                          src={image.img}
                          alt=""
                          className="card"
                          data-target={image.id}
                        />
                      </figure>
                    </div>
                  </article>
                </div>
              </div>
            );
          })}

          {/* *********************** */}
        </div>
      </div>
    </section>
  );
}
