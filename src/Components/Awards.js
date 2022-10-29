import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAward } from "@fortawesome/free-solid-svg-icons";
// import image from '../Assets/profile.jpg';
import image1 from '../Assets/im1.jpg'
import image2 from '../Assets/im2.jpg'
import image3 from '../Assets/im3.jpg'

class Awards extends Component {
  constructor(props) {
    super(props);

    this.awards = props.awards;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
        <div className="w-100">
          <h2 className="mb-5">Achievements &amp; Certifications</h2>
          <ul className="row justify-content-between  ">
          {/* {
            this.awards.map((data, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={faAward} color="#ffc107" />
                <span className="ml-2"> HI </span>
              </li>
            ))
          } */}

          <img src={image1} alt="" width={350} height={350}></img>
          <img src={image2} alt="" width={350} height={350}></img>
          <img src={image3} alt="" width={350} height={350}></img>
          </ul>
        </div>
      </section>
    );
  }
}

export default Awards;
