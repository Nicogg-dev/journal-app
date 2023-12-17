import { useDispatch, useSelector } from "react-redux";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView } from "../views/NoteView";
import { NothingSelectedView } from "../views/NothingSelectedView";
import { startNewNote } from "../../store/journal/thunks";
import { savingNewNote } from "../../store/journal/journalSlice";


export const JournalPage = () => {
    
    const dispatch = useDispatch();
    const {isSaving, active} = useSelector(state => state.journal);
    
    const onCliclNewNote = () => {
        dispatch(savingNewNote())
        dispatch( startNewNote() );
    }

    return (
        <JournalLayout>

            {/* NothingSelected */}
            {
                active
                    ? <NoteView />
                    : <NothingSelectedView />
            }
            {/* <NothingSelectedView /> */}

            {/* NoteView */}
            {/* <NoteView /> */}

            <button className="fixed bottom-0 right-0 m-9  bg-red-800 hover:bg-red-700 hover:text-black font-bold py-2 px-4 rounded-full"
            onClick={onCliclNewNote}
            disabled={
                isSaving ? true : false
            }>
                <svg className="w-3 h-7 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                </svg>
            </button>

        </JournalLayout>
    );
};
