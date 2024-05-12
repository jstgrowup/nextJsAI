import { z } from "zod";

export const messgaeSchema = z.object({
  content: z
    .string()
    .min(10, { message: "content  must be at least of 10 characters" })
    .max(300, { message: "Content must be no longer than 300" }),
});
