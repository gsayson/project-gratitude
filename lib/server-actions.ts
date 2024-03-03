"use server"

import {sql} from "@vercel/postgres"
import BadWordsFilter from "bad-words"

const CLEANER = new BadWordsFilter()

export async function responseMutate(nickname1: string, clazz: string, response1: string, email: string) {
  const nickname = CLEANER.clean(nickname1)
  const response = CLEANER.clean(response1)
  try {
    await sql`
      INSERT INTO RESPONSES (email, nickname, clazz, response) VALUES (${email}, ${nickname}, ${clazz}, ${response})
      ON CONFLICT(email) 
      DO UPDATE SET
        nickname = EXCLUDED.nickname,
        clazz = EXCLUDED.clazz,
        response = EXCLUDED.response
    `
  } catch (e) {
    return {
      message: "Failed to submit."
    }
  }
  return {
    message: "Success!"
  }
}