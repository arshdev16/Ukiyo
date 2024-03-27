import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { User, onAuthStateChanged } from "firebase/auth";
import { useRouter, usePathname } from "next/navigation";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const path = usePathname();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        router.replace("/enter");
      }
      setLoading(false);
    });

    return unsubscribe;
  }, [router, path]);

  return { user, loading };
}
