"use server";

import { db } from '../../db';
import { contactMessages } from '../../db/schema';

export async function submitContactForm(name: string, email: string, message: string) {
  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  if (!db) {
    return { success: false, error: "Database connection is not configured." };
  }

  try {
    await db.insert(contactMessages).values({ name, email, message });
    return { success: true, error: null };
  } catch (error) {
    console.error("Database insert error:", error);
    return { success: false, error: "Failed to send message. Please try again." };
  }
}
