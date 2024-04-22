import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/config";

export async function GET() {
  const productsRef = collection(db, "productsFirebase");
  const querySnapshot = await getDocs(productsRef);
  const docs = querySnapshot.docs.map(cartItem => {
    return {
      id: cartItem.id,
      ...cartItem.data(),
    };
  });

  return Response.json(docs);
}
