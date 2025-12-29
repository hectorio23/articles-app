export function Concepts({ article }) {
    const concepts = article?.concepts || [];

    if (concepts.length === 0) {
        return null;
    }

    return (
        <div className="rounded-sm py-2 px-4">
            <h2 className="font-semibold py-2 text-white">Concepts</h2>
            <div className="space-y-1.5">
                {concepts.map((concept, index) => (
                    <button
                        key={index}
                        className="bg-gray-700 hover:bg-gray-600 text-gray-200 text-sm py-1.5 px-3 rounded-full transition-colors duration-200 text-left mr-2 mb-1"
                    >
                        {concept}
                    </button>
                ))}
            </div>
        </div>
    );
}
