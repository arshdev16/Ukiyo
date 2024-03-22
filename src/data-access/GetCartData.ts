import { getDocs, collection, DocumentData } from "firebase/firestore";
import { useQuery } from "@tanstack/react-query";
import { db } from "../lib/firebase";
import { useAuth } from "../lib/useAuth";
import { CartItemData } from "../lib/interfaces";

const FetchCartData = async (collectionPath: string) => {
  const collectionRef = collection(db, collectionPath);
  const querySnapshot = await getDocs(collectionRef);
  const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return data;
};

const GetCartData = () => {
  const { user, loading } = useAuth();
  return useQuery({
    queryKey: ['cart'], 
    queryFn: () => FetchCartData(`/users/${user?.uid}/cart`),
    enabled: !!user && !loading
  });
};
export default GetCartData;
