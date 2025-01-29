import FetchUsers from "./components/FetchUsers";
import { ArrowLeft } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <h1 className="flex max-w-[90%] mx-auto py-8 align-baseline text-gray-500 font-normal text-lg"><ArrowLeft className="me-3"/>Back to my jobs</h1>
      <FetchUsers />
    </div>
  );
}
