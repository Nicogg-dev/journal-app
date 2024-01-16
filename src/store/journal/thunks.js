import { collection, doc, getDocs, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';

import { addNewEmptyNote, setActiveNote, setNotes, setSaving } from './journalSlice';

export const startNewNote = () => {
    return async (dispatch, getState) => {

        //getState obtiene toda la data del store
        const { uid } = getState().auth;


        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const docRef = doc(collection(FirebaseDB, `${uid}/journal/notes`));
        await setDoc(docRef, newNote);


        newNote.id = docRef.id;

        //dispatch
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    }
}

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;

        const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
        const { docs } = await getDocs(collectionRef);

        const data = docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        })
        );

        dispatch(setNotes(data));
    }
}

export const startSaveNote = () => {
    return async (dispatch, getState) => {

        dispatch(setSaving());

        const { uid } = getState().auth;
        const { active: activeNote } = getState().journal;

        const noteToFirestore = { ...activeNote };
        delete noteToFirestore.id;

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${activeNote.id}`);
        await setDoc(docRef, noteToFirestore, { merge: true });

    }
}