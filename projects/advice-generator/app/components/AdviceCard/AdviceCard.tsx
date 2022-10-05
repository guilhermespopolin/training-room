import type { Advice } from "~/modules/advice";

import { Form, useTransition } from "@remix-run/react";

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
            "aspect-video",
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
          <blockquote className="flex-1 text-2xl font-bold text-center">
            "{advice.text}"
          </blockquote>
          <img
            className="m-6 w-full"
            role="separator"
            src="/images/pattern-divider-mobile.svg"
            srcSet="/images/pattern-divider-mobile.svg 375w,
                    /images/pattern-divider-desktop.svg 768w"
            sizes="400px"
            alt="separator"
          />
          <button
            type="submit"
            className={[
              "absolute",
              "top-[calc(100%-theme(space.7))]",
              "aspect-square",
              "px-4",
              "rounded-full",
              "bg-aquamarine",
              "transition-shadow",
              "enabled:hocus:shadow-[0_0_24px_0_theme(colors.aquamarine.DEFAULT)]",
              "disabled:cursor-not-allowed",
            ].join(" ")}
            aria-label="Get a new advice"
            disabled={state === "submitting"}
          >
            {state === "submitting" ? (
              <svg
                className="animate-spin h-5 w-5 text-blue-bayoux"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              <img src="/images/icon-dice.svg" alt="Dice icon" />
            )}
          </button>
        </div>
      </Form>
    </main>
  );
}
