'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'

type ControlProps = ComponentProps<'input'>

export function Control(props: ControlProps) {
  const { multiple = false } = props
  const { id, onFileSelected } = useFileInput()

  function handleFileSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return
    }

    const files = Array.from(event.target.files)

    onFileSelected(files, multiple)
  }
  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      onChange={handleFileSelected}
      {...props}
    />
  )
}
