import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  email: text().notNull().unique(),
});

export const dreams = sqliteTable("dreams", {
  id: int().primaryKey({ autoIncrement: true }),
  userId: int().notNull(),
  createdAt: text().notNull(),
  transcription: text().notNull(),
});

export type User = typeof users.$inferSelect;
export type Dream = typeof dreams.$inferSelect;
