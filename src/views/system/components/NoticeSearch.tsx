import { memo } from 'react'
import { SubmitHandler, UseFormReturn } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'

import Litepicker from '@/base-components/Litepicker'
import Lucide from '@/base-components/Lucide'

import CheckboxUse from '@/components/common/CheckboxUse'

import { SearchForm } from '../notice'

function NoticeSearch({
  watch,
  setValue,
  register,
  handleSubmit,
}: UseFormReturn<SearchForm>) {
  const [searchParams, setSearchParams] = useSearchParams()
  const onSubmit: SubmitHandler<SearchForm> = (data) => {
    setSearchParams({
      ...data,
    })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="intro-y box mt-3 p-3">
        <table className="table-bordered table">
          <tbody>
            <tr className="text-center">
              <td className="w-40 bg-slate-100">등록일자</td>
              <td>
                <div className="relative w-72">
                  <div className="absolute flex h-full w-10 items-center justify-center rounded-l border bg-slate-100 text-slate-500 dark:border-darkmode-800 dark:bg-darkmode-700 dark:text-slate-400">
                    <Lucide icon="Calendar" className="h-4 w-4" />
                  </div>
                  <Litepicker
                    value={watch('date')}
                    onChange={(value) => setValue('date', value)}
                    options={{
                      format: 'YYYY-MM-DD',
                      autoApply: false,
                      singleMode: false,
                      numberOfColumns: 2,
                      numberOfMonths: 2,
                      showWeekNumbers: true,
                      dropdowns: {
                        minYear: 1990,
                        maxYear: null,
                        months: true,
                        years: true,
                      },
                    }}
                    className="form-control pl-16"
                  />
                </div>
              </td>
              <td className="w-40 bg-slate-100">브랜드</td>
              <td colSpan={3} className="text-left">
                <select className="form-select w-56">
                  <option value="">전체</option>
                  <option value="">옵션1</option>
                  <option value="">옵션2</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="w-40 bg-slate-100">제목/내용</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  {...register('title')}
                />
              </td>
              <td className="w-40 bg-slate-100">노출여부</td>
              <td>
                <div className="flex flex-col sm:flex-row sm:gap-3">
                  <CheckboxUse id="isShowY" label="Y" register={register} />
                  <CheckboxUse id="isShowN" label="N" register={register} />
                </div>
              </td>
              <td className="w-40 bg-slate-100">고정여부</td>
              <td>
                <div className="flex flex-col sm:flex-row sm:gap-3">
                  <CheckboxUse id="isFixedY" label="Y" register={register} />
                  <CheckboxUse id="isFixedN" label="N" register={register} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-3 text-center">
        <button className="btn mr-2 mb-2 inline-block w-24 bg-white">
          초기화
        </button>
        <button className="btn btn-primary mb-2 w-24">조회</button>
      </div>
    </form>
  )
}

export default memo(NoticeSearch)
