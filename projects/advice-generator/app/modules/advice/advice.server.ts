export type Advice = {
  id: number;
  text: string;
};

type ResponseData = {
  slip: {
    id: number;
    advice: string;
  };
};

export async function getRandomAdvice(): Promise<Advice> {
  const response = await fetch("https://api.adviceslip.com/advice");
  const { slip }: ResponseData = await response.json();

  return {
    id: slip.id,
    text: slip.advice,
  };
}
