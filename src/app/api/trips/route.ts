import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET() {
  try {
    const trips = await prisma.trip.findMany({
      orderBy: { durationDays: "asc" },
      include: {
        translations: true,
        itineraries: {
          orderBy: { dayNumber: "asc" },
          include: {
            translations: true,
            destinations: {
              orderBy: { order: "asc" },
            },
          },
        },
        flights: {
          orderBy: { order: "asc" },
        },
        hotels: {
          orderBy: { checkInDay: "asc" },
        },
        includes: true,
        excludes: true,
        tips: true,
      },
    });

    return NextResponse.json(trips);
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        message: error.message,
        code: error.code,
        name: error.name,
        stack: error.stack,
      },
      { status: 500 },
    );
  }
}
