import React from "react";
import { AiFillBank } from "react-icons/ai";
import { AiOutlinePound } from "react-icons/ai";
import { AiFillCreditCard } from "react-icons/ai";
import { AiFillRest } from "react-icons/ai";

import{ useState } from 'react';

const endpointRoot = "http://127.0.0.1:5050/";

export default function CreateAccount() {
  const [showModal, setShowModal] = React.useState(false);

  /*
  const [formData, setFormData] = useState({
    accountName: '',
    accountType: '',
    remember: false,
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); // or send formData to your server or do whatever you want with it
  };
*/

  const [accountName, setAccountName] = useState('');
  const [accountType, setAccountType] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/user_create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ accountName, accountType })
    });
    const data = await response.json();
    console.log(data)
    // handle response
  }

  return (
    <>
      <button onClick={() => setShowModal(true)} className="sidebar-item" type="button">
        <AiFillBank color="white" size='20'/>
        <div className="text-white font-medium p-4">
          Create Account
        </div>
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Create Account
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form onSubmit={handleSubmit} id="CreateAccount">
                    {/*onSubmit={handleSubmit}*/}
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                    </div>
                    <div className="mb-6">
                      <label htmlFor="account name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Account Name</label>
                      <input type="account name" id="account name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Personal Account" required></input>
                    </div> 
                    <div className="mb-6">
                        <label htmlFor="account_type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Account Type</label>
                        <select id="account_type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                          <option selected>Current</option>
                          <option value="CA">Savings</option>
                          <option value="FR">Business</option>
                          <option value="DE">Child</option>
                          <option value="DE">Student</option>
                        </select>
                      </div>
                    <div className="flex items-start mb-6">
                      <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required></input>
                      </div>
                      <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-black-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                    </div>
                    <button type="submit" className="text-white bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Create</button>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
              
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );

}

export function SwitchAccount() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)} className="sidebar-item" type="button">
        <AiFillRest color="white" size='20'/>
        <div className="text-white font-medium p-4">
          Switch Account
        </div>
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Delete Account
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form id="DeleteAccount">
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                    </div>
                    <div className="mb-6">
                        <label htmlFor="account_type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Account</label>
                        <select id="account_type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                          <option selected>Current</option>
                          <option value="CA">Savings</option>
                          <option value="FR">Business</option>
                          <option value="DE">Child</option>
                          <option value="DE">Student</option>
                        </select>
                      </div>
                    <div className="flex items-start mb-6">
                      <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required></input>
                      </div>
                      <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-black-300">Are you sure you want to delete this account?</label>
                    </div>
                    <button type="submit" className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete</button>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
              
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export function DeleteAccount() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)} className="sidebar-item" type="button">
        <AiFillRest color="white" size='20'/>
        <div className="text-white font-medium p-4">
          Delete Account
        </div>
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Delete Account
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form id="DeleteAccount">
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                    </div>
                    <div className="mb-6">
                        <label htmlFor="account_type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Account</label>
                        <select id="account_type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                          <option selected>Current</option>
                          <option value="CA">Savings</option>
                          <option value="FR">Business</option>
                          <option value="DE">Child</option>
                          <option value="DE">Student</option>
                        </select>
                      </div>
                    <div className="flex items-start mb-6">
                      <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required></input>
                      </div>
                      <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-black-300">Are you sure you want to delete this account?</label>
                    </div>
                    <button type="submit" className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete</button>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
              
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}


export function AddFunds() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)} className="sidebar-item" type="button">
        <AiOutlinePound color="white" size='20'/>
        <div className="text-white font-medium p-4">
          Add Funds
        </div>
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Add Funds
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form id="AddFunds">
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                    </div>
                    <div className="mb-6">
                        <label htmlFor="account_type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Account</label>
                        <select id="account_type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                          <option selected>Current</option>
                          <option value="CA">Savings</option>
                          <option value="FR">Business</option>
                          <option value="DE">Child</option>
                          <option value="DE">Student</option>
                        </select>
                      </div>
                    <div className="mb-6">
                      <label htmlFor="account name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Amount</label>
                      <input type="number" id="account name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="100" required></input>
                    </div>
                    <button type="submit" className="text-white bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Transfer</button>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
              
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

interface TransferValues {
  to: string;
  from: string;
  amount: number;
}

export function TransferMoney() {
  const [showModal, setShowModal] = React.useState(false);

  const [values, setValues] = useState<TransferValues>({ to: '', from: '', amount: 0 });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(endpointRoot + 'user_create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await response;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };
  return (
    <>
      <button onClick={() => setShowModal(true)} className="sidebar-item" type="button">
        <AiFillCreditCard color="white" size='20'/>
        <div className="text-white font-medium p-4">
          Transfer Money
        </div>
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Transfer Money
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                    </div>
                    <div className="mb-6">
                        <label htmlFor="account_type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">To</label>
                        <select name="from" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                          <option selected value="" disabled>Current</option>
                          <option value="SA">Savings</option>
                          <option value="BS">Business</option>
                          <option value="CH">Child</option>
                          <option value="ST">Student</option>
                        </select>
                      </div>
                    <div className="mb-6">
                        <label htmlFor="account_type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">From</label>
                        <select name="to" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                          <option selected value="" disabled>Current</option>
                          <option value="SA">Savings</option>
                          <option value="BS">Business</option>
                          <option value="CH">Child</option>
                          <option value="ST">Student</option>
                        </select>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="account name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Amount</label>
                      <input onChange={handleChange} name="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="100" required></input>
                    </div> 
                    <button type="submit" className="text-white bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Transfer</button>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
              
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
