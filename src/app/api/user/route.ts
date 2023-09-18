import { pwdHasher } from "@/libs/bcrypt/passord";
import { createRecord, getRecords } from "@/libs/mongoose/mongoseCrud";
import { NextResponse } from "next/server";
const table = "users";
const headers: any = {
  "Content-Type": "application/json",
};
export async function GET(request: Request) {
  try {
    const data = await getRecords(table);
    // console.log({ data })

    return new Response(JSON.stringify(data || []), {
      status: 200,
      statusText: "OK",
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers,
    });
  }
}

export async function POST(request: Request) {
  try {
    let obody = await request.json(),
      { confirmPassword, ...body } = obody;
    if (body["vendor"].includes("odasa")) {
      body["role"] = "admin";
    } else if (body["vendor"].includes("mds")) {
      body["role"] = "su";
    } else {
      body["role"] = "vendor";
    }
    body["status"] = false;
    const { hashedPassword, hashSalt } = pwdHasher(body["password"]);
    body["password"] = hashedPassword;
    body["hashSalt"] = hashSalt;

    const result = await createRecord(table, body);

    return NextResponse.json({ result }, { status: 201 });
  } catch (error: any) {
    console.log({ error: error.message });
    return NextResponse.json(
      { error: error.message },
      { status: 500, headers }
    );
  }
}
