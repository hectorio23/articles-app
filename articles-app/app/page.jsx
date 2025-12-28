// import { buttonVariants } from "@/components/ui/button";
import { Aside } from "@/components/aside/aside";
import { MenuModal } from "@/components/menuModal/menuModal";
import { Header } from "@/components/header/header"


export default function Page() {
    return (
        <div className="grid grid-cols-4 gap-1 h-screen bg-gray-900">
            <Header />
            <Aside />
            <MenuModal />
        </div>
    );
}
