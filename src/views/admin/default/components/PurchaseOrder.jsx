import React from "react";

const PurchaseOrder = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <form className="p-5 space-y-6">
        <h4 className="text-xl font-semibold">Purchase Order Form</h4>

        <div className="border-b pb-3 mb-3">
          <div className="mb-3 max-w-xs">
            <label htmlFor="poType" className="block font-medium">
              PO Type <span className="text-red-500">*</span>
            </label>
            <select id="poType" className="block w-full mt-1 border border-gray-300 rounded-md p-2" required>
              <option>New</option>
              <option>Supplementary</option>
            </select>
          </div>
        </div>

        <h4 className="text-xl font-semibold">Vendor Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          <div className="form-group">
            <label htmlFor="vendorType" className="block font-medium">
              Vendor Type <span className="text-red-500">*</span>
            </label>
            <select id="vendorType" className="block w-full mt-1 border border-gray-300 rounded-md p-2" required>
              <option>Vendor</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="vendorName" className="block font-medium">
              Vendor Name <span className="text-red-500">*</span>
            </label>
            <input type="text" id="vendorName" className="block w-full mt-1 border border-gray-300 rounded-md p-2" required />
          </div>
          <div className="form-group">
            <label htmlFor="vendorBranch" className="block font-medium">
              Vendor Branch <span className="text-red-500">*</span>
            </label>
            <input type="text" id="vendorBranch" className="block w-full mt-1 border border-gray-300 rounded-md p-2" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          <div className="form-group">
            <label htmlFor="gstin" className="block font-medium">
              GSTIN <span className="text-red-500">*</span>
            </label>
            <input type="text" id="gstin" className="block w-full mt-1 border border-gray-300 rounded-md p-2" />
          </div>
          <div className="form-group">
            <label htmlFor="msmeId" className="block font-medium">
              MSME Id <span className="text-red-500">*</span>
            </label>
            <input type="text" id="msmeId" className="block w-full mt-1 border border-gray-300 rounded-md p-2" />
          </div>
        </div>

        <div className="border-b pb-3 mb-3">
          <div className="form-group">
            <label htmlFor="billFromAddress" className="block font-medium">
              Bill From Address <span className="text-red-500">*</span>
            </label>
            <textarea id="billFromAddress" className="block w-full mt-1 border border-gray-300 rounded-md p-2" rows="3"></textarea>
          </div>
        </div>

        <h4 className="text-xl font-semibold">PO Terms</h4>
        <div className="mb-3">
          <div className="form-group">
            <label htmlFor="termsAndConditions" className="block font-medium">
              Terms and Conditions <span className="text-red-500">*</span>
            </label>
            <textarea id="termsAndConditions" className="block w-full mt-1 border border-gray-300 rounded-md p-2" rows="3"></textarea>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          <div className="form-group">
            <label htmlFor="costCenter" className="block font-medium">
              Cost Center <span className="text-red-500">*</span>
            </label>
            <input type="text" id="costCenter" className="block w-full mt-1 border border-gray-300 rounded-md p-2" />
          </div>
          <div className="form-group">
            <label htmlFor="projectId" className="block font-medium">
              Project ID <span className="text-red-500">*</span>
            </label>
            <input type="text" id="projectId" className="block w-full mt-1 border border-gray-300 rounded-md p-2" />
          </div>
          <div className="form-group">
            <label htmlFor="quotation" className="block font-medium">
              Quotation <span className="text-red-500">*</span>
            </label>
            <input type="text" id="quotation" className="block w-full mt-1 border border-gray-300 rounded-md p-2" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          <div className="form-group">
            <label htmlFor="paymentTerms" className="block font-medium">
              Payment Terms <span className="text-red-500">*</span>
            </label>
            <input type="text" id="paymentTerms" className="block w-full mt-1 border border-gray-300 rounded-md p-2" />
          </div>
          <div className="form-group">
            <label htmlFor="dueDate" className="block font-medium">
              Due Date (in days) <span className="text-red-500">*</span>
            </label>
            <input type="number" id="dueDate" className="block w-full mt-1 border border-gray-300 rounded-md p-2" />
          </div>
        </div>

        <div className="border-b pb-3 mb-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="form-group">
              <label htmlFor="projectDescription" className="block font-medium">
                Project Description <span className="text-red-500">*</span>
              </label>
              <input type="text" id="projectDescription" className="block w-full mt-1 border border-gray-300 rounded-md p-2" />
            </div>
            <div className="form-group">
              <label htmlFor="comments" className="block font-medium">
                Comments <span className="text-red-500">*</span>
              </label>
              <input type="text" id="comments" className="block w-full mt-1 border border-gray-300 rounded-md p-2" />
            </div>
            <div className="form-group">
              <label htmlFor="requestedBy" className="block font-medium">
                Requested By <span className="text-red-500">*</span>
              </label>
              <input type="text" id="requestedBy" className="block w-full mt-1 border border-gray-300 rounded-md p-2" />
            </div>
          </div>
        </div>

        <h4 className="text-xl font-semibold">Billing Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          <div className="form-group">
            <label htmlFor="billingId" className="block font-medium">
              Billing Id <span className="text-red-500">*</span>
            </label>
            <input type="text" id="billingId" className="block w-full mt-1 border border-gray-300 rounded-md p-2" />
          </div>
          <div className="form-group">
            <label htmlFor="billingAddress" className="block font-medium">
              Billing Address <span className="text-red-500">*</span>
            </label>
            <textarea id="billingAddress" className="block w-full mt-1 border border-gray-300 rounded-md p-2" rows="3"></textarea>
          </div>
        </div>

        <div className="border-b pb-3 mb-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="form-group">
              <label htmlFor="billingPanNo" className="block font-medium">
                PAN No. <span className="text-red-500">*</span>
              </label>
              <input type="text" id="billingPanNo" className="block w-full mt-1 border border-gray-300 rounded-md p-2" />
            </div>
            <div className="form-group">
              <label htmlFor="billingGstin" className="block font-medium">
                GSTIN / UIN <span className="text-red-500">*</span>
              </label>
              <input type="text" id="billingGstin" className="block w-full mt-1 border border-gray-300 rounded-md p-2" />
            </div>
          </div>
        </div>

        <h4 className="text-xl font-semibold">Shipping Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          <div className="form-group">
            <label htmlFor="shippingId" className="block font-medium">
              Shipping Id <span className="text-red-500">*</span>
            </label>
            <input type="text" id="shippingId" className="block w-full mt-1 border border-gray-300 rounded-md p-2" />
          </div>
          <div className="form-group">
            <label htmlFor="shippingAddress" className="block font-medium">
              Shipping Address <span className="text-red-500">*</span>
            </label>
            <textarea id="shippingAddress" className="block w-full mt-1 border border-gray-300 rounded-md p-2" rows="3"></textarea>
          </div>
        </div>

        <div className="border-b pb-3 mb-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="form-group">
              <label htmlFor="shippingPanNo" className="block font-medium">
                PAN No. <span className="text-red-500">*</span>
              </label>
              <input type="text" id="shippingPanNo" className="block w-full mt-1 border border-gray-300 rounded-md p-2" />
            </div>
            <div className="form-group">
              <label htmlFor="shippingGstin" className="block font-medium">
                GSTIN / UIN <span className="text-red-500">*</span>
              </label>
              <input type="text" id="shippingGstin" className="block w-full mt-1 border border-gray-300 rounded-md p-2" />
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PurchaseOrder;
