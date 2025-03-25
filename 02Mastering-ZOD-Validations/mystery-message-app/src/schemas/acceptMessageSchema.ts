import { z } from "zod";

export const AcceptMessageSchema = z.object({
  content: z.boolean(),
});
