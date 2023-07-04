import React from "react";

const Projects = () => {
  return (
    <section className="lg:h-[1200px] text-white bg-cover bg-[url('https://i.ibb.co/K56Zc02/skills.jpg')]">
      <h2 className="text-center text-6xl font-bold pt-32">Projects</h2>
      <div className="grid lg:grid-cols-3 lg:gap-y-0 gap-y-32 grid-cols-1 gap-x-10 w-10/12 mx-auto mt-40">
        <div>
          <img src="https://i.ibb.co/gWgcYgs/vehicle-funland-ss.jpg" alt="" />
          <h3 className="text-2xl font-bold mt-5">Vehicle Funland</h3>
          <p className="text-sm text-redOrange">Single Page Application</p>
          <ul className="text-sm mt-5 text-slate-300">
            <li>
              Google Login - We allow users to access their data by login with
              their email and password but also with their google account which
              reduce the hassle for user.
            </li>
            <li>
              Add and Update - A user can able to add their own products and
              update their details whenever they wish.
            </li>
            <li>
              Sub Category - It allows user to look through their favorite
              products by their category without login.
            </li>
          </ul>
        </div>
        <div>
          <img
            src="https://i.ibb.co/ZMnD3Kw/Melodious-Academy-of-Music.jpg"
            alt=""
          />
          <h3 className="text-2xl font-bold mt-5">The MAOM</h3>
          <p className="text-sm text-redOrange">Single Page Application</p>
          <ul className="text-sm mt-5 text-slate-300">
            <li>
              Multi User Friendly - In a single website Admin, Student and
              Instructors can easy manage their music related tasks.
            </li>
            <li>
              Easy Payment - Student can pay easily for their classes and get
              instant update of their payment history and enrolled classes in a
              list by the help of stripe payment gateway.
            </li>
            <li>
              Easy Data Input - An instructor can easily provide the data of
              their classes to add one and user can easily sign in or register
              as react-form-hook maintain all the hassle in the background.
            </li>
          </ul>
        </div>
        <div>
          <img src="https://i.ibb.co/TKK65qy/recipe-website-ss.jpg" alt="" />
          <h3 className="text-2xl font-bold mt-5">Recipe Fusion</h3>
          <p className="text-sm text-redOrange">Single Page Application</p>
          <ul className="text-sm mt-5 text-slate-300">
            <li>
              HomePage : The homepage is very user-friendly to use. It contains
              a list of Chefs, A shop section and a section which represents
              ourselves.
            </li>
            <li>
              Protected Pages : The website is protected for few pages such as
              Recipe of the chefs. A user have to login to visit this page
              otherwise it will redirect the user to the login page.
            </li>
            <li>
              Add to Favorite : There is a add to favorite button in the recipe
              page, which show a toast after clicking the button and disabled
              it.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
