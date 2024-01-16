import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";

export const SideBarItem = ({ title, body, id, date,
    imageUrls = [] }) => {

    const dispatch = useDispatch();

    const newTitle = useMemo(() => {
        return title.length > 17
            ? title.slice(0, 17) + '...'
            : title;
    }, [title]);

    const onClickNote = () => {
        dispatch(setActiveNote({ title, body, id, date, imageUrls }));
    }

    return (
        <li className="flex flex-row w-full h-full p-3 text-blue hover:text-black hover:bg-gray-200 cursor-pointer">
            <button className="flex w-full h-full gap-3 items-center" onClick={onClickNote}>
                <svg className="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20" onClick={onClickNote}>
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z" />
                </svg>
                <div className="flex flex-col text-start">
                    <h4 className="font-semibold">{newTitle}</h4>
                    <p className="font-light text-gray-600">{body}</p>
                </div>
            </button>
        </li>
    );
};
