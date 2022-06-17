import { Form, useTransition } from "@remix-run/react";

import type { Advice } from "~/modules/advice";

type AdviceCardProps = {
  advice: Advice;
};

export function AdviceCard({ advice }: AdviceCardProps) {
  const { state } = useTransition();

  return (
    <main className="flex items-center justify-center px-4 h-screen bg-blue-bayoux-700">
      <Form replace method="get" action="/">
        <div
          className={[
            "relative",
            "flex",
            "flex-col",
            "items-center",
            "max-w-sm",
            "px-6",
            "py-8",
            "rounded-lg",
            "shadow-2xl",
            "bg-blue-bayoux-600",
            "text-botticelli-500",
            "md:max-w-md",
          ].join(" ")}
        >
          <h1
            className={[
              "mb-6",
              "text-aquamarine",
              "text-xs",
              "tracking-[0.2em]",
              "font-semibold",
              "uppercase",
            ].join(" ")}
          >
            Advice #{advice.id}
          </h1>
          <blockquote className="text-2xl font-bold text-center">
            {advice.text}
          </blockquote>
          <img
            className="m-6 w-full"
            role="separator"
            src="/images/pattern-divider-mobile.svg"
            srcSet="/images/pattern-divider-mobile.svg 375w,
                    /images/pattern-divider-desktop.svg 768w"
            alt=""
          />
          <button
            className={[
              "absolute",
              "top-[calc(100%-theme(space.7))]",
              "aspect-square",
              "px-4",
              "rounded-full",
              "bg-aquamarine",
              "transition-shadow",
              "hocus:shadow-[0_0_24px_0_theme(colors.aquamarine.DEFAULT)]",
            ].join(" ")}
            aria-label="Get a new advice"
            type="submit"
            disabled={state === "submitting"}
          >
            <img src="/images/icon-dice.svg" alt="Dice icon" />
          </button>
        </div>
      </Form>
    </main>
  );
}
