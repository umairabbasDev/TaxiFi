import Basic from 'components/Dropdowns/Basic';
import IndexDropdown from 'components/Dropdowns/IndexDropdown';
import React from 'react'
import CardStats from '../../components/Cards/CardStats'


const Transaction = () => {
    return (
        <>
            {/* Heading */}
            <h6 className="md:min-w-full text-slate-500 text-xl uppercase font-bold block pt-1 pb no-underline">
                Transaction
            </h6>
            {/* Divider */}
            <hr className="my-4 md:min-w-full" />

            <div className="flex flex-row justify-between items-center ">
                Showing 0-0 of 0 Transactions



                <button
                    className="bg-sky-500 pointer text-white active:bg-slate-600 text-sm font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                >

                    Export transactions
                </button>
            </div>


            <div className="bg-white mt-3 rounded  mb-10">
                <div className="flex p-3 z-1 justify-start items-center">
                    <Basic Title="Any Type" />
                    <Basic Title="Any Flag" />
                    <Basic Title="Any Source" />
                    <Basic Title="Any Currency" />
                    <Basic Title="Any Date" />
                    <Basic Title="Newest" />
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

export default Transaction