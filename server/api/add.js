import { db, waitListUser } from "~/db/index";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const newEntry = {
      id: crypto.randomUUID(),
      email: body.email,
      dateTime: new Date().toISOString(),
    };

    await db.insert(waitListUser).values(newEntry);

    return newEntry;
  } catch (error) {
    return error;
  }
});
