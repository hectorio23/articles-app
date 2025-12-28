export function LanguajesBox() {
    return (
        <div className="my-3">
            <h2 className="text-lg font-semibold mb-2 text-white">Languages</h2>
            <div className="grid grid-cols-6 gap-1 w-full bg-zinc-700/50 rounded border border-zinc-600 overflow-hidden">
                <button className="px-2 py-1.5 text-center text-zinc-400 hover:bg-zinc-600 hover:text-white transition-colors border-r border-zinc-600 text-sm">ES</button>
                <button className="px-2 py-1.5 text-center text-white bg-zinc-600 hover:bg-zinc-600 hover:text-white transition-colors border-r border-zinc-600 text-sm">EN</button>
                <button className="px-2 py-1.5 text-center text-zinc-400 hover:bg-zinc-600 hover:text-white transition-colors text-sm col-span-4">Auto-Translated (AI)</button>
            </div>
        </div>
    )
}