export function Contents() {
    return (
        <div className="py-2 px-4">
            <hr className="mb-2 border-gray-700" />
            <h2 className="font-semibold py-2 text-white">Contents</h2>
            <ul>
                <li className="px-4 py-1.5 text-gray-300 hover:text-blue-400 hover:duration-200 border-l-2 border-blue-500 mb-1 font-medium cursor-pointer transition-colors text-sm">1 The Foundation of Systems Programming:</li>
                <li className="px-4 py-1.5 text-gray-300 hover:text-blue-400 hover:duration-200 mb-1 font-medium cursor-pointer transition-colors text-sm">Bootloaders, Kernel Initialization</li>
                <li className="px-4 py-1.5 text-gray-300 hover:text-blue-400 hover:duration-200 mb-1 font-medium cursor-pointer transition-colors text-sm">Stages of the Boot Process</li>
                <li className="px-4 py-1.5 text-gray-300 hover:text-blue-400 hover:duration-200 mb-1 font-medium cursor-pointer transition-colors text-sm">Kernel Initialization Deep Dive</li>
                <li className="px-4 py-1.5 text-gray-300 hover:text-blue-400 hover:duration-200 mb-1 font-medium cursor-pointer transition-colors text-sm">Memory Handling at the Hardware Level</li>
                <li className="px-4 py-1.5 text-gray-300 hover:text-blue-400 hover:duration-200 mb-1 font-medium cursor-pointer transition-colors text-sm">Memory Management Realities</li>
            </ul>
        </div>
    );
}