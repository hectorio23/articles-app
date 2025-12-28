export function AsideBar() {
    return (
        <div className="rounded border bg-zinc-700  p-2 mb-3">
            <h1 className="text-lg font-semibold mb-2 text-white">Areas of Focus</h1>
            <ul>
                <li className="p-1.5 px-3 mb-1.5 rounded w-full bg-zinc-500 text-zinc-200 hover:bg-zinc-600 cursor-pointer transition-colors flex items-center justify-between text-sm">
                    <span>Systems & OS</span>
                    <span className="text-zinc-400">→</span>
                </li>
                <li className="p-1.5 px-3 mb-1.5 rounded w-full bg-zinc-500 text-zinc-200 hover:bg-zinc-600 cursor-pointer transition-colors flex items-center justify-between text-sm">
                    <span>Cloud & Networking</span>
                    <span className="text-zinc-400">→</span>
                </li>
                <li className="p-1.5 px-3 mb-1.5 rounded w-full bg-zinc-500 text-zinc-200 hover:bg-zinc-600 400 cursor-pointer transition-colors flex items-center justify-between text-sm">
                    <span>Software Architecture</span>
                    <span className="text-zinc-400">→</span>
                </li>
                <li className="p-1.5 px-3 mb-1.5 rounded w-full bg-zinc-500 text-zinc-200 hover:bg-zinc-600 400 cursor-pointer transition-colors flex items-center justify-between text-sm">
                    <span>Performance & Failure Modes</span>
                    <span className="text-zinc-400">→</span>
                </li>
            </ul>
        </div>
    );
}
