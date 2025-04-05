import React from 'react';

const UserJourney = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-8 text-gray-800">User Journey</h1>
        <div className="space-y-8 sm:space-y-10">
          {/* Step 1 */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <div className="bg-[#00603A] text-white font-bold rounded-full h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center mb-2 sm:mb-0 sm:mr-4">
              1
            </div>
            <div>
              <h2 className="text-base sm:text-xl font-semibold text-gray-800">Explore Live Competitions</h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Browse the latest live competitions available on the website.
              </p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <div className="bg-[#00603A] text-white font-bold rounded-full h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center mb-2 sm:mb-0 sm:mr-4">
              2
            </div>
            <div>
              <h2 className="text-base sm:text-xl font-semibold text-gray-800">Enter the Qualification Round</h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Join the qualification round for free and try your luck in the spot-the-ball contest.
              </p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <div className="bg-[#00603A] text-white font-bold rounded-full h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center mb-2 sm:mb-0 sm:mr-4">
              3
            </div>
            <div>
              <h2 className="text-base sm:text-xl font-semibold text-gray-800">Reach the Final Stage</h2>
              <p className="text-gray-600 text-sm sm:text-base">
                If you qualify, proceed to the final stage with limited entries and mark your spot on the cricket photograph.
              </p>
            </div>
          </div>
          {/* Step 4 */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <div className="bg-[#00603A] text-white font-bold rounded-full h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center mb-2 sm:mb-0 sm:mr-4">
              4
            </div>
            <div>
              <h2 className="text-base sm:text-xl font-semibold text-gray-800">Finalize and Checkout</h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Finalize your entry and proceed to checkout to confirm your participation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserJourney;
