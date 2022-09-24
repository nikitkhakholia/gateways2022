import React from "react";

export default function AboutDepartment() {
  return (
    <div>
      <img className="w-100" src={require("./assets/about2.png")} alt="..." />
      <div className="p-3">
        <h1 className="tw-text-4xl tw-font-bold">
          Department of Computer Science{" "}
        </h1>
        <p className="tw-text-lg tw-text-justify">
          The Department of Computer Science of CHRIST (Deemed to be University)
          strives to shape outstanding computer professionals with ethical and
          human values to reshape the nation's destiny. The training imparted
          aims to prepare young minds for the challenging opportunities in the
          IT industry with a global awareness rooted in Indian values.
          <br />
          <br />
          The department was established in the year 1990, with a curriculum in
          line with industry expectations and research. The department also
          provides opportunities to work on collaborative projects with industry
          and international universities; faculty expertise in recent
          technologies and alumni support are some of the department highlights.
          The Department has always endeavoured towards attuning students with
          the required technical and soft skills, to adapt to the rapid
          development in the field of IT and research.
          <br />
          <br />
          The course contents are periodically updated for introducing new
          scientific and technological developments. Students are encouraged to
          undertake various research projects, internships, fests and
          competitions. The department maintains active research clusters for
          carrying out collaborative and interdisciplinary research. Several
          faculty members serve on the editorial boards and act as reviewers of
          national and international journals. The department also regularly
          organisee national and international symposia and conferences, and the
          PhD scholars of the department often conduct webinars and technical
          talks under the umbrella of the ACM student chapter to be at par with
          the latest research updates.
        </p>
      </div>
    </div>
  );
}
