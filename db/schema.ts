import { varchar, pgTable } from "drizzle-orm/pg-core";

export const waitListUser = pgTable("aura-waitlist", {
  id: varchar("id").primaryKey(),
  email: varchar("email").notNull(),
  dateTime: varchar("dateTime").notNull()
});
