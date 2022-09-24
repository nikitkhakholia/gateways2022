import React from 'react'

export default function AboutGAteways() {
  return (
    <div>
     
      <img
        className="w-100 bg-white"
        src={require("./assets/cognitiveescapade.png")}
        alt="..."
      />
      <div className="p-3">
        <h1 className="tw-text-4xl tw-font-bold">Gateways 2022</h1>
        <p className="tw-text-lg tw-text-justify">
          Gateways is the national technical fest held annually for over 25
          years by the Department of Computer Science of Christ (Deemed to be
          University), Bangalore. Helmed by students of the post-graduate MCA
          (Master of Computer Applications) course, it aims to be at the
          forefront of innovation and collaboration, with new ideas and events
          being presented each year.
          <br />
          <br />
          We invite colleges from all over India, with enthusiastic
          participation from all those who join us for this gathering of minds.
          An essential part of Gateways is its robust and dynamic theme which
          reflects both the trends of the present, as well as the history
          carried by the discipline.
          <br />
          <br />
          The theme of “Back to the Future” signifies a harmonious amalgamation
          of the past and the future, of the old and new, of the then and the
          now. How do we implement current technology to solve the problems of
          yesteryear? How can the lessons learnt in the past help us with our
          current technological progress? These are questions we intend to
          explore and hopefully find answers for with this theme.
          <br />
          <br />
          Bring together the past and the future of computing and technology,
          with Notepad coding and MS paint drawing. Look back to the beginning
          to get guidance on the next step. Take your mind on a journey of
          learning, of using technology like the previous generation would have,
          to tackle the problems of this one.
        </p>
      </div>
    </div>
  )
}
