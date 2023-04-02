import { useState } from 'react'
import { Link } from 'react-router-dom'

import useGetList, { ReturnType } from '@/hooks/useGetList'

import Button from '@/base-components/Button'
import { Dialog } from '@/base-components/Headless'
import Lucide from '@/base-components/Lucide'

interface Item {}

interface Data {
  list: Item[]
  count: number
}

interface ResponseData extends ReturnType {
  data: Data | undefined
}

export default function CouponList() {
  const {
    page,
    setPage,
    pageSize,
    setPageSize,
    data,
    isLoading,
    isRefetching,
  }: ResponseData = useGetList({
    url: '/coupons',
    key: 'getCouponsList',
  })
  // 체크
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

  function handleCheckboxClick(): void {
    const checkboxes = document.querySelectorAll<HTMLInputElement>(
      '.check_table tbody input[type="checkbox"]',
    )
    let count = 0
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        count++
      }
    })
    setCheckedCount(count)
  }

  const [checkedCount, setCheckedCount] = useState<number>(0) // 체크박스 카운트
  // 체크 관련 코드 끝

  const [IsStop, setIsStop] = useState(false)
  const [IsStop2, setIsStop2] = useState(false)
  const [IsStop3, setIsStop3] = useState(false)
  const [IsCopy, setIsCopy] = useState(false)
  const [IsCopy2, setIsCopy2] = useState(false)
  const [IsCopy3, setIsCopy3] = useState(false)

  return (
    <div className="intro-y box mt-6">
      <div className="space-between border-slate-200/6 mb-5 flex border-b p-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="btn btn-sm btn-outline-dark"
            onClick={() => setIsStop2(true)}
          >
            발급중지 (미선택 시)
          </button>
          <button
            type="button"
            className="btn btn-sm btn-outline-dark"
            onClick={() => setIsStop(true)}
          >
            발급중지 (정상)
          </button>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            onClick={() => {
              setIsCopy3(true)
              handleCheckboxClick()
            }}
          >
            쿠폰복사(미선택 시)
          </button>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            onClick={() => {
              setIsCopy(true)
              handleCheckboxClick()
            }}
          >
            쿠폰복사(정상)
          </button>
          <Link to="/marketing/coupon_regist">
            <button className="btn btn-sm btn-outline-primary w-20">
              쿠폰등록
            </button>
          </Link>
        </div>
        <div className="flex gap-2">
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
      <div className="border-b border-slate-200/60 p-3">
        <div className="overflow-x-auto">
          <table className="check_table table whitespace-nowrap">
            <thead className="table-dark text-center">
              <tr>
                <th>
                  <input
                    id="checkbox-only-switch-all"
                    className="form-check-input check_all"
                    type="checkbox"
                    onChange={handleCheckAll}
                    onClick={handleCheckboxClick}
                  />
                </th>
                <th>번호</th>
                <th>브랜드</th>
                <th>쿠폰상태</th>
                <th>쿠폰명</th>
                <th>발급조건</th>
                <th>발급대상</th>
                <th>국가</th>
                <th>주</th>
                <th>차량대여일수</th>
                <th>중복발행여부</th>
                <th>예약가능기간</th>
                <th>픽업가능기간</th>
                <th>쿠폰적용</th>
                <th>쿠폰사용</th>
                <th>최종수정자</th>
                <th>최종수정일시</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td>
                  <input
                    id="checkbox-switch-1"
                    className="form-check-input"
                    type="checkbox"
                    onChange={handleCheck}
                    onClick={handleCheckboxClick}
                  />
                </td>
                <td>99</td>
                <td>알라모</td>
                <td>사용</td>
                <td className="link text-primary underline">
                  <Link to="/marketing/coupon_detail">쿠폰11</Link>
                </td>
                <td>신규회원</td>
                <td>회원(100)</td>
                <td>3</td>
                <td>30</td>
                <td>3</td>
                <td>1</td>
                <td>2023-01-17 ~ 2023-01-18</td>
                <td>2023-01-17 ~ 2023-01-18</td>
                <td className="link text-primary underline">
                  <Link to="/marketing/coupon/status">443</Link>
                </td>
                <td className="link text-primary underline">
                  <Link to="/marketing/coupon/status">0</Link>
                </td>
                <td>홍길동</td>
                <td>2023-01-16 11:11:11</td>
              </tr>
              <tr>
                <td>
                  <input
                    id="checkbox-switch-1"
                    className="form-check-input"
                    type="checkbox"
                    onChange={handleCheck}
                    onClick={handleCheckboxClick}
                  />
                </td>
                <td>99</td>
                <td>알라모</td>
                <td>사용</td>
                <td className="link text-primary underline">
                  <Link to="/marketing/coupon_detail">쿠폰11</Link>
                </td>
                <td>신규회원</td>
                <td>회원(100)</td>
                <td>3</td>
                <td>30</td>
                <td>3</td>
                <td>1</td>
                <td>2023-01-17 ~ 2023-01-18</td>
                <td>2023-01-17 ~ 2023-01-18</td>
                <td className="link text-primary underline">
                  <Link to="/marketing/coupon/status">443</Link>
                </td>
                <td className="link text-primary underline">
                  <Link to="/marketing/coupon/status">0</Link>
                </td>
                <td>홍길동</td>
                <td>2023-01-16 11:11:11</td>
              </tr>
              <tr>
                <td>
                  <input
                    id="checkbox-switch-1"
                    className="form-check-input"
                    type="checkbox"
                    onChange={handleCheck}
                    onClick={handleCheckboxClick}
                  />
                </td>
                <td>99</td>
                <td>알라모</td>
                <td>사용</td>
                <td className="link text-primary underline">
                  <Link to="/marketing/coupon_detail">쿠폰11</Link>
                </td>
                <td>신규회원</td>
                <td>회원(100)</td>
                <td>3</td>
                <td>30</td>
                <td>3</td>
                <td>1</td>
                <td>2023-01-17 ~ 2023-01-18</td>
                <td>2023-01-17 ~ 2023-01-18</td>
                <td className="link text-primary underline">
                  <Link to="/marketing/coupon/status">443</Link>
                </td>
                <td className="link text-primary underline">
                  <Link to="/marketing/coupon/status">0</Link>
                </td>
                <td>홍길동</td>
                <td>2023-01-16 11:11:11</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="space-between flex items-center p-5">
        <span className="btn btn-sm btn-secondary-soft w-24">총 30,000건</span>
        <div className="intro-y col-span-12 flex flex-wrap items-center sm:flex-row sm:flex-nowrap">
          <nav className="w-full sm:mr-auto sm:w-auto">
            <ul className="pagination">
              <li className="page-item">
                <Link className="page-link" to="">
                  <Lucide icon="ChevronsLeft" className="h-4 w-4" />
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="">
                  <Lucide icon="ChevronLeft" className="h-4 w-4" />
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="">
                  ...
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="">
                  1
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="">
                  ...
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="">
                  <Lucide icon="ChevronRight" className="h-4 w-4" />
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="">
                  <Lucide icon="ChevronsRight" className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex-end flex items-center">
          <input
            id="regular-form-1"
            type="text"
            className="form-control form-control-sm mr-1 w-12 text-center"
            defaultValue={1}
          />
          / 200
        </div>
      </div>
      {/* 발급중지 */}
      <Dialog
        open={IsStop}
        onClose={() => {
          setIsStop(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">발급중지</h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setIsStop(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="text-center text-lg font-bold">
              쿠폰을 미사용 처리하시겠습니까?
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Button
              type="button"
              className="mr-2 w-24"
              onClick={() => {
                setIsStop(false)
              }}
            >
              취소
            </Button>
            <Button
              type="button"
              variant="primary"
              className="w-24"
              onClick={() => {
                setIsStop(false)
                setIsStop3(true)
              }}
            >
              확인
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      <Dialog
        open={IsStop3}
        onClose={() => {
          setIsStop3(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setIsStop(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="text-center text-lg font-bold">
              정상적으로 미사용처리되었습니다
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Button
              type="button"
              variant="primary"
              className="w-24"
              onClick={() => {
                setIsStop3(false)
              }}
            >
              확인
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>
      {/* 발급중지  */}
      <Dialog
        open={IsStop2}
        onClose={() => {
          setIsStop2(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">발급중지</h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setIsStop2(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="text-center text-lg font-bold">
              중지할 쿠폰을 선택해주세요
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Button
              type="button"
              className="mr-2 w-24"
              onClick={() => {
                setIsStop2(false)
              }}
            >
              취소
            </Button>
            <Button
              type="button"
              variant="primary"
              className="w-24"
              onClick={() => {
                setIsStop2(false)
              }}
            >
              확인
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      <Dialog
        open={IsCopy}
        onClose={() => {
          setIsCopy(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">쿠폰복사</h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setIsCopy(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="text-center text-lg font-bold">
              쿠폰을 복사하시겠습니까?
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Button
              type="button"
              className="ml-3 mr-2 w-24"
              onClick={() => {
                setIsCopy(false)
              }}
            >
              취소
            </Button>
            <Button
              type="button"
              className="btn btn-primary w-24"
              onClick={() => {
                setIsCopy(false)
                setIsCopy2(true)
              }}
            >
              확인
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>
      <Dialog
        open={IsCopy2}
        onClose={() => {
          setIsCopy2(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">쿠폰복사</h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setIsCopy2(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="text-center text-lg font-bold">
              총 <span className="text-primary">{checkedCount}개</span>가 &#91;
              쿠폰복사 &#93; 처리되었습니다.
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Button
              type="button"
              variant="primary"
              className="ml-3 w-24"
              onClick={() => {
                setIsCopy2(false)
              }}
            >
              확인
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      <Dialog
        open={IsCopy3}
        onClose={() => {
          setIsCopy3(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">쿠폰복사</h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setIsCopy3(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="text-center text-lg font-bold">
              복사할 쿠폰을 선택해주세요.
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Button
              type="button"
              variant="primary"
              className="ml-3 w-24"
              onClick={() => {
                setIsCopy3(false)
              }}
            >
              확인
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>
    </div>
  )
}
