import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { User, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.emailVerified) {
          setUser(user);
          router.push('/')
        } else {
          router.replace("/enter/verifyEmail");
        }
      } else {
        setUser(null);
        router.replace('/enter')
      }
      setLoading(false);
    });

    return unsubscribe;
  }, [router]);

  return { user, loading };
}
