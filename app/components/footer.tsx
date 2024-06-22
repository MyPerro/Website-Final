'use client';
import React from 'react';

function Footer() {
  return (
    <div className="flex flex-col footerpage">
      <form method="#">
        <div className="flex flex-row px-20 pt-10">
          <div className="text-4xl font-bold footerspace">
            <h1>Say Hello</h1>
          </div>
          <div className="ml-4 flex flex-col footerspace">
            <div>
              <input className="rounded-md footerwidth" type="email" placeholder="Your E-mail ID" />
            </div>
            <div>
              <input className="mt-5 rounded-md footerwidth" type="text" placeholder="Your Mobile No." />
            </div>
          </div>
          <div>
            <textarea className="rounded-md footerwidth footerspace" placeholder="Message For Us" rows={3} />
          </div>
          <div>
            <input className="btn w-20 bg-orange-600 text-white rounded-md mt-11" type="Submit" placeholder="Share" />
          </div>
        </div>
      </form>
      <div className="p-10">
        <hr className="mb-5 border-t-2 border-black" />
        <div className="px-20 flex flex-row justify-between">
          <div>
            <h2>Support</h2>
          </div>
          <div>
            <h2 className="appname">Contact Us</h2>
          </div>
        </div>
        <hr className="mt-5 mb-5 border-t-2 border-black" />
        <div className="mt-5 px-20 flex flex-row justify-between">
          <div>
            <h2>Connect</h2>
          </div>
          <div className="flex flex-row">
            <span className="mr-4 appname">Linkedin</span>
            <span className="mr-4 appname">Instagram</span>
            <span className="appname">X</span>
          </div>
        </div>
        <hr className="mt-5 mb-5 border-t-2 border-black" />
        <div className="mt-5 px-10 flex flex-row justify-between">
          <div>
            <img src="footerlogo.png" alt="hi" height="200" width="400" />
          </div>
          <div className="flex flex-col mt-11">
            <span className="mr-4">email@email.com</span>
            <span className="mr-4">Ph:- +91 12345675432 / 2435325</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
