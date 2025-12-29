export function Domains({ article }) {
    const domains = [
        'Systems & OS',
        'Cloud & Networking',
        'Software Architecture',
        'Performance & Failure Modes'
    ];

    return (
        <div>
            <h1 className="text-lg font-semibold mb-2 text-white">Domains</h1>
            <ul>
                {domains.map((domain, index) => (
                    <li 
                        key={index}
                        className={`p-1.5 my-1 px-3 rounded w-full text-gray-200 hover:bg-gray-700 hover:text-blue-400 cursor-pointer transition-colors flex items-center justify-between text-sm ${
                            article?.domain === domain ? 'bg-gray-700 text-blue-400' : ''
                        }`}
                    >
                        <span>{domain}</span>
                        <span className="text-gray-400">→</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
