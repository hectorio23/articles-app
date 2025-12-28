export function Domains() {
    return (
        <div>
            <h1 className="text-lg font-semibold mb-2 text-white">Domains</h1>
            <ul>
                <li className="p-1.5 my-1 px-3 rounded w-full text-gray-200 hover:bg-gray-700 hover:text-blue-400 cursor-pointer transition-colors flex items-center justify-between text-sm">
                    <span>Systems & OS</span>
                    <span className="text-gray-400">→</span>
                </li>
                <li className="p-1.5 my-1 px-3 rounded w-full text-gray-200 hover:bg-gray-700 hover:text-blue-400 cursor-pointer transition-colors flex items-center justify-between text-sm">
                    <span>Cloud & Networking</span>
                    <span className="text-gray-400">→</span>
                </li>
                <li className="p-1.5 my-1 px-3 rounded w-full text-gray-200 hover:bg-gray-700 hover:text-blue-400 cursor-pointer transition-colors flex items-center justify-between text-sm">
                    <span>Software Architecture</span>
                    <span className="text-gray-400">→</span>
                </li>
                <li className="p-1.5 my-1 px-3 rounded w-full text-gray-200 hover:bg-gray-700 hover:text-blue-400 cursor-pointer transition-colors flex items-center justify-between text-sm">
                    <span>Performance & Failure Modes</span>
                    <span className="text-gray-400">→</span>
                </li>
            </ul>
        </div>
    );
}
