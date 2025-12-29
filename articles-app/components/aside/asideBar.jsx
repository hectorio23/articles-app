export function AsideBar({ article }) {
    const areasOfFocus = [
        'Systems & OS',
        'Cloud & Networking',
        'Software Architecture',
        'Performance & Failure Modes'
    ];

    return (
        <div className="rounded border border-gray-700 bg-gray-700/50 p-2 mb-3">
            <h1 className="text-lg font-semibold mb-2 text-white">Areas of Focus</h1>
            <ul>
                {areasOfFocus.map((area, index) => (
                    <li 
                        key={index}
                        className={`p-1.5 px-3 mb-1.5 rounded w-full bg-gray-600/50 text-gray-200 hover:bg-gray-600 hover:text-blue-400 cursor-pointer transition-colors flex items-center justify-between text-sm ${
                            article?.domain === area ? 'bg-gray-600 text-blue-400' : ''
                        }`}
                    >
                        <span>{area}</span>
                        <span className="text-gray-400">→</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
