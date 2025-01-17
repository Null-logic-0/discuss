"use server";

import { redirect } from "next/navigation";

export async function search(formdata: FormData) {
  const term = formdata.get("term");

  if (typeof term !== "string" || !term) {
    redirect("/");
  }

  redirect(`/search?term=${term}`);
}
