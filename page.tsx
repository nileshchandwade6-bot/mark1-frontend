import { redirect } from "next/navigation";

// Root just routes into the app — middleware handles the actual auth check.
export default function RootPage() {
  redirect("/dashboard");
}
