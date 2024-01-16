import { useSelector } from "react-redux";
import { SideBarItem } from "./SideBarItem";

export const SideBar = () => {

    const {displayName} = useSelector(state => state.auth);

    const {notes} = useSelector(state => state.journal);

    return (

        <aside className="pt-16 w-60 bg-gray-300">
            <div className="flex flex-col h-screen">

                <div className="p-3 text-center text-black">
                    <h3 className="text-2xl font-bold mb-4">{displayName}</h3>
                    <hr />
                </div>

                <ul className="flex flex-col items-center">
                    {
                        notes.map((note) => (
                            <SideBarItem key={note.id} {...note} />
                        ))
                    }
                </ul>

            </div>
        </aside>

    );
};
