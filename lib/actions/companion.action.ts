"use server";

import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "../supabase";

export const createCompanion = async (formData: CreateCompanion) => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const supabase = createSupabaseClient();

  const { data, error } = await supabase
    .from("companion")
    .insert({
      ...formData,
      author: userId,
    })
    .select()
    .single(); // ✅ FIX

  if (error) {
    console.error("Error creating companion:", error);
    throw new Error(error.message);
  }

  return data; // now it's a single object
};