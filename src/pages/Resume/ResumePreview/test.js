import React from 'react';

const Resume = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="resume-container w-full bg-white shadow-lg p-6">
        {/* Top Section */}
        <div className="flex justify-between mb-6">
          {/* Left Column */}
          <div className="flex flex-col space-y-4">
            <div>
              <h1 className="text-4xl font-bold">Christopher Gonan</h1>
              <p className="text-xl text-gray-500">Psychologist</p>
            </div>
            <div className="text-gray-700">
              <p>cg12@yahoo.com</p>
              <p>(405) 741-5183</p>
              <p>32600 42nd Ave SW, Edmond, OK 73003</p>
              <p>United States</p>
            </div>
          </div>

          {/* Profile Image */}
          <div className="w-32 h-32 bg-blue-300 rounded-full overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="https://via.placeholder.com/150"
              alt="Profile"
            />
          </div>
        </div>

        {/* Profile Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Profile</h2>
          <p className="text-gray-700">
            Dedicated Psychologist with vast experience providing patients with innovative treatment to navigate psychological struggles. Committed to serving as an ongoing support through diagnosis evaluation, and implementation of treatment. Experienced in collaborating with other related service providers to ensure patients are supported wholly.
          </p>
        </div>

        {/* Employment History */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Employment History</h2>

          <div className="mb-6">
            <h3 className="text-lg font-bold">Psychologist at Edmond Counseling Center, Edmond</h3>
            <p className="text-sm text-gray-600">04/2017—04/2020</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              <li>Conducted thorough neurological assessments prior to treatment.</li>
              <li>Collaborated with multi-disciplinary teams to effectively coordinate patient care.</li>
              <li>Implemented treatments that decreased mental health issues and rehabilitation barriers.</li>
              <li>Studied human behavior and implemented short-term and long-term treatment plans.</li>
              <li>Utilized empathy and a strong attention to detail.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">Psychologist at East Way Healthcare Center, Savannah</h3>
            <p className="text-sm text-gray-600">06/2014—03/2017</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              <li>Provided behavioral health services to patients who experience psychological difficulties.</li>
              <li>Developed and implemented treatment plans to help patients live their healthiest life.</li>
              <li>Conducted thorough psychological screenings and assessments.</li>
              <li>Conferred with clinical staff to ensure optimal patient care.</li>
              <li>Demonstrated a thorough knowledge of psychological counseling theory.</li>
            </ul>
          </div>
        </div>

        {/* Skills and References Section */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Skills */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Skills</h2>
            <ul className="text-gray-700">
              <li>Neurological Assessments .............................. 5/5</li>
              <li>Cognitive Behavioral Therapy ...................... 5/5</li>
              <li>Advanced Research Skills ........................... 5/5</li>
              <li>Knowledge of Psychological Theory ....... 5/5</li>
            </ul>
          </div>

          {/* References */}
          <div>
            <h2 className="text-xl font-semibold mb-2">References</h2>
            <ul className="text-gray-700">
              <li>
                Dr. Gene Randolph from The University of Oklahoma <br />
                <span className="text-sm text-gray-600">grandolph@oklahoma.edu | 405-332-9800</span>
              </li>
              <li className="mt-4">
                Dr. Michelle Fortunato from East Way Healthcare Center <br />
                <span className="text-sm text-gray-600">fortunato.m@eastwayhealth.com | 405-328-3277</span>
              </li>
              <li className="mt-4">
                Manuel Rodrigo from Edmond Counseling Center <br />
                <span className="text-sm text-gray-600">mrodrigo@edmondcounsel.com | 405-548-3288</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          <p className="text-gray-700">
            <strong>Doctor of Psychology</strong>, The University of Oklahoma, Norman <br />
            09/2008—04/2014
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
