import { FieldValues, UseFormRegister } from 'react-hook-form'

interface Props {
  id: string
  label: string
  register: any
}

export default function CheckboxUse({ id, label, register }: Props) {
  return (
    <label className="flex cursor-pointer items-center gap-2">
      <input className="form-check-input" type="checkbox" {...register(id)} defaultChecked />
      {label}
    </label>
  )
}
