import { NextResponse } from "next/server";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../../lib/firebase/config";
import {getStorage, ref, getDownloadURL} from "firebase/storage";

// This function can be marked `async` if using `await` inside

export async function GET(request, { params }) {
  const { categoria } = params;
  const productosRef = collection(db, "productsFirebase");
  console.log(productosRef);
  console.log("vindo do routes do firebase");
  const q =
    categoria === "all"
      ? productosRef
      : query(productosRef, where("type", "==", categoria));
  const querySnapshot = await getDocs(q);
  const docs = querySnapshot.docs.map((doc) => doc.data());
  console.log("dados vindo do firebase categoria");
  return NextResponse.json(docs);
}
