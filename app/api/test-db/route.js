import prisma from "@/lib/db";

export async function GET() {
  try {
    // Try to query the database
    const userCount = await prisma.user.count();
    
    return Response.json({
      success: true,
      message: "Database connection successful!",
      userCount,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error("Database connection error:", error);
    return Response.json(
      {
        success: false,
        error: error.message,
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}

