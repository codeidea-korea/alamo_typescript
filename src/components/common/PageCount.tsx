interface Props {
  data: any
  page: number
  pageSize: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}

export default function PageSize({ data, pageSize, page, setPage }: Props) {
  const currentPageSize = data?.data
    ? data?.data.length / pageSize < 1
      ? 1
      : data?.data.length / pageSize
    : 1
  return (
    <div className="mt-3 flex items-center justify-between">
      <span className="btn btn-sm btn-secondary-soft w-24">
        총 {data?.count.toLocaleString()}건
      </span>

      <div>
        <input
          id="regular-form-1"
          type="text"
          className="form-control form-control-sm mr-1 w-12 text-center"
          value={page}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value
            setPage((v) =>
              Number(value) > 0 && Number(value) < currentPageSize
                ? Number(value)
                : v,
            )
          }}
        />
        / {currentPageSize}
      </div>
    </div>
  )
}
