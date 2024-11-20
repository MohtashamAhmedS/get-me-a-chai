import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center text-white gap-4 h-[44vh] flex-col">
        <div className="font-bold text-5xl flex text-center items-center gap--4">
          {' '}
          <span>
            <img src="/latte.png" width={88} alt="" />
          </span>{' '}
          Buy me a Latte
        </div>
        <p>
          A crowdfunding platform for creators. Get funded by your fans and
          followers. Start now!
        </p>
        <div>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Start Here
            </span>
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Purple to Blue
          </button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto py-32">
        <h1 className="text-2xl text-center mb-14">
          Your Fans can buy you a Latte
        </h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              src="/Typing-bro.png"
              alt=""
              className="bg-slate-600 rounded-full p-2 text-black"
              width={88}
            />
            <div className="font-bold">Fund Yourself</div>
            <div className="text-center">Your fans want to help you </div>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              src="/Typing-bro.png"
              alt=""
              className="bg-slate-600 rounded-full p-2 text-black"
              width={88}
            />
            <div className="font-bold">Fund Yourself</div>
            <div className="text-center">Your fans want to help you </div>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              src="/Typing-bro.png"
              alt=""
              className="bg-slate-600 rounded-full p-2 text-black"
              width={88}
            />
            <div className="font-bold">Fund Yourself</div>
            <div className="text-center">Your fans want to help you </div>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto py-32">
        <h1 className="text-2xl text-center mb-14">
          Your Fans can buy you a Latte
        </h1>
        <div className="flex gap-5 justify-around">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/y3WP9uemJr0?si=qb0ilC8oQ7TLmD-n"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
}
