import { DocumentData, doc, getDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

export const GetDocClientSide = async (docId: string) =>  {
   try {
    const documentRef = doc(db, docId);
    const documentSnapshot = await getDoc(documentRef);

    if (documentSnapshot.exists()) {
      return documentSnapshot.data() as DocumentData;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}
