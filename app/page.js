import { getQueryClient, caller } from "@/trpc/server";
// import { Client } from "./client"
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Suspense } from "react";

export default async function Home() {
  const queryClient = getQueryClient();

  // Fetch data directly using the caller
  const data = await caller.hello({ text: "from tRPC" });

  return (
   <div>
    <h1>{data.greeting}</h1>
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<div>Loading...</div>}>
      {/* <Client /> */}
      </Suspense>
    </HydrationBoundary>

   </div>
  );
}
