import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold md:text-4xl">
        React MasterClass
      </h1>
      <p className="mt-2 text-sm text-gray-500">
        A practical learning experience of React by Aman Shah aka 10xDevAman(
          <a
            href="https://10xdevaman.com"
            target='_blank'
            rel='noopener noreferrer'
            className='underline'
          >
            10xDevAman
          </a>
        ), crafted from the ChaiCode Web Dev Cohort 2026.
      </p>
    </div>
  )
}
