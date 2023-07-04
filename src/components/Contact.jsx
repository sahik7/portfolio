import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="lg:h-[500px] text-white bg-cover bg-[url('https://i.ibb.co/K56Zc02/skills.jpg')] ">
      <h2 className="text-center text-6xl font-bold pt-32">Get in Touch</h2>
      <p className="text-md text-redOrange text-center mt-8">
        Feel free to reach out to me using the contact details below:
      </p>
      <ul className="flex gap-10 justify-center mt-10 text-md font-semibold">
        <li>Email: yourname@example.com</li>
        <li>Phone: (123) 456-7890</li>
        <li>Address: 123 Main Street, City, State, Country</li>
      </ul>
      <form onSubmit={handleSubmit} className="text-center space-x-2 mt-8">
        <input
          className="px-4 py-2 rounded text-black"
          type="email"
          placeholder="Email"
        />
        <input
          className="px-4 py-2 rounded hover:bg-redOrange duration-200 font-bold text-black hover:text-white bg-white"
          type="submit"
          value="get started"
        />
      </form>
    </section>
  );
};

export default Contact;
