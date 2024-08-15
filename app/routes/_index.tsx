import { useState } from "react";

import type { MetaFunction } from "@remix-run/node";

import Hero from "~/components/ui/Hero";

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
  return (
    <div>
      <Hero />
    </div>
  );
}
