import React from "react";

const Footer = () => {
  return (
    <section className="bg-slate-900 mt-[5%] py-12">
      <div className="w-11/12 m-auto">
        <h2 className="text-white font-bold text-2xl">If you have any queries feel free to ask here.</h2>

        <form className="pt-12 w-2/4">
                    <div className="pt-4">
                        <label htmlFor="name" className="text-white inline-block pb-2">Name:</label>
                        <input type="text" name="user_name" id="name" className="w-full p-4 text-base rounded-lg outline-none" placeholder='Enter your name'/>
                    </div>

                    <div className="pt-4">
                        <label htmlFor="email" className="text-white inline-block pb-2">Email:</label>
                        <input type="email" name="user_email" id="email" className="w-full p-4 text-base rounded-lg outline-none" placeholder="Enter your Email" />
                    </div>

                    <div className="pt-4">
                        <label htmlFor="query" className="text-white inline-block pb-2">Query:</label>
                        <textarea className="w-full p-4 text-base rounded-lg outline-none" name="message" id="query" placeholder='Type your Query'></textarea>
                    </div>

                    <div className="pt-4 ">
                        <input type="submit" value="Submit" className="text-white bg-[#fa7727] hover:bg-[#f08f53] transition duration-150 ease-in py-2 px-8 inline-block rounded-lg" />
                    </div>
        </form>

        <p className="text-white pt-8 text-base">&copy; 2023 BookWorld. All Rights Reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
