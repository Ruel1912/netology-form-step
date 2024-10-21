import React from 'react'
import { IStep } from './Step'
import { StepListItem } from './StepListItem'

interface StepListProps {
  steps: IStep[]
  deleteStep: (step: IStep) => void
}

export const StepList: React.FC<StepListProps> = ({ steps, deleteStep }) => {
  const sortedSteps = [...steps].sort(
    (a, b) =>
      new Date(b.date.split('.').reverse().join('-')).getTime() -
      new Date(a.date.split('.').reverse().join('-')).getTime()
  )

  return (
    sortedSteps.length ? (
      <div className="overflow-x-auto w-full rounded-xl border border-slate-200 p-4">
        <table className="w-full">
          <thead>
            <th className="pb-4">Дата</th>
            <th className="pb-4">Пройдено (км)</th>
            <th className="pb-4">Действия</th>
          </thead>
          <tbody>
            {sortedSteps.map((step) => (
              <StepListItem key={step.id} step={step} deleteStep={deleteStep} />
            ))}
          </tbody>
        </table>
      </div>
    ) : 'Добавьте свою первую тренировку'
  )
}
