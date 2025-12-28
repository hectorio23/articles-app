import { AsideBar } from "./asideBar";
import { LanguajesBox } from "./languajesComponent";
import { Domains } from "./domains"
import { UserProfile } from "./userProfile"
 
export function Aside() {
    return (
        <aside className="px-4 w-90 border bg-zinc-900  rounded-3xl col-end-2 text-white h-full overflow-y-auto relative z-10" >
            <UserProfile/>
            <AsideBar />

            <hr className="border-gray-700 my-2" />

            <LanguajesBox />
            <Domains />

        </aside>
    );
}
