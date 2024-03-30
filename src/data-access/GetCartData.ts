import { getDocs, collection, DocumentData } from "firebase/firestore";
import { useQuery } from "@tanstack/react-query";
import { db } from "../lib/firebase";
import { useUserStore } from "../lib/store";

const FetchCartData = async (collectionPath: string) => {
  const collectionRef = collection(db, collectionPath);
  const querySnapshot = await getDocs(collectionRef);
  const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return data;
};

const GetCartData = () => {
  const {userData} = useUserStore()
  return useQuery({
    queryKey: ['cart'], 
    queryFn: () => FetchCartData(`/users/${userData?.uid}/cart`),
    enabled: !!userData 
  });
};
export default GetCartData;
