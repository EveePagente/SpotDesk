import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="border border-gray-300 p-24 rounded-none shadow-md flex flex-col items-center">
       <h1 className="text-2xl font-bold pb-4 mb-6">Verify your email address</h1>
       <p className="text-sm font-semibold mb-2">Please take a second to make sure we have your correct email address.</p>
       <p className="text-sm font-semibold mb-8">Verify this email address by clicking the button below.</p>
      <Button className="w-200 h-10 text-sm bg-indigo-700">Verify Email Address</Button>
    </div>
    </div>
  );
}

export default App;


