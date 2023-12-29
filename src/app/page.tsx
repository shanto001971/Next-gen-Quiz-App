import Image from 'next/image'
import Link from 'next/link'
import Quiz from '@/app/QuizPage/Quiz'
import RulesAndSteps from '@/app/RoulsAndSteps/RulesAndSteps'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <RulesAndSteps/>
      </div>
    </main>
  )
}
