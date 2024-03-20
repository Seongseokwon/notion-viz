import authOptions from "@/libs/config/authOptions";
import { getServerSession } from "next-auth";

export default async function getSession() {
  return await getServerSession(authOptions);
}
