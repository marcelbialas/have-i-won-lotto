import { useState } from "react";

import type { MetaFunction } from "@remix-run/node";

import Header from "~/components/ui/Header";
import Hero from "~/components/ui/Hero";
import Result from "~/components/ui/Result";

export const meta: MetaFunction = () => {
  return [
    { title: "Have I Won Lotto?" },
    {
      name: "description",
      content:
        "Check your lucky numbers against past Lotto and EuroJackpot draws to see if and how much you would have won.",
    },
  ];
};

export default function Index() {
  const [numbers, setNumbers] = useState<number[]>([]);

  function addLottoNumbers(lottoNumbers: number[]) {
    setNumbers(lottoNumbers);
  }

  return (
    <div>
      <Header />
      {numbers.length <= 0 ? (
        <Hero setLottoNumbers={addLottoNumbers} />
      ) : (
        <Result />
      )}
    </div>
  );
}
