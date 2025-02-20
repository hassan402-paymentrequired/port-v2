import inits from '@/images/logos/inits-logo.png'
import { Button } from '../Button'
import ArrowDownIcon from '../icon/ArrowDownIcon'
import BriefcaseIcon from '../icon/BriefcaseIcon'
import Role from './Role'

export default function Resume() {
  let resume= [
    {
      company: 'INITS LIMITED',
     title: 'Backend Intern',
      logo: inits,
      start: '2024',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'INITS LIMITED',
      title: 'Backend Trainee',
      logo: inits,
      start: '2023',
      end: '2024',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work Experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="#" variant="primary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}