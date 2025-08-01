export default function Rewards() {
  return (
    <div className="mt-10 bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md">
      <h2 className="text-3xl font-semibold text-gray-800 mb-5 border-b pb-2">🏆 Rewards</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-5 shadow hover:shadow-lg transition-shadow border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-2">🎉 Raise ₹1000</h3>
          <p className="text-gray-600">Get a Certificate of Contribution</p>
        </div>
        <div className="bg-white rounded-lg p-5 shadow hover:shadow-lg transition-shadow border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-2">🚀 Raise ₹3000</h3>
          <p className="text-gray-600">Receive a Branded T-Shirt</p>
        </div>
        <div className="bg-white rounded-lg p-5 shadow hover:shadow-lg transition-shadow border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-2">🏅 Raise ₹5000</h3>
          <p className="text-gray-600">Earn a Letter of Recommendation</p>
        </div>
      </div>
    </div>
  );
}
