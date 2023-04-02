import useGetList, { ReturnType } from '@/hooks/useGetList'

interface Item {
  groupCode: string
  name: string
  used: boolean
  createdAt: string
  modifiedId: number
  modifiedAt: string
}

interface Data {
  list: Item[]
  count: number
}

interface ResponseData extends ReturnType {
  data: Data | undefined
}

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function GeneralList() {
  const {
    page,
    setPage,
    pageSize,
    setPageSize,
    data,
    isLoading,
    isRefetching,
  }: ResponseData = useGetList({
    url: '/config/common/code',
    key: 'getGeneralList',
  })
  return (
    <div className="box mt-6">
      <div className="border-slate-200/6 space-between flex border-b p-3">
        <h2 className="mr-auto text-lg font-bold">전체</h2>
        <div className="ml-auto flex gap-2">
          <button className="btn btn-sm btn-primary w-20">다운로드</button>
          <select
            className="form-select-sm form-select w-24"
            aria-label="Default select example"
          >
            <option>100개</option>
            <option>option1</option>
            <option>option2</option>
          </select>
        </div>
      </div>
      <div className="flex flex-row border-b border-slate-200/60 p-3">
        <div className="w-full overflow-x-auto">
          <table className="table-bordered table">
            <tr className="bg-slate-100 text-center">
              <td>브랜드</td>
              <td>지역구분</td>
              <td>실적</td>
              <td colSpan={2}>(기간 1) 2021-01-01~2021-01-30</td>
              <td colSpan={2}>(기간 2) 2022-01-01~2022-01-30</td>
              <td colSpan={2}>(기간 3) 2022-01-01~2022-01-30</td>
              <td>성장률1 [기간 1 / 기간 3]</td>
              <td>성장률 2 [기간 2 / 기간 3 ]</td>
            </tr>
            <tr className="text-right">
              <td rowSpan={14} className="text-center">
                전체
              </td>
              <td rowSpan={3} className="text-center">
                하와이
              </td>
              <td className="text-center">건수</td>
              <td>32</td>
              <td>13%</td>
              <td>32</td>
              <td>13%</td>
              <td>32</td>
              <td>13%</td>
              <td className="text-center">10%</td>
              <td className="text-center">10%</td>
            </tr>
            <tr className="text-right">
              <td className="text-center">대여일수</td>
              <td>32</td>
              <td>13%</td>
              <td>32</td>
              <td>13%</td>
              <td>32</td>
              <td>13%</td>
              <td className="text-center">10%</td>
              <td className="text-center">10%</td>
            </tr>
            <tr className="text-right">
              <td className="text-center">판매가(USD)</td>
              <td>32</td>
              <td>13%</td>
              <td>32</td>
              <td>13%</td>
              <td>32</td>
              <td>13%</td>
              <td className="text-center">10%</td>
              <td className="text-center">10%</td>
            </tr>
            <tr className="text-right">
              <td rowSpan={3} className="text-center">
                하와이
              </td>
              <td className="text-center">건수</td>
              <td>32</td>
              <td>13%</td>
              <td>32</td>
              <td>13%</td>
              <td>32</td>
              <td>13%</td>
              <td className="text-center">10%</td>
              <td className="text-center">10%</td>
            </tr>
            <tr className="text-right">
              <td className="text-center">대여일수</td>
              <td>32</td>
              <td>13%</td>
              <td>32</td>
              <td>13%</td>
              <td>32</td>
              <td>13%</td>
              <td className="text-center">10%</td>
              <td className="text-center">10%</td>
            </tr>
            <tr className="text-right">
              <td className="text-center">판매가(USD)</td>
              <td>32</td>
              <td>13%</td>
              <td>32</td>
              <td>13%</td>
              <td>32</td>
              <td>13%</td>
              <td className="text-center">10%</td>
              <td className="text-center">10%</td>
            </tr>
            <tr className="bg-slate-300 text-right font-bold">
              <td rowSpan={4} className="text-center">
                TOTAL
              </td>
              <td className="text-center">건수</td>
              <td>32</td>
              <td>13%</td>
              <td>32</td>
              <td>13%</td>
              <td>32</td>
              <td>13%</td>
              <td className="text-center">10%</td>
              <td className="text-center">10%</td>
            </tr>
            <tr className="bg-slate-300 text-right font-bold">
              <td className="text-center">건수</td>
              <td>32</td>
              <td>13%</td>
              <td>32</td>
              <td>13%</td>
              <td>32</td>
              <td>13%</td>
              <td className="text-center">10%</td>
              <td className="text-center">10%</td>
            </tr>
            <tr className="bg-slate-300 text-right font-bold">
              <td className="text-center">건수</td>
              <td>32</td>
              <td>13%</td>
              <td>32</td>
              <td>13%</td>
              <td>32</td>
              <td>13%</td>
              <td className="text-center">10%</td>
              <td className="text-center">10%</td>
            </tr>
            <tr className="bg-slate-300 text-right font-bold">
              <td className="text-center">건수</td>
              <td>32</td>
              <td>13%</td>
              <td>32</td>
              <td>13%</td>
              <td>32</td>
              <td>13%</td>
              <td className="text-center">10%</td>
              <td className="text-center">10%</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}
