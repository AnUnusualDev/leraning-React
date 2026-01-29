"use server";
import { prisma } from "@/prisma/client";
import bcrypt from "bcrypt";

export async function updatePasswordAction(email: string, newPassword: string) {
  const hashed = await bcrypt.hash(newPassword, 10);
  await prisma.user.update({
    where: { email },
    data: { hashedPassword: hashed },
  });
  return { success: true };
}
