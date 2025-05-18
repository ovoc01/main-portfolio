import { Terminal } from 'lucide-react';

export const Logo = () => (
    <div className="flex items-center gap-2 cursor-pointer">
        <div className="p-1 border-2 border-indigo-500 rounded-md bg-indigo-50">
            <Terminal className="w-2 h-2 text-indigo-600" />
        </div>
        <h1 className=" font-bold text-gray-800">
            rzmirindra
        </h1>
    </div>
);
