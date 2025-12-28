import { RecentActivity } from "./recentActivity"
import { Concepts } from "./concepts"
import { Contents } from "./contents"

export function MenuModal() {
    return (
        <aside className="p-2 w-90 border border-gray-700 bg-gray-800 rounded-3xl col-end-6 text-white h-full overflow-y-auto">
            <RecentActivity />
            <hr className="border-gray-700 my-2" />
            <Concepts />
            < Contents/>
        </aside>
    )
} 