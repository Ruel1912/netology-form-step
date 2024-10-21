import { useState } from 'react'
import { StepForm } from './StepForm'
import { StepList } from './StepList'

export interface IStep {
  id: number
  date: string
  distance: number
}

export const Step = () => {
  const [stepData, setStepData] = useState<IStep[]>([
    { id: 1, date: '2019-07-20', distance: 5.7 },
    { id: 2, date: '2019-07-19', distance: 14.2 },
    { id: 3, date: '2019-07-18', distance: 3.4 },
  ])

  const newId = stepData.length
    ? Math.max(...stepData.map((item) => item.id)) + 1
    : 1

  const addStep = (step: IStep) => {
    const newStep: IStep = {
      id: newId,
      date: step.date,
      distance: Number(step.distance),
    }

    const existItem = stepData.find((item) => item.date === newStep.date)

    if (existItem) {
      const updatedSteps = stepData.map((item) =>
        item.date === newStep.date
          ? { ...item, distance: item.distance + newStep.distance }
          : item
      )
      setStepData(updatedSteps)
    } else {
      setStepData([...stepData, newStep])
    }
  }

  const sortedSteps = stepData.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  
  const deleteStep = ({ id }: IStep) =>
    setStepData(stepData.filter((step) => step.id !== id))

  return (
    <div className="step-wrapper w-full max-w-[500px] mx-auto">
      <StepForm addStep={addStep} />
      <StepList steps={sortedSteps} deleteStep={deleteStep} />
    </div>
  )
}
