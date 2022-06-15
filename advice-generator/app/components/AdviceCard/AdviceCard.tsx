import { Form } from "@remix-run/react";

import type { Advice } from "~/modules/advice";

type AdviceCardProps = {
  advice: Advice;
};

export function AdviceCard({ advice }: AdviceCardProps) {
  return (
    <main className="flex items-center justify-center px-4 h-screen bg-blue-bayoux-700">
      <Form method="get" action="/">
        <div className="relative flex flex-col items-center max-w-sm px-6 py-8 rounded-lg shadow-2xl bg-blue-bayoux-600 text-botticelli-500 font-bold md:max-w-md">
          <h1 className="mb-6 text-aquamarine text-xs tracking-widest uppercase">
            Advice #{advice.id}
          </h1>
          <blockquote className="text-2xl text-center">
            {advice.text}
          </blockquote>
          <img
            className="m-6 w-full"
            role="separator"
            src="/images/pattern-divider.svg"
            alt=""
          />
          <button
            className="absolute top-[calc(100%-theme(space.7))] aspect-square px-4 rounded-full bg-aquamarine"
            aria-label="Get a new advice"
            type="submit"
          >
            <img src="/images/icon-dice.svg" alt="Dice icon" />
          </button>
        </div>
      </Form>
    </main>
  );
}
