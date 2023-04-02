import { useContext } from 'react'

import { twMerge } from 'tailwind-merge'

import { formInlineContext } from '../FormInline'

type FormLabelProps = React.PropsWithChildren &
  React.ComponentPropsWithoutRef<'label'>

function FormLabel(props: FormLabelProps) {
  const formInline = useContext(formInlineContext)
  return (
    <label
      {...props}
      className={twMerge([
        'mb-2 inline-block',
        formInline && 'mb-2 sm:mb-0 sm:mr-5 sm:text-right',
        props.className,
      ])}
    >
      {props.children}
    </label>
  )
}

export default FormLabel
