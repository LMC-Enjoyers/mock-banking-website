import React from "react";
import { AiFillBank } from "react-icons/ai";
export default function ModalAccount() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)} className="block text-white bg-black-700 hover:bg-black-800 focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-black-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800" type="button">
        <AiFillBank color="white" size='20'/>
        <div className="text-white font-medium p-4">
          Create Account
        </div>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
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
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    <form>
                      <div className="mb-6">
                        <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Account Name</label>
                        <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Personal Account" required></input>
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
                      
                      <div className="w-full max-w-screen-xl mx-auto px-6">
        <div className="flex justify-center p-4 px-3 py-10">
            <div className="w-full max-w-md">
                <div className="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
                    <div className="block text-gray-700 text-lg font-semibold py-2 px-2">
                        Item List
                    </div>
                    <div className="flex items-center bg-gray-200 rounded-md">
                        <div className="pl-2">
                            <svg className="fill-current text-gray-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path className="heroicon-ui"
                                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                            </svg>
                        </div>
                        <input
                            className="w-full rounded-md bg-gray-200 text-gray-700 leading-tight focus:outline-none py-2 px-2"
                            id="search" type="text" placeholder="Search teams or members"></input>
                    </div>
                    <div className="py-3 text-sm">
                        <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                            <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
                            <div className="flex-grow font-medium px-2">Tighten Co.</div>
                            <div className="text-sm font-normal text-gray-500 tracking-wide">Team</div>
                        </div>
                        <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                            <span className="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
                            <div className="flex-grow font-medium px-2">Taylor Otwell</div>
                            <div className="text-sm font-normal text-gray-500 tracking-wide">Member</div>
                        </div>
                        <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                            <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
                            <div className="flex-grow font-medium px-2">Adam Wathan</div>
                            <div className="text-sm font-normal text-gray-500 tracking-wide">Member</div>
                        </div>
                        <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                            <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
                            <div className="flex-grow font-medium px-2">Duke Street Studio Inc.</div>
                            <div className="text-sm font-normal text-gray-500 tracking-wide">Team</div>
                        </div>
                        <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                            <span className="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
                            <div className="flex-grow font-medium px-2">Jeffrey Wey</div>
                            <div className="text-sm font-normal text-gray-500 tracking-wide">Member</div>
                        </div>
                    </div>
                    <div className="block bg-gray-200 text-sm text-right py-2 px-3 -mx-3 -mb-2 rounded-b-lg">
                        <button className="hover:text-gray-600 text-gray-500 font-bold py-2 px-4">
                            Cancel
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Invite
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
                      <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                          <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required></input>
                        </div>
                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-black-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                      </div>
                      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Canncel
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Create
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
