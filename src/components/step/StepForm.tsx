import React from 'react'
import { IStep } from './Step'

interface StepFormProps {
  addStep: (step: IStep) => void;
}

export const StepForm: React.FC<StepFormProps> = ({ addStep }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const target = event.target as HTMLFormElement
    const formData = new FormData(target)
    addStep(Object.fromEntries(formData))
    target.reset();
  }

  return (
    <form onSubmit={handleSubmit} className='w-full flex gap-4 mb-8'>
      <input
        className="input input-bordered w-full max-w-xs"
        type="date"
        name="date"
        placeholder='Дата'
        required
      />
      <input
        className="input input-bordered w-full max-w-xs"
        type="number"
        name="distance"
        step={'any'}
        min={0}
        placeholder='Пройдено (км)'
        required
      />
      <button className='btn' type="submit">ОК</button>
    </form>
  )
}
