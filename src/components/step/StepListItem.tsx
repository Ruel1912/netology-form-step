import React from 'react'
import { IStep } from './Step'
import { MdDelete } from 'react-icons/md'

interface StepListItemProps {
  step: IStep
  deleteStep: (step: IStep) => void
}

export const StepListItem: React.FC<StepListItemProps> = ({
  step,
  deleteStep,
}) => {
  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })

  return (
    <tr>
      <td className="text-center">{formatDate(step.date)}</td>
      <td className="text-center">{step.distance}</td>
      <td className="text-center">
        <button onClick={() => deleteStep(step)}>
          <MdDelete />
        </button>
      </td>
    </tr>
  )
}
