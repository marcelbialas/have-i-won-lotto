import { useState } from "react";

import { ActionFunction, json } from "@remix-run/node";
import { Link, useActionData } from "@remix-run/react";

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface LottoEntry {
  id: number;
  date: string;
  Lottozahl: number[];
  Superzahl?: number;
}

interface LottoData {
  data: LottoEntry[];
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const lottoNumbersString = formData.get("lottoNumbers") as string;

  const inputNumbers = lottoNumbersString.split(",").map(Number);

  const filePath = path.join(__dirname, "../assets/Lottonumbers_complete.json");

  const fileData = await fs.readFile(filePath, "utf-8");
  const jsonData: LottoData = JSON.parse(fileData);

  const arraysAreEqual = (arr1: number[], arr2: number[]) => {
    if (arr1.length !== arr2.length) return false;
    const sortedArr1 = [...arr1].sort((a, b) => a - b);
    const sortedArr2 = [...arr2].sort((a, b) => a - b);
    return sortedArr1.every((value, index) => value === sortedArr2[index]);
  };

  const match = jsonData.data.find((entry) =>
    arraysAreEqual(entry.Lottozahl, inputNumbers)
  );

  if (match) {
    return json({
      success: true,
      numbers: inputNumbers,
      date: match.date,
    });
  } else {
    return json({ success: false, message: "No match found" });
  }
};

export default function Result() {
  const actionData = useActionData<{
    success: boolean;
    numbers?: number[];
    date?: string;
    message?: string;
  }>();
  const [loading, setLoading] = useState(true);

  if (actionData && loading) {
    setLoading(false);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (actionData?.success) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-2 mt-20 p-4">
        <Link to="/" className="mb-5 text-purple">
          ‹ Check more numbers
        </Link>
        <h2 className="text-4xl text-center">Congratulations!</h2>
        <h3 className="text-xl mb-2 text-center">
          Your numbers {actionData.numbers?.join(", ")} were a match.
        </h3>
        <p>The winning date was: {actionData.date}</p>
      </div>
    );
  } else {
    return (
      <div className="w-full flex flex-col items-center justify-center text-2xl mt-20 text-center p-8">
        <Link to="/" className="mb-5 text-purple">
          ‹ Check more numbers
        </Link>
        {"This combination has never hit the jackpot. Will you be the first?"}
      </div>
    );
  }
}
