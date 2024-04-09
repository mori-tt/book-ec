import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

// 購入履歴検索API
export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const userId = params.userId;
  try {
    const purchase = await prisma.purchase.findMany({
      where: { userId: userId },
    });
    return NextResponse.json(purchase);
  } catch (err) {
    return NextResponse.json(err);
  }
}
