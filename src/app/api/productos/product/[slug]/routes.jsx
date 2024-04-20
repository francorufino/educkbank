import { NextResponse } from "next/server";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebase/config";

export async function GET(_, { params }) {
  const { slug } = params;
  const docRef = doc(db, "productsFirebase", slug);
  const docSnapshot = await getDoc(docRef);
  console.log("data coming from firebase slug");
  return NextResponse.json(docSnapshot.data());
}
