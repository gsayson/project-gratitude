import {sql} from "@vercel/postgres"
import {PGMessage} from "@/common/types"
import Filter from "bad-words"
import {NextRequest} from "next/server"

export async function GET(request: NextRequest) {
  const _class = request.nextUrl.searchParams.get("class")
  if(_class == null) return Response.json({messages: []})
  const { rows } = await sql`SELECT * from RESPONSES where class=${_class}`
  const messages = rows.map(row => row as PGMessage)
  return Response.json({
    messages
  })
}

const FILTER = new Filter()

export async function POST(request: NextRequest) {
  const jsonPromise = await request.json()
  const body = jsonPromise as PGMessage
  if(
    !["4A", "4B", "4C", "4D", "4E", "4F", "4G", "4H", "4I"].includes(body.class.trim()) ||
    body.message.trim().length > 128 // message length <= 128 characters must be true!
  ) {
    return Response.json({
      message: "invalid data"
    }, {
      status: 400
    })
  }
  await sql`INSERT INTO RESPONSES (class, message) VALUES (${body.class.trim()}, ${FILTER.clean(body.message.trim())});`
  return Response.json({
    message: "success"
  })
}