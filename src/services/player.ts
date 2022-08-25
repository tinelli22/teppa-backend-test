import { addDoc, getFirestore, collection, getDoc, doc, query, getDocs } from "firebase/firestore";
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

        return resp.data()
        
    } catch (err) {
        return err
    }
}

const getAll = async () => {
    try {
        const q = query(dbCollectionRef)
        const resp = await getDocs(q)
        console.log(resp);
        
    } catch (err) {
        return err
    }
}

export default {
  add,
  get,
  getAll
};
