import { getDocs, collection, DocumentData } from "firebase/firestore";
import { useQuery } from "@tanstack/react-query";
import { db } from "../lib/firebase";
import { useAuth } from "../lib/useAuth";
import { CartItemData } from "../lib/interfaces";

const GetCartData = async () => {
  const { user } = useAuth();
  const dataArray: DocumentData = [];
  try {
    if (user) {
      const collectionRef = collection(db, `/users/${user.uid}/cartData`);
      const snapshot = await getDocs(collectionRef);
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      console.log(data)
      return data;
    } else {
      return false
    }
  } catch (e) {
    console.log(e);
  }
};

export default GetCartData;
