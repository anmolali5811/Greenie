import React from 'react'

const Modal = ({ curUser, setCurUser }) => {
  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative min-w-[80%] md:min-w-[40%] sm:min-w-[60%] my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between pt-2 pb-1 ps-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-2xl font-semibold text-teal-500">
                ID - {curUser._id}
              </h3>
              <button onClick={() => setCurUser(false)} className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/*body*/}
            <div className="relative px-6 py-3 pb-5 flex-auto">
              <p className="text-gray-700 text-base">
                Username
              </p>
              <div className="pt-1 pb-1">
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-teal-500 mr-1 mb-1">{curUser.Username}</span>
              </div>
              <p className="text-gray-700 text-base">
                Email
              </p>
              <div className="pt-1 pb-1">
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-teal-500 mr-1 mb-1">{curUser.Email}</span>
              </div>
              <p className="text-gray-700 text-base">
                Phone
              </p>
              <div className="pt-1 pb-1">
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-teal-500 mr-1 mb-1">{curUser.Phone}</span>
              </div>
              <p className="text-gray-700 text-base">
              Created Date
              </p>
              <div className="pt-1 pb-1">
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-teal-500 mr-1 mb-1">{new Date(curUser.createdAt).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default Modal