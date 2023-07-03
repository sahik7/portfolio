import React from "react";

const Skills = () => {
  return (
    <section className="h-[1200px] text-white bg-cover bg-[url('https://i.ibb.co/K56Zc02/skills.jpg')]">
      <h2 className="text-center text-6xl font-bold pt-64">Skills</h2>
      <div className="grid w-5/6 mt-10 gap-12 mx-auto lg:grid-cols-2 grid-cols-1">
        {/* HTML skill 1 */}
        <div className="border border-green-600 flex items-center space-x-10">
          <div>
            <div className="border-4 border-white flex justify-center items-center rounded-full w-28 h-28">
              <img
                className="w-20 h-20 object-cover rounded-full"
                src="https://i.ibb.co/nCDB9G8/html5.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-semibold">HTML</h2>
          </div>
        </div>
        {/* CSS skill 1 */}
        <div className="border border-green-600 flex items-center space-x-10">
          <div>
            <div className="border-4 border-white flex justify-center items-center rounded-full w-28 h-28">
              <img
                className="w-20 h-20 object-cover rounded-full"
                src="https://i.ibb.co/xCT4S4q/css-3.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-semibold">CSS3</h2>
          </div>
        </div>
        {/* Javascript skill */}
        <div className="border border-green-600 flex items-center space-x-10">
          <div>
            <div className="border-4 border-white flex justify-center items-center rounded-full w-28 h-28">
              <img
                className="w-20 h-20 object-cover rounded-full"
                src="https://i.ibb.co/K7xTWk2/js.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-semibold">Javascript</h2>
          </div>
        </div>
        {/* React skill */}
        <div className="border border-green-600 flex items-center space-x-10">
          <div>
            <div className="border-4 border-white flex justify-center items-center rounded-full w-28 h-28">
              <img
                className="w-20 h-20 object-cover rounded-full"
                src="https://i.ibb.co/4RQcKDp/react.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-semibold">React Js</h2>
          </div>
        </div>
        {/* Express skill */}
        <div className="border border-green-600 flex items-center space-x-10">
          <div>
            <div className="border-4 border-white flex justify-center items-center rounded-full w-28 h-28">
              <img
                className="w-20 h-20 object-cover rounded-full"
                src="https://i.ibb.co/y50yp6k/express.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-semibold">Express Js</h2>
          </div>
        </div>
        {/* MongoDB skill */}
        <div className="border border-green-600 flex items-center space-x-10">
          <div>
            <div className="border-4 border-white flex justify-center items-center rounded-full w-28 h-28">
              <img
                className="w-20 h-20 object-cover rounded-full"
                src="https://i.ibb.co/FbW3xYY/mongoDB.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-semibold">MongoDB</h2>
          </div>
        </div>
        {/* Nodejs skill */}
        <div className="border border-green-600 flex items-center space-x-10">
          <div>
            <div className="border-4 border-white flex justify-center items-center rounded-full w-28 h-28">
              <img
                className="w-20 h-20 object-cover rounded-full"
                src="https://i.ibb.co/47m5vNp/nodejs.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-semibold">Node Js</h2>
          </div>
        </div>
        {/* Firebase skill */}
        <div className="border border-green-600 flex items-center space-x-10">
          <div>
            <div className="border-4 border-white flex justify-center items-center rounded-full w-28 h-28">
              <img
                className="w-20 h-20 object-cover rounded-full"
                src="https://i.ibb.co/P1dcLZ9/firebase.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-semibold">Firebase</h2>
          </div>
        </div>
        {/* Tailwind skill */}
        <div className="border border-green-600 flex items-center space-x-10">
          <div>
            <div className="border-4 border-white flex justify-center items-center rounded-full w-28 h-28">
              <img
                className="w-20 h-20 object-cover rounded-full"
                src="https://i.ibb.co/dk43qnV/tailwind-css.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-semibold">Tailwind CSS</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
