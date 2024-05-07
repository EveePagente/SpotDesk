// import React from 'react';

// const Setting = () => {
//   return (
//     <div className="flex h-screen">
//       {/* Left side header */}
//       <div className="flex flex-col bg-gray-200 w-1/4">
//         {/* Logo */}
//         <div className="flex items-center left-0">
//         <img className="h-auto w-32 pb-4 self-center mb-8" src="../src/assets/text-dark.png"></img>
//         </div>
       
//         {/* Settings */}
//         <div className="p-4">
//           <p className="font-bold">Settings</p>
//           <div className="flex items-center">
//             <p>Account Settings</p>
//           </div>
//         </div>
//         <div className="h-full border-r border-black-300"></div>
//       </div>

//       {/* Main content */}
//       <div className="flex flex-col w-3/4">

//         {/* Top header */}
//         <div className="p-4">

//         <div className="p-6 border-b"></div>
//           <p className="text-2xl p-6 font-bold">Account Settings</p>
//         </div>
//         {/* Email Address */}
//         <div className="p-10">
//           <p className="font-bold text-xs">Email Address</p>
//           <input type="email" className="border rounded-lg border-gray-300 p-1 mt-2" />
//         </div>
//         {/* Password */}
//         <div className="p-10">
//           <p className="font-bold text-xs">Password</p>
//           <input type="password" className="border rounded-lg border-gray-300 p-1 mt-2" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Setting;

// import React from 'react';

// const Setting = () => {
//   return (
//     <div className="flex h-screen">
//       {/* Left side header */}
//       <div className="flex flex-col bg-gray-200 w-1/4">
//         {/* Logo */}
//         <div className="flex items-center right-0">
//         <img className="h-auto w-32 pb-4 self-center mb-8" src="../src/assets/text-dark.png" alt="Logo"></img>
//         </div>
       
//         {/* Settings */}
//         <div className="p-6">
//           <p className="font-bold">Settings</p>
//           <div className="flex items-center">
//             <p>Account Settings</p>
//           </div>
//         </div>
//         <div className="h-full border-r border-black-300"></div>
//       </div>

//       {/* Main content */}
//       <div className="flex flex-col w-3/4">

//         {/* Top header */}
//         <div className="p-4">

//         <div className="p-6 border-b"></div>
//           <p className="text-2xl p-6 font-bold">Account Settings</p>
//         </div>
//         {/* Email Address */}
//         <div className="p-6">
//           <p className="font-semibold text-base">Email Address</p>
//           <input type="email" className="border rounded-lg border-gray-300 p-1 mt-2 w-60"placeholder="example@gmail.com " readOnly />
//         </div>
//         {/* Password */}
//         <div className="p-6">
//           <p className="font-semibold text-base">Password</p>
//           <input type="password" className="border rounded-lg border-gray-300 p-1 mt-2 w-60" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Setting;

import React from 'react';


const Setting = () => {
  return (
    <div className="flex h-screen">
      {/* Left side header */}
      <div className="flex flex-col bg-gray-100">
        {/* Logo */}
        <div className="flex items-center right-0 pl-8">
          <img className="h-auto w-32 pb-4 self-center mb-8" src="../src/assets/text-dark.png" alt="Logo"></img>
        </div>
       
        {/* Settings */}
        <div className="p-6 pl-20">
          <p className="text-2xl font-bold">Settings</p>
          <div className="flex items-center pt-10 pl-10">
            <p>Account Settings</p>
            
          </div>
        </div>
        <div className="h-full border-r border-black-300"></div>
      </div>

      {/* Main content */}
      <div className="flex flex-col w-3/4">

        {/* Top header */}
        <div className="p-4">

        <div className="p-6 border-b"></div>
          <p className="text-2xl p-6 font-bold">Account Settings</p>
        </div>
        {/* Email Address */}
        <div className="p-6 pl-10">
          <p className="font-semibold text-base">Email Address</p>
          <input type="email" className="border rounded-lg border-gray-300 p-1 mt-2 w-60"placeholder="example@gmail.com " readOnly />
        </div>
        {/* Password */}
        <div className="p-6 pl-10">
          <p className="font-semibold text-base">Password</p>
          <input type="password" className="border rounded-lg border-gray-300 p-1 mt-2 w-60" />
        </div>
      </div>
    </div>
  );
}

export default Setting;
