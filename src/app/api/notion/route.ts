import { NextRequest, NextResponse } from "next/server";
import NotionClient from "@/libs/notion";
export async function POST(req: NextRequest) {
  const databaseId = await req.json();

  try {
    const response = await NotionClient.databases.query({
      database_id: databaseId,
    });
    console.log(response);
    return NextResponse.json("success");
  } catch (err) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
