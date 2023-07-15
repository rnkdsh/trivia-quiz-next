import { Question } from '../../types/Question';

interface QuestionProps {
  question: Question;
  onNext: (isCorrect: boolean) => void;
}

export default function QuestionItem(props: QuestionProps) {
  const shuffledOptions = [
    ...props.question.incorrect_answers,
    props.question.correct_answer,
  ].sort(() => Math.random() - 0.5);

  function submitAnswer(answer: string) {
    const isCorrect = props.question.correct_answer === answer;
    props.onNext(isCorrect);
  }

  return (
    <div className='flex flex-col gap-4'>
      <div dangerouslySetInnerHTML={{ __html: props.question.question }} />
      <div className='grid grid-flow-row'>
        {shuffledOptions.map((option) => (
          <button
            key={option}
            className='bg-gray-200 p-2 rounded-md'
            // className='bg-white text-black p-4 rounded-md'
            onClick={() => submitAnswer(option)}
          >
            <div dangerouslySetInnerHTML={{ __html: option }} />
          </button>
        ))}
      </div>
    </div>
  );
}
