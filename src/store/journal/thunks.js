import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';

import { addNewEmptyNote, setActiveNote } from './journalSlice';

export const startNewNote = () => {
    return async(dispatch, getState) => {
        
        //getState obtiene toda la data del store
        const {uid} = getState().auth;
        

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection(FirebaseDB, `${uid}/journal/notes`) );
        await setDoc(newDoc, newNote);
        
        newNote.id = newDoc.id;

        //dispatch
        dispatch( addNewEmptyNote(newNote) );
        dispatch( setActiveNote (newNote) );
    }
}