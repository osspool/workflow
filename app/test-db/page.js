import prisma from "@/lib/db";

export default async function TestDB() {
  let connectionStatus = "checking...";
  let userCount = 0;
  let error = null;

  try {
    userCount = await prisma.user.count();
    connectionStatus = "✅ Connected!";
  } catch (e) {
    connectionStatus = "❌ Connection Failed";
    error = e.message;
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>Database Connection Test</h1>
      <div style={{ marginTop: "1rem" }}>
        <p><strong>Status:</strong> {connectionStatus}</p>
        <p><strong>User Count:</strong> {userCount}</p>
        {error && (
          <div style={{ marginTop: "1rem", color: "red" }}>
            <strong>Error:</strong> {error}
          </div>
        )}
      </div>
      <div style={{ marginTop: "2rem", padding: "1rem", background: "#f5f5f5", borderRadius: "8px" }}>
        <h3>Test Methods:</h3>
        <ul>
          <li>Visit <code>/api/test-db</code> for JSON response</li>
          <li>Visit <code>/test-db</code> (this page) for UI test</li>
          <li>Run <code>npx prisma studio</code> to open database GUI</li>
        </ul>
      </div>
    </div>
  );
}

