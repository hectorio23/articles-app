export function AsideBar() {
    return (
        <div className="rounded border border-gray-700 bg-gray-700/50 p-2 mb-3">
            <h1 className="text-lg font-semibold mb-2 text-white">Areas of Focus</h1>
            <ul>
                <li className="p-1.5 px-3 mb-1.5 rounded w-full bg-gray-600/50 text-gray-200 hover:bg-gray-600 hover:text-blue-400 cursor-pointer transition-colors flex items-center justify-between text-sm">
                    <span>Systems & OS</span>
                    <span className="text-gray-400">→</span>
                </li>
                <li className="p-1.5 px-3 mb-1.5 rounded w-full bg-gray-600/50 text-gray-200 hover:bg-gray-600 hover:text-blue-400 cursor-pointer transition-colors flex items-center justify-between text-sm">
                    <span>Cloud & Networking</span>
                    <span className="text-gray-400">→</span>
                </li>
                <li className="p-1.5 px-3 mb-1.5 rounded w-full bg-gray-600/50 text-gray-200 hover:bg-gray-600 hover:text-blue-400 cursor-pointer transition-colors flex items-center justify-between text-sm">
                    <span>Software Architecture</span>
                    <span className="text-gray-400">→</span>
                </li>
                <li className="p-1.5 px-3 mb-1.5 rounded w-full bg-gray-600/50 text-gray-200 hover:bg-gray-600 hover:text-blue-400 cursor-pointer transition-colors flex items-center justify-between text-sm">
                    <span>Performance & Failure Modes</span>
                    <span className="text-gray-400">→</span>
                </li>
            </ul>
        </div>
    );
}
