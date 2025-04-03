import React from "react";

const Team = () => {
  return (
    <div className="container">
      <div className="row text-center">
        <h1>People</h1>
      </div>
 
      <div className="row p-5 text-muted">
        <div className="col-12 col-lg-6 px-5 text-center d-flex flex-column align-items-center">
          <img src="/media/Images/founder.jpg" alt="founder" style={{width:"300px", height:"300px", borderRadius:"50%", objectFit:"cover"}}/>
          <h4 className="mt-3">Akhilesh Talekar</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-12 col-lg-6 d-flex align-items-center mt-5 mt-lg-0 text-center text-lg-start">
          <p>
          Akhilesh founded Prospera in 2024 to overcome the hurdles he faced during his decade long stint as a trader. Today, Prospera has changed the landscape of the Indian broking industry.<br/><br/>

          He is a student of Vishwakarma Institute of Technology(VIIT) and vice president of Office of international relation(OIR) committee.<br/><br/>

          Playing chess is his zen.<br/><br/>

          Connect on <a href="" className="text-decoration-none">Homepage</a> / <a href="" className="text-decoration-none">TradingQnA</a> / <a href="" className="text-decoration-none">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
