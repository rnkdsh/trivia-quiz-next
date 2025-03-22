"use client";

import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function Navbar() {
  const quizState = useSelector((state: RootState) => state.quiz);
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 backdrop-blur-lg">
      <div className="max-w-(--breakpoint-xl) flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/">
          <Image
            src="/trivia.svg"
            alt="Logo"
            width={100}
            height={24}
            priority
          />
        </Link>
        <div className="flex flex-row gap-4 items-center">
          <div className="flex bg-yellow-200 border-amber-300 border-2 rounded-full px-6 py-2 font-bold">
            {quizState.totalQuestionsAnsweredCorrectly} /{" "}
            {quizState.totalQuestionsAnswered}
          </div>
          <Link
            href="https://github.com/rnkdsh/trivia-quiz-next"
            target="_blank"
          >
            <Image
              src="/github-mark.svg"
              alt="GitHub"
              width={98}
              height={96}
              className="h-8 w-auto"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
