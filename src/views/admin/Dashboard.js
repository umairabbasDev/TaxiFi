import React from "react";

// components

// import CardLineChart from "components/Cards/CardLineChart.js";
// import CardBarChart from "components/Cards/CardBarChart.js";
// import CardPageVisits from "components/Cards/CardPageVisits.js";
// import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
// import CardDashboard from "components/Cards/CardDashboard";
import CardStats from "components/Cards/CardStats";

export default function Dashboard() {
  return (
    <>
      {/* Heading */}
      <h6 className="md:min-w-full text-slate-500 text-xl uppercase font-bold block pt-1 pb no-underline">
        Dashboard
      </h6>
      {/* Divider */}
      <hr className="my-4 md:min-w-full" />

      <div className="flex flex-row">
        <div className="w-full mx-4">
          <CardStats statTitle="Total Value" statValue={342.4} />
        </div>

        <div className="w-full mx-4">
          <CardStats statTitle="TOTAL 2022 REALIZED GAINS/LOSSES" statValue={342.4} />
        </div>

      </div>


      <div className="bg-white mt-10 rounded  mb-10">
        <div className="p-3 flex flex-row justify-between items-center">
          <h1 className="text-xl font-bold">Coin</h1>
          <button
            className="bg-sky-500 pointer text-white active:bg-slate-600 text-sm font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            View All Coins
          </button>
        </div>

        <hr className="my-4 md:min-w-full" />
        <div className="text-center mb-10">

          You haven't yet linked any exchanges to your account.
          <span className="text-sky-500">Get started</span>.
        </div>

      </div>

      <div className="bg-white mt-10 rounded  mb-10">
        <div className="p-3 flex flex-row justify-between items-center">
          <h1 className="text-xl font-bold">Transactions</h1>
          <div className="flex flex-row justify-between items-center">
            <h1 className="mx-3">0 Transactions</h1>
            <button
              className="bg-sky-500 pointer text-white active:bg-slate-600 text-sm font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >

              View All Transactions
            </button>

          </div>
        </div>

        <hr className="my-4 md:min-w-full" />
        <div className="text-center mb-10">

          You haven't yet linked any exchanges to your account.
          <span className="text-sky-500">Get started</span>.
        </div>

      </div>
      <div className="h-fill mt-10">.</div>
    </>
  );
}
