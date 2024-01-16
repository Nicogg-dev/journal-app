import { useDispatch, useSelector } from "react-redux";
import { ImageGallery } from "../components/ImageGallery";
import { useForm } from "../../hooks/useForm";
import { useEffect, useMemo } from "react";
import { setActiveNote, updateNote } from "../../store/journal/journalSlice";
import { startSaveNote } from "../../store/journal/thunks";

export const NoteView = () => {

    const dispatch = useDispatch();

    const { active: noteActive } = useSelector(state => state.journal);

    const { body, title, date, onInputChange, formState } = useForm(noteActive);

    const dateString = useMemo(() => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [date]);
    
    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState]);

    const onSaveNote = () => {
        dispatch(startSaveNote());
        dispatch(updateNote(noteActive));
    }

    return (
        <div className="flex h-full flex-col mb-1 animate__animated animate__fadeInRight animate__faster">
            <div className="flex col-span-12 flex-row justify-between">
                <p className="text-3xl font-light">
                    {dateString}
                </p>
                <div>
                    <button 
                    onClick={onSaveNote}
                    className="flex gap-2 hover:bg-gray-300 pb-2 pt-1 px-2 hover:rounded-xl text-2xl items-end justify-center text-center active:bg-gray-500">
                        <svg className="w-8 h-7 text-gray-800 dark:text-dark" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5h8m-1-3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1m6 0v3H6V2m6 0h4a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4m0 9.464 2.025 1.965L12 9.571" />
                        </svg>
                        save
                    </button>
                </div>
            </div>

            <div className="flex flex-col">
                <input 
                type="title" 
                className="text-xl font-light text-gray-800 dark:text-dark bg-gray-200 p-2 rounded-lg mt-4"
                placeholder="Ingrese un titulo"
                name="title" 
                value={title}
                onChange={onInputChange}/>
            </div>
            <div className="flex flex-col mt-2">
                <textarea 
                rows='4' 
                type="text" 
                className="text-xl font-light text-gray-800 dark:text-dark bg-gray-200 p-2 rounded-lg" 
                placeholder="¿Que sucedió el día de hoy?" 
                name="body"
                value={body}
                onChange={onInputChange}/>
            </div>

            {/* Image Gallery */}
            <ImageGallery />
        </div>
    );
};
