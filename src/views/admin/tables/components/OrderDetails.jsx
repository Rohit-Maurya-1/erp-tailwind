import React from 'react';

const OrderDetails = () => {
  return (
    <form className="p-6 bg-white rounded-lg shadow-md">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        <div className="lg:col-span-1 w-full">
          <div className="space-y-4">
            <div className="card p-4 bg-gray-50 rounded-lg shadow-sm w-full">
              <h5 className="text-lg font-semibold">Vendor Detail</h5>
              <hr className="my-2" />
              <div className="mt-2 space-y-2">
                <p><strong>Vendor Name:</strong> MOMAGIC TECHNOLOGIES PVT LTD</p>
                <p>(VEN0853) MOMAGIC TECHNOLOGIES PVT LTD</p>
                <p><strong>Vendor Address:</strong> 206, FF, PLOT NO. 190-191, NEELKANTH PALACE, DELHI</p>
                <p><strong>Vendor GSTIN:</strong> 07AAHCM0426E1ZV</p>
              </div>
            </div>
            <div className="card p-4 bg-gray-50 rounded-lg shadow-sm w-full">
              <h5 className="text-lg font-semibold">Tax Detail</h5>
              <hr className="my-2" />
              <div className="mt-2 space-y-2">
                <p><strong>Sub-Total value before Taxes:</strong> 0.00</p>
                <p><strong>CGST:</strong> (+) 0.00</p>
                <p><strong>SGST:</strong> (+) 0.00</p>
                <p><strong>IGST:</strong> (+) 0.00</p>
                <p><strong>Sub-Total values after Taxes:</strong> 0.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 card p-4 bg-gray-50 rounded-lg shadow-sm w-full">
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2">Component</th>
                  <th className="p-2">Ord. Qty</th>
                  <th className="p-2">Rate</th>
                  <th className="p-2">Rate Cap</th>
                  <th className="p-2">Tot Price</th>
                  <th className="p-2">Proj. Req. Qty</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(4)].map((_, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">
                      <select aria-label="Component select" className="border border-gray-300 rounded-md p-1 w-full">
                        <option value="1">(0805-5.6K-5%-0.125W) P0000</option>
                        <option value="2">(Air Bubble Roll (100 m)) P0083</option>
                        <option value="3">(Plastic(Pad Printed)) P2460</option>
                        <option value="4">(screw 22mm) P3333</option>
                      </select>
                    </td>
                    <td className="p-2">
                      <input type="number" defaultValue={1} min={0} className="border border-gray-300 rounded-md p-1 w-full" />
                    </td>
                    <td className="p-2">
                      <input type="number" step="0.01" min={0} className="border border-gray-300 rounded-md p-1 w-full" />
                    </td>
                    <td className="p-2">
                      <input type="number" step="0.01" min={0} className="border border-gray-300 rounded-md p-1 w-full" />
                    </td>
                    <td className="p-2">
                      <input type="number" step="0.01" min={0} readOnly className="border border-gray-300 rounded-md p-1 w-full" />
                    </td>
                    <td className="p-2">
                      <input type="number" defaultValue={0} min={0} className="border border-gray-300 rounded-md p-1 w-full" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-4 space-x-2 w-full">
        <button type="button" className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
          Back
        </button>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Submit
        </button>
      </div>
    </form>
  );
}

export default OrderDetails;
