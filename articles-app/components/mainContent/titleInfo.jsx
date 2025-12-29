export function TitleInfo({ article }) {
    if (!article) return null;

    const formattedDate = new Date(article.date).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });

    const translationNote = article.originalLanguage && article.originalLanguage !== article.language
        ? `Original content written in ${article.originalLanguage === 'ES' ? 'Spanish' : article.originalLanguage}. ${article.language === 'EN' ? 'English' : article.language} version translated by AI`
        : '';

    return (
        <div className="p-3 w-full">
            <h1 className="text-3xl font-semibold text-center mb-6 px-4 text-white">
                {article.title}
            </h1>
            <div className="inline-block w-full text-center" >
                <p className="inline-block mx-1 text-gray-300">{formattedDate}</p>
                <p className="inline-block text-gray-300">
                    <span className="font-extrabold mx-2 mr-4">•</span>
                    {article.author}
                </p>

                {translationNote && (
                    <p className="inline-block mx-10 border border-gray-600 rounded-sm py-1 px-4 hover:bg-gray-700 hover:duration-300 hover:text-blue-50 text-gray-300 text-sm">
                        {translationNote}
                    </p>
                )}
            </div>
        </div>
    );
}
