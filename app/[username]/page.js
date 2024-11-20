import React from 'react'

export const metadata = {
  title: 'mike', // Initialize the title as empty string
  description: 'This is the dashboard page for latte lovers.',
}
const Username = ({ params }) => {
  return (
    <>
      <div className="cover w-full relative">
        <img
          className="object-cover w-full h-[350px]"
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/2028698/51756355a5084c91883f7b920cf9b1d7/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/3.png?token-time=1717459200&token-hash=56Q9bUXf9b4Zm-kY7E5XTHEj2TbUd1FrzRL5SLBQY7I%3D"
          alt=""
        />
        <div className="absolute -bottom-14 right-[47%] rounded-lg">
          <img
            className="rounded-lg"
            width={100}
            height={100}
            src="https://miro.medium.com/v2/resize:fit:736/1*YqfVlyCe06DfcPsR3kpYrw.jpeg"
            alt=""
          />
        </div>
      </div>
      <div className="info flex justify-center items-center my-16 flex-col gap-2">
        <div className="">
          <h1 className="text-[36px] font-bold"> @{params.username}</h1>
        </div>
        <div className="text-slate-400">
          creating Music, science, and technology content.
        </div>
        <div className="text-slate-400">3,037 members &#x2022; 210 posts</div>
        <div className="payment flex gap-3 w-[80%] mt-20">
          <div className="supporters w-1/2 rounded-lg bg-slate-900 p-10">
            <h2 className="text-2xl font-bold my-5">Supporters</h2>
            <ul className="mx-5 text-lg">
              <li className="my-2 flex  gap-2 items-center">
                <img width={33} src="/Avatar.gif" alt="user avatar" />
                Henry donated <span className="font-bold">$30</span> with a
                message "I love this project! ❤️"
              </li>
              <li className="my-2 flex  gap-2 items-center">
                <img width={33} src="/Avatar.gif" alt="user avatar" />
                Henry donated <span className="font-bold">$30</span> with a
                message "I love this project! ❤️"
              </li>
              <li className="my-2 flex  gap-2 items-center">
                <img width={33} src="/Avatar.gif" alt="user avatar" />
                Henry donated <span className="font-bold">$30</span> with a
                message "I love this project! ❤️"
              </li>
              <li className="my-2 flex  gap-2 items-center">
                <img width={33} src="/Avatar.gif" alt="user avatar" />
                Henry donated <span className="font-bold">$30</span> with a
                message "I love this project! ❤️"
              </li>
              <li className="my-2 flex  gap-2 items-center">
                <img width={33} src="/Avatar.gif" alt="user avatar" />
                Henry donated <span className="font-bold">$30</span> with a
                message "I love this project! ❤️"
              </li>
            </ul>
          </div>
          <div className="makePayment w-1/2 rounded-lg bg-slate-900 p-10">
            <div className="text-2xl font-bold my-5">Make a Payment</div>
            <div className="flex gap-2 flex-col">
              <input
                type="text"
                name=""
                id=""
                className="w-full rounded-lg bg-slate-800 p-3"
                placeholder="Enter Amount"
              />
              <input
                type="text"
                name=""
                id=""
                className="w-full rounded-lg bg-slate-800 p-3"
                placeholder="Enter Message"
              />
              <input
                type="text"
                name=""
                id=""
                className="w-full rounded-lg bg-slate-800 p-3"
                placeholder="Enter Name"
              />
              {/* I want this as as background for my button [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]   */}

              <button
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Pay
              </button>
            </div>
            {/* or choose from these amounts  */}

            <div className="flex gap-2 mt-5">
              <button className="bg-slate-800 p-3 rounded-lg">Pay 10$</button>
              <button className="bg-slate-800 p-3 rounded-lg">Pay 20$</button>
              <button className="bg-slate-800 p-3 rounded-lg">Pay 30$</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Username
