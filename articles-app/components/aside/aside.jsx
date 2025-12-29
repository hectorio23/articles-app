import { AsideBar } from "./asideBar";
import { LanguajesBox } from "./languajesComponent";
import { Domains } from "./domains"
import { UserProfile } from "./userProfile"
 
export function Aside({ article }) {
    return (
        <aside className="px-4 w-90 border border-gray-700 bg-gray-800 rounded-3xl  text-white h-full overflow-y-auto  z-10" >
            <UserProfile article={article} />
            <AsideBar article={article} />

            <hr className="border-gray-700 my-2" />

            <LanguajesBox article={article} />
            <Domains article={article} />

        </aside>
    );
}
