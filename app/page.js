import { getQueryClient } from "@/trpc/server";
// import { Client } from "./client"
import { HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

export default function Home() {
  const queryClient = getQueryClient();

  queryClient.prefetchQuery(trpc.hello);
  return (
   <div>
    <HydrationBoundary state={dehydratedState(queryClient)}>
      <Suspense fallback={<div>Loading...</div>}>
      {/* <Client /> */}
      </Suspense>
    </HydrationBoundary>

   </div>
  );
}
