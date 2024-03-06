import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { productData } from "../lib/interfaces";

export const GetCollection = async (queryPath: string) => {
 const data: productData[] = []
  const collectionRef = collection(db, queryPath);
  const collectionSnapshot = await getDocs(collectionRef)
    collectionSnapshot.forEach((doc)=> {
      //@ts-ignore
      data.push(doc.data())
    })
    return data;
};