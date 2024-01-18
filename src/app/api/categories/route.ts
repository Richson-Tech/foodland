import { NextResponse } from "next/server";

// FETCH ALL CATEGORIES
export const GET = () => {
  try {
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }

  return new NextResponse("Hello", { status: 200 });
};
