import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "node:crypto";
const key = process.env.SESSION_SECRET || "dev-only-session-secret-change-me";
export function sign(value:string){return createHmac("sha256",key).update(value).digest("hex");}
export async function currentUserId(){const store=await cookies();const raw=store.get("hy_session")?.value;if(!raw)return null;const [id,sig]=raw.split(".");if(!id||!sig)return null;const expected=sign(id);return timingSafeEqual(Buffer.from(sig),Buffer.from(expected))?id:null;}
