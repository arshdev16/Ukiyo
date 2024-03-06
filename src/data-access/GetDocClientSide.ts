import { DocumentData, doc, getDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

export const GetDocClientSide = async (docId: string) =>  {
   try {
    const documentRef = doc(db, docId);
    const documentSnapshot = await getDoc(documentRef);

    if (documentSnapshot.exists()) {
      return documentSnapshot.data() as DocumentData;
    } else {
      console.log('Document does not exist');
      return null;
    }
  } catch (error) {
    console.error('Error fetching document:', error);
    return null;
  }
}
