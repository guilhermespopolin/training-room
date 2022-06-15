import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getRandomAdvice } from "~/modules/advice";
import { AdviceCard } from "~/components/AdviceCard";

type LoaderData = {
  advice: Awaited<ReturnType<typeof getRandomAdvice>>;
};

export const loader: LoaderFunction = async () => {
  const advice = await getRandomAdvice();

  return json<LoaderData>({ advice });
};

export default function Index() {
  const { advice } = useLoaderData<LoaderData>();

  return <AdviceCard advice={advice} />;
}
