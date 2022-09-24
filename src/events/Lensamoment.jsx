import React from "react";

export default function Lensamoment() {
  return (
    <div>
      <div className="row m-4 p-4">
        <div className="col-lg-7 col-12 m-0 p-0">
          <h1 className="tw-text-4xl tw-font-bold">Lens a Moment</h1>
          <p className="tw-text-lg tw-text-justify">
            Photography is not just an art. It is the culmination of patience,
            hand, eye coordination, and one’s perspective. Can you freeze the
            perfect moment through your lens? If yes, here is an excellent
            opportunity for you. Click, caption, and win it!
            <br />
            <br />
            {new Date() > new Date(2022, 8, 23, 10, 30) && (
              <div>
                <strong>
                  Theme: Gen Z's the tech native vs Millennials the tech savvy.
                </strong>
                <br />
                <br />
              </div>
            )}
            <strong>Equipment: </strong>Any device to capture pictures (DSLR /
            mobile phone)
            <br />
            <br />
            <strong>Event Type: </strong>Individual
            <br />
            <br />
            <strong>Prize money: </strong>
            <ul style={{listStyleType:"circle"}} >
              <li>Winner-4000</li>
              <li>Runner - 2000</li>
            </ul>
            <br />
            <br />
            <strong>BASIC SUBMISSIONS GUIDELINES FOR PHOTOGRAPHS:</strong>
            <ol style={{listStyleType:"number"}}>
              <li>
                The contestants should submit 1 image with a unique caption
                based on the theme to the{" "}
                <a href="mailto:photographygateways22@gmail.com">
                  “photographygateways22@gmail.com”
                </a>
                . Captions should not be more than 2 sentences.
                <br />
                Subject should be{" "}
                <strong>
                  Lensamoment_Photography_NAME_COLLEGE_CLASS
                  <br />
                  Example: Lensamoment_Photography_ABC_CHRIST_4MCA
                </strong>
              </li>
              <li>
                Submissions will not be accepted once the deadline lapses.
              </li>
              <li>
                Photos must be in jpg or jpeg format. Each image should be
                submitted with this format{" "}
                <strong>
                  'name_college_class'. <br />
                  Example: Abc_christ_4mca.jpg or Abc_christ_4mca.jpeg
                </strong>
              </li>
              <li> All submitted photos must contain the original EXIF metadata information. However there must be no border(s), logo(s), copyright marks, identifying marks, or any other visible references and/or marks on the image.</li>
              <li>Submitted photos must be original, created and/or taken by the contestant. It must not contain any materials owned or controlled by a third party.</li>
              <li>Photos should not portray or otherwise include any inappropriate and/or offensive content.</li>
              <li>Photos should be clicked at the specified time itself.</li>
              <li>Winner and Runners photos will be displayed on the valedictory ceremony of gateways.</li>
            </ol>
            <br />
           
          
            <br />
            <strong> Timings and venue:</strong><br/>Report at 10.30 am, Central block  8th floor, room number-809.
            <br />
            <br />
            <strong> Contact</strong>
            <br />
            Harshita JP :9113582917 <br />
            Aakash :8127347519
          </p>
        </div>
        <div className="col-lg-5 col-12 tw-p-16">
          <img src={require("../assets/lens-a-moment.png")} alt="..." />
        </div>
      </div>
    </div>
  );
}
