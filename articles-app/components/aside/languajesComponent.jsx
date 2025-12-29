export function LanguajesBox({ article }) {
    const currentLang = article?.language || 'EN';
    const originalLang = article?.originalLanguage || 'ES';

    return (
        <div className="my-3">
            <h2 className="text-lg font-semibold mb-2 text-white">Languages</h2>
            <div className="grid grid-cols-6 gap-1 w-full bg-gray-700/50 rounded border border-gray-600 overflow-hidden">
                <button className={`px-2 py-1.5 text-center hover:bg-gray-600 hover:text-white transition-colors border-r border-gray-600 text-sm ${
                    currentLang === 'ES' ? 'text-white bg-gray-600' : 'text-gray-400'
                }`}>ES</button>
                <button className={`px-2 py-1.5 text-center hover:bg-gray-600 hover:text-white transition-colors border-r border-gray-600 text-sm ${
                    currentLang === 'EN' ? 'text-white bg-gray-600' : 'text-gray-400'
                }`}>EN</button>
                <button className="px-2 py-1.5 text-center text-gray-400 hover:bg-gray-600 hover:text-white transition-colors text-sm col-span-4">Auto-Translated (AI)</button>
            </div>
        </div>
    )
}