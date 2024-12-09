import React from "react";

const PaymentForm: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-bold mb-4">Billing Info</h3>
      {/* Billing Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input type="text" placeholder="Name" className="w-full p-2 border rounded-md" />
        <input type="text" placeholder="Phone Number" className="w-full p-2 border rounded-md" />
        <input type="text" placeholder="Address" className="w-full p-2 border rounded-md" />
        <input type="text" placeholder="City" className="w-full p-2 border rounded-md" />
      </div>

      <h3 className="text-xl font-bold mb-4">Rental Info</h3>
      {/* Rental Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input type="text" placeholder="Pick-Up Location" className="w-full p-2 border rounded-md" />
        <input type="date" className="w-full p-2 border rounded-md" />
        <input type="text" placeholder="Drop-Off Location" className="w-full p-2 border rounded-md" />
        <input type="date" className="w-full p-2 border rounded-md" />
      </div>

      <h3 className="text-xl font-bold mb-4">Payment Method</h3>
      {/* Payment Method */}
      <div className="space-y-4">
        <div>
          <input type="radio" id="credit" name="payment" className="mr-2" />
          <label htmlFor="credit">Credit Card</label>
        </div>
        <div>
          <input type="radio" id="paypal" name="payment" className="mr-2" />
          <label htmlFor="paypal">PayPal</label>
        </div>
        <div>
          <input type="radio" id="crypto" name="payment" className="mr-2" />
          <label htmlFor="crypto">Crypto</label>
        </div>
      </div>

      {/* Confirm Button */}
      <div className="mt-6">
        <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;
