import { addDoc, getFirestore, collection, getDoc, doc, query, getDocs, deleteDoc, setDoc } from "firebase/firestore";
import firebaseApp from "../config/firebase";
import { IPlayer } from "../interfaces/player";

const DATA_BASE_NAME = "teppa";
const db = getFirestore(firebaseApp());
const dbCollectionRef = collection(db, DATA_BASE_NAME);

const add = async (data: IPlayer) => {
  return addDoc(dbCollectionRef, data)
    .then((resp) => resp.id)
    .catch((err) => err);
};

const get = async (id: string) => {
    try {
        const docRef = doc(db, DATA_BASE_NAME, id)
        const resp = await getDoc(docRef);
    
        if(!resp.exists()) throw Error("Não encontrado")

        return {id: resp.id, ...resp.data()}
        
    } catch (err) {
        return err
    }
}

const getAll = async () => {
    try {
        const q = query(dbCollectionRef)
        const resp = await getDocs(q)
        const docs = [] as any[]
        resp.forEach(d => docs.push({ id: d.id, ...d.data()}))
        return docs
    } catch (err) {
        return err
    }
}

const remove = async (id: string) => {
    try {
        const docRef = doc(db, DATA_BASE_NAME, id)
        await deleteDoc(docRef);
        return true;
    } catch (err) {
        return err
    }
}

const update = async (data: IPlayer) => {
    try {
        const docRef = doc(db, DATA_BASE_NAME, data.id!);
        delete data.id;
        await setDoc(docRef, data);
        return true;
    } catch (err) {
        return err
    }
}

export default {
  add,
  get,
  getAll,
  remove,
  update
};
