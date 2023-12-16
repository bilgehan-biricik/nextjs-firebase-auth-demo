import { redirect } from "next/navigation";

import { isUserAuthenticated } from "@/lib/firebase/firebase-admin";
import PageContent from "../_components/PageContent";

export default async function SignInPage() {
  if (await isUserAuthenticated()) redirect("/dashboard");

  return (
    <main className="container">
      <PageContent variant="sign-in" />
    </main>
  );
}
