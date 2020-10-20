import React, { Component } from "react";
import "../../../css/portfolio.scss";

const Portfolio = () => {
  return (
    <React.Fragment>
      <main>
        <div
          style={{
            width: "100%",
            height: "400px",
            background:
              "url(https://pm1.narvii.com/6484/c0636108d387d4859371b96b0892a42425a2ed0f_00.jpg) center center no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="container icons">
          <div
            style={{
              width: "180px",
              height: "180px",
              background:
                "url(http://simplyleonardodicaprio.com/wp-content/uploads/leo-1.jpg) center top",
              backgroundSize: "140%",
              borderRadius: "50%",
              border: "2px solid white",
              marginTop: "-90px",
            }}
          ></div>
        </div>
        <div className="details">
          <h3>Leonardo DiCaprio</h3>
          <p>Actor / Environmentalist</p>
        </div>
        <div className="container bio">
          <div className="title">
            <h6>Biography</h6>
          </div>
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              officiis fugit hic vel voluptates perferendis aut quibusdam sit
              omnis unde aspernatur quae repellat blanditiis autem, a libero
              asperiores neque illum aliquid est tempore. Eveniet velit
              voluptate amet facere, repellendus aperiam, cumque est ipsam.
              Asperiores expedita iusto, inventore sit suscipit nihil
              repudiandae? Laboriosam cum maxime dolorem neque, in veniam
              expedita ad. Hic fugit necessitatibus blanditiis, optio
              dignissimos molestiae nam, numquam odio.
            </p>
          </div>
          <hr />
        </div>
      </main>
    </React.Fragment>
  );
};

export default Portfolio;
