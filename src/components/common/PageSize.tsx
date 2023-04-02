interface Props {
  pageSize: number
  setPageSize: React.Dispatch<React.SetStateAction<number>>
}

export default function PageSize({ pageSize, setPageSize }: Props) {
  return (
    <div className="ml-auto flex gap-2">
      <select
        className="form-select-sm form-select w-20"
        value={pageSize}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setPageSize(Number(e.target.value))
        }
      >
        <option value="10">10개</option>
        <option value="20">20개</option>
        <option value="50">50개</option>
        <option value="100">100개</option>
      </select>
    </div>
  )
}
