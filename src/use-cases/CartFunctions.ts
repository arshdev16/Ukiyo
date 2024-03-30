import {
  updateDoc,
  doc,
  deleteDoc,
  collection,
  addDoc,
  query,
  limit,
  Query,
  getDocs,
  writeBatch
} from "firebase/firestore";
import { db } from "../lib/firebase";

export const AddToCart = async (
  collectionPath: string,
  price: number,
  productImage: number,
  name: string,
  amount: number,
  selectedSize: string | undefined
) => {
  try {
    const collectionRef = collection(db, collectionPath);
    const total = price * amount;
    const data = {
      name,
      price,
      productImage,
      quantity: amount,
      total,
      size: selectedSize,
    };
    await addDoc(collectionRef, data);
  } catch (e) {
    console.error(e);
  }
};

export const CartMinus = async (
  docPath: string,
  amount: number,
  total: number,
  price: number
) => {
  const docRef = doc(db, docPath);
  if (amount - 1 === 0) {
    return await deleteDoc(docRef);
  }
  const totalAmount = total - price;
  return await updateDoc(docRef, {
    quantity: amount - 1,
    total: totalAmount,
  });
};

export const CartPlus = async (
  docPath: string,
  amount: number,
  total: number,
  price: number
) => {
  const docRef = doc(db, docPath);
  const totalAmount = total + price;
  return await updateDoc(docRef, {
    quantity: amount + 1,
    total: totalAmount,
  });
};

export const ClearCart = (collectionPath: string) => {
  console.log(collectionPath)
  const collectionRef = collection(db, collectionPath)
  try {
    return new Promise((resolve, reject) => {
      //@ts-ignore
      DeleteCartBatch(collectionRef, resolve).catch(reject);
    });
  } catch (e) {
    console.error(e);
  }
};

const DeleteCartBatch = async (query: Query, resolve: () => void) => {
  const snapshot = await getDocs(query);
  const batchSize = snapshot.size;
  if (batchSize === 0) {
    resolve();
    return;
  }
  const batch = writeBatch(db)
  snapshot.docs.forEach((doc) => {
    batch.delete(doc.ref)
  })
  process.nextTick(()=>{
    DeleteCartBatch(query, resolve)
  })
};
