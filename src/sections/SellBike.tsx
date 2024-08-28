import Title from "../components/Title";

function SellBike() {
  return (
    <section
      id="sell-my-bike"
      className="my-container flex items-start justify-center flex-col gap-10  mb-10">
      <div className="my-container">
        <Title
          title="Sell My"
          coloredWorld="Bike:"
        />
      </div>
      <div className="w-full flex items-center justify-center h-[500px] max-m:flex-col-reverse max-m:h-[800px] rounded-lg overflow-hidden">
        <div className="w-1/2 max-m:w-full">
          <div className="w-full min-h-[100px] bg-lime-300 flex items-center justify-start gap-10 py-4 cursor-pointer px-6 text-forest-green-dark capitalize font-bold">
            <span className=" relative my-span-circle ">1</span>Enter your registration details.
          </div>
          <div className="w-full min-h-[100px] bg-lime-400 flex items-center justify-start gap-10 py-4 cursor-pointer px-6 text-forest-green-dark capitalize font-bold">
            <span className=" relative my-span-circle ">2</span>Fill in some info about your bike
            and its condition, then upload some photos of it. bike.
          </div>
          <div className="w-full min-h-[100px] bg-lime-500 flex items-center justify-start gap-10 py-4 cursor-pointer px-6 text-forest-green-dark capitalize font-bold">
            <span className=" relative my-span-circle ">3</span>You’ll be sent an offer for your
            bike within 24 hours.
          </div>
          <div className="w-full min-h-[100px] bg-lime-600 flex items-center justify-start gap-10 py-4 cursor-pointer px-6 text-forest-green-dark capitalize font-bold">
            <span className=" relative my-span-circle ">4</span>If you accept the offer, a
            speedriders.com expert will be with you within 24 hours to check over your bike and take
            it away.
          </div>
          <div className="w-full min-h-[100px] bg-lime-700 flex items-center justify-start gap-10 py-4 cursor-pointer px-6 text-forest-green-dark capitalize font-bold">
            <span className=" relative my-span-circle ">5</span>Payment for your bike will be
            transferred to your bank account at the time of collection.
          </div>
        </div>
        <div
          className="w-1/2 max-m:w-full h-full bg-SellBikeBg bg-cover relative before:bg-lime-400 before:absolute before:h-[30%] before:w-[10px] before:z-10 before:bottom-[10px] before:right-[10px] before:rounded-lg
        after:bg-lime-400 after:absolute after:w-[30%] after:h-[10px] after:z-10 after:bottom-[10px] after:right-[10px] after:rounded-lg"></div>
      </div>
      <button className="bg-lime-500 hover:bg-lime-600 text-white transition-colors w-full text-2xl py-4 font-medium rounded-lg mx-auto">Sell Now!</button>
    </section>
  );
}

export default SellBike;
