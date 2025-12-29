export function DateComponent({ article }) {
    if (!article) return null;

    const formattedDate = new Date(article.date).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });

    const viewsFormatted = article.views >= 1000 
        ? `${(article.views / 1000).toFixed(1)}K Views`
        : `${article.views} Views`;

    return (
        <div className="w-full block py-4 px-5 mr-3 text-white">
            <div className="inline-block border border-gray-600 rounded p-1">
                <p className="inline-block mx-1 p-1 font-semibold text-blue-400">
                    POSTED
                </p>
                <p className="inline-block mx-1 text-gray-300">{formattedDate}</p>
            </div>
            <p className="inline-block ml-3 text-blue-400">{article.domain}</p>
            <div className="inline-block float-end">
                <p className="inline-block mx-2 text-gray-300">{viewsFormatted}</p>
                <p className="inline-block text-gray-300">
                    <span className="font-extrabold mx-2">•</span>
                    {article.readTime} min read
                </p>
            </div>
        </div>
    );
}
