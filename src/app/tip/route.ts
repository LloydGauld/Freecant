import { NextResponse } from "next/server";
import { TIP_URL } from "@/data/site";

// Temporary (307) redirect so the destination can change freely — update
// TIP_URL in src/data/site.ts and this route picks it up automatically.
export function GET() {
  return NextResponse.redirect(TIP_URL, 307);
}
