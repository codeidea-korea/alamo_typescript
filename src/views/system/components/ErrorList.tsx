import { useState } from 'react'

import useGetList from '@/hooks/useGetList'

import LoadingBox from '@/components/LoadingBox'
import PageCount from '@/components/common/PageCount'
import PageSize from '@/components/common/PageSize'

export default function ErrorList() {
  const {
    page,
    setPage,
    pageSize,
    setPageSize,
    data,
    isLoading,
    isRefetching,
  } = useGetList({
    url: '/history/errors',
    key: 'getNotice',
  })
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false)
  const handleCheckAll = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const checkboxes = document.querySelectorAll<HTMLInputElement>(
      '.check_table input[type="checkbox"]',
    )
    checkboxes.forEach((checkbox) => {
      checkbox.checked = event.target.checked
    })
    setIsAllChecked(event.target.checked)
  }

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const checkboxes = document.querySelectorAll<HTMLInputElement>(
      '.check_table input[type="checkbox"]',
    )
    let allChecked = true
    checkboxes.forEach((checkbox) => {
      if (checkbox !== event.target) {
        checkbox.checked = checkbox.checked || false
      }
      allChecked = allChecked && checkbox.checked
    })
    setIsAllChecked(allChecked)
  }

  return (
    <LoadingBox
      className="intro-y box mt-6 p-3"
      loading={isLoading || isRefetching}
    >
      <div className="flex gap-3">
        <button className="btn btn-sm btn-outline-primary w-20">확인</button>
        <div className="ml-auto flex gap-2">
          <button className="btn btn-sm btn-primary w-20">다운로드</button>
          <PageSize pageSize={pageSize} setPageSize={setPageSize} />
        </div>
      </div>

      <table className=" table-hover check_table mt-3 table">
        <thead className='table-dark'>
          <tr className="text-center">
            <th className="w-10">
              <input
                id="checkbox-only-switch-all"
                className="form-check-input"
                type="checkbox"
                checked={isAllChecked}
                onChange={handleCheckAll}
              />
            </th>
            <th>번호</th>
            <th>브랜드</th>
            <th>대분류</th>
            <th>중분류</th>
            <th>소분류</th>
            <th>발생일시</th>
            <th>발생내용</th>
            <th>확인여부</th>
            <th>검수자</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>
              <input
                id="checkbox-only-switch-1"
                className="form-check-input"
                type="checkbox"
                onChange={handleCheck}
              />
            </td>
            <td>99</td>
            <td>알라모</td>
            <td className="text-slate-400">서비스 컨테이너</td>
            <td className="text-slate-400">서비스내 모듈</td>
            <td className="text-slate-400">오류코드</td>
            <td>2022-11-11 11:11:11</td>
            <td>블라블라 발생 내용</td>
            <td>Y</td>
            <td>홍길동</td>
          </tr>
          <tr className="text-center">
            <td>
              <input
                id="checkbox-only-switch-1"
                className="form-check-input"
                type="checkbox"
                onChange={handleCheck}
              />
            </td>
            <td>99</td>
            <td>알라모</td>
            <td className="text-slate-400">서비스 컨테이너</td>
            <td className="text-slate-400">서비스내 모듈</td>
            <td className="text-slate-400">오류코드</td>
            <td>2022-11-11 11:11:11</td>
            <td>블라블라 발생 내용</td>
            <td>Y</td>
            <td>홍길동</td>
          </tr>
          <tr className="text-center">
            <td>
              <input
                id="checkbox-only-switch-1"
                className="form-check-input"
                type="checkbox"
                onChange={handleCheck}
              />
            </td>
            <td>99</td>
            <td>알라모</td>
            <td className="text-slate-400">서비스 컨테이너</td>
            <td className="text-slate-400">서비스내 모듈</td>
            <td className="text-slate-400">오류코드</td>
            <td>2022-11-11 11:11:11</td>
            <td>블라블라 발생 내용</td>
            <td>Y</td>
            <td>홍길동</td>
          </tr>
        </tbody>
      </table>
      <div className="on none_box">
        <div className="mt-3 rounded-sm border border-slate-100 bg-slate-50 p-5">
          메시지 여기 뿌려주세요!! /// 메시지 길어질 경우 별도 페이지 개발팀에서
          의사결정 후 사용하기로 함 //
        </div>
      </div>
      <PageCount
        data={data}
        page={page}
        setPage={setPage}
        pageSize={pageSize}
      />
    </LoadingBox>
  )
}
