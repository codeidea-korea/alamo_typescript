interface Props {
  id: string
  label: string
  value: string
  register: any
}

export default function Radio({ id, label, value, register }: Props) {
  return (
    <label className="flex cursor-pointer items-center gap-2">
      <input
        className="form-check-input"
        type="radio"
        value={value}
        {...register(id)}
      />
      {label}
    </label>
  )
}
