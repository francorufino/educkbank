"use client";
import Button from "../components/button/Button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <main className="container">
        <h1>Uh oh... how did you end up here? </h1>
        <h1 className="mb-6">
          No worries, duckie...let's get you back to safe waters
        </h1>
        <Button onClick={() => router.back()}>Go back</Button>
      </main>
    </>
  );
}
