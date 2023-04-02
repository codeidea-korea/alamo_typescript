import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '@/base-components/Button'
import { Dialog } from '@/base-components/Headless'
import Lucide from '@/base-components/Lucide'

export default function BranchList() {
  const [isOpen, setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu((isOpen) => !isOpen)
    setMenu2((isOpen2) => !isOpen)
    setMenu3((isOpen3) => !isOpen)
    setMenu4((isOpen4) => !isOpen)
    setMenu5((isOpen5) => !isOpen)
  }

  const [isOpen2, setMenu2] = useState(false)
  const [isOpen2Detail, setMenu2Detail] = useState(false)
  const toggleMenu2 = () => {
    setMenu2((isOpen2) => !isOpen2)
  }
  const toggleDetail2 = () => {
    setMenu2Detail((prev) => !prev)
  }

  const [isOpen3, setMenu3] = useState(false)
  const [isOpen3Detail, setMenu3Detail] = useState(false)
  const toggleMenu3 = () => {
    setMenu3((isOpen3) => !isOpen3)
  }
  const toggleDetail3 = () => {
    setMenu3Detail((prev) => !prev)
  }

  const [isOpen4, setMenu4] = useState(false)
  const [isOpen4Detail, setMenu4Detail] = useState(false)
  const toggleMenu4 = () => {
    setMenu4((isOpen4) => !isOpen4)
  }
  const toggleDetail4 = () => {
    setMenu4Detail((prev) => !prev)
  }

  const [isOpen5, setMenu5] = useState(false)
  const [isOpen5Detail, setMenu5Detail] = useState(false)
  const toggleMenu5 = () => {
    setMenu5((isOpen5) => !isOpen5)
  }
  const toggleDetail5 = () => {
    setMenu5Detail((prev) => !prev)
  }

  const [isClose, setClose] = useState(false)
  const [isClose2, setClose2] = useState(false)
  const [isClose3, setClose3] = useState(false)
  const [isClose4, setClose4] = useState(false)
  const [isClose5, setClose5] = useState(false)
  const [isClose6, setClose6] = useState(false)
  const [isClose7, setClose7] = useState(false)
  const checkHandle = (e: any) => {
    e.target.checked ? setClose(true) : setClose(false)
  }
  const checkHandle2 = (e: any) => {
    e.target.checked ? setClose2(true) : setClose2(false)
  }
  const checkHandle3 = (e: any) => {
    e.target.checked ? setClose3(true) : setClose3(false)
  }
  const checkHandle4 = (e: any) => {
    e.target.checked ? setClose4(true) : setClose4(false)
  }
  const checkHandle5 = (e: any) => {
    e.target.checked ? setClose5(true) : setClose5(false)
  }
  const checkHandle6 = (e: any) => {
    e.target.checked ? setClose6(true) : setClose6(false)
  }
  const checkHandle7 = (e: any) => {
    e.target.checked ? setClose7(true) : setClose7(false)
  }
  const [confirmModal, setConfirmModal] = useState(false)
  const [uploadModal, setUploadModal] = useState(false)
  const [confirmModal2, setConfirmModal2] = useState(false)
  const [RegistBtn, setRegistBtn] = useState(false)

  return (
    <>
      <button
        className="btn btn-warning btn-sm mr-8 w-20"
        onClick={() => toggleMenu()}
      >
        전체
        <Lucide
          icon="ChevronDown"
          className={isOpen ? 'ml-2 h-4 w-4 rotate-180' : 'ml-2 h-4 w-4'}
        />
      </button>
      {/* 지점 시작 */}
      <div className="box">
        <div className="border-slate-200/6 space-between flex border-b p-3">
          <div className="flex items-center gap-2">
            <button
              className="btn btn-warning btn-sm mr-8 w-20"
              onClick={() => toggleMenu2()}
            >
              지점
              <Lucide
                icon="ChevronDown"
                className={isOpen2 ? 'ml-2 h-4 w-4 rotate-180' : 'ml-2 h-4 w-4'}
              />
            </button>
            <button className="btn btn-outline-dark btn-sm">
              Feed 수동 업데이트
            </button>
            <button
              className="btn btn-outline-dark btn-sm "
              onClick={() => setConfirmModal2(true)}
            >
              저장(필수 입력값 미입력 시)
            </button>
            <button
              className="btn btn-outline-dark btn-sm "
              onClick={() => setConfirmModal(true)}
            >
              저장 (정상 저장 시)
            </button>
            <Link
              to=""
              className="btn btn-outline-primary btn-sm "
              onClick={() => setUploadModal(true)}
            >
              일괄 업로드
            </Link>
          </div>

          <div className="flex gap-3">
            <button className="btn btn-primary btn-sm">다운로드</button>
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
        <div className={isOpen2 ? 'on' : 'none_box'}>
          <div className="flex flex-row border-b border-slate-200/60 p-5">
            <div className="w-full overflow-x-auto">
              <table className="table">
                <thead className="table-dark text-center">
                  <tr>
                    <th className="w-20">번호</th>
                    <th>브랜드</th>
                    <th>지점 코드</th>
                    <th>지점 국문명</th>
                    <th>지점 영문명</th>
                    <th>도시 코드</th>
                    <th>도시 국문명</th>
                    <th>도시 영문명</th>
                    <th>주 코드</th>
                    <th>국가 코드</th>
                    <th>픽업안내</th>
                    <th>노출여부</th>
                    <th>최신 업데이트</th>
                    <th>최종수정자</th>
                    <th>최종수정일시</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td>99</td>
                    <td>내셔널</td>
                    <td>STLTO1</td>
                    <td>세인트국제공항</td>
                    <td>ST1 LOUIS1</td>
                    <td onClick={toggleDetail2}>
                      <p className="cursor-pointer underline">STL</p>
                    </td>
                    <td>세인트</td>
                    <td>ST LOUIS</td>
                    <td onClick={toggleDetail2}>
                      <p className="cursor-pointer underline">AE</p>
                    </td>
                    <td onClick={toggleDetail2}>
                      <p className="cursor-pointer underline">US</p>
                    </td>
                    <td>국문정보 수정</td>
                    <td>Y</td>
                    <td>2022-11-11 11:11:11</td>
                    <td>홍길동</td>
                    <td>2022-11-11 11:11:11</td>
                  </tr>
                  <tr className={isOpen2Detail ? '' : 'none_box'}>
                    <td colSpan={15}>
                      <div className="w-full overflow-x-auto">
                        <table className="table-bordered table">
                          <tr>
                            <td className="bg-slate-100 ">주소</td>
                            <td>
                              <input type="text" className="form-control" />
                            </td>
                            <td className="bg-slate-100 ">상세주소</td>
                            <td>
                              <input type="text" className="form-control" />
                            </td>
                            <td className="bg-slate-100 ">우편번호1</td>
                            <td>
                              <input type="number" className="form-control" />
                            </td>
                            <td className="bg-slate-100 ">위도</td>
                            <td>
                              <input type="number" className="form-control" />
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-slate-100 ">전화번호</td>
                            <td>
                              <input type="number" className="form-control" />
                            </td>
                            <td className="bg-slate-100 ">팩스</td>
                            <td>
                              <input type="number" className="form-control" />
                            </td>
                            <td className="bg-slate-100 ">우편번호2</td>
                            <td>
                              <input type="number" className="form-control" />
                            </td>
                            <td className="bg-slate-100 ">경도</td>
                            <td>
                              <input type="number" className="form-control" />
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-slate-100 ">픽업국문정보</td>
                            <td>
                              <input type="text" className="form-control" />
                            </td>
                            <td className="bg-slate-100 ">픽업영문정보</td>
                            <td>
                              <input type="text" className="form-control" />
                            </td>
                            <td className="bg-slate-100 ">렌터사</td>
                            <td colSpan={4}>알라모</td>
                          </tr>
                        </table>
                      </div>
                    </td>
                  </tr>
                  <tr className={isOpen2Detail ? '' : 'none_box'}>
                    <td colSpan={15}>
                      <div className="w-full overflow-x-auto">
                        <table className="table-bordered table">
                          <tr>
                            <td className="bg-slate-100" rowSpan={3}>
                              영업시간
                            </td>
                            <td className="bg-slate-100">요일</td>
                            <td className="bg-slate-100">
                              <div className="flex items-center justify-center gap-1">
                                <span>월</span>
                                (
                                <input
                                  id="checkbox-switch-100"
                                  className="form-check-input"
                                  type="checkbox"
                                  onChange={checkHandle}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkbox-switch-100"
                                >
                                  영업안함
                                </label>
                                )
                              </div>
                            </td>
                            <td className="bg-slate-100">
                              <div className="flex items-center justify-center gap-1">
                                <span>화</span>
                                (
                                <input
                                  id="checkbox-switch-2"
                                  className="form-check-input"
                                  type="checkbox"
                                  onChange={checkHandle2}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkbox-switch-2"
                                >
                                  영업안함
                                </label>
                                )
                              </div>
                            </td>
                            <td className="bg-slate-100">
                              <div className="flex items-center justify-center gap-1">
                                <span>수</span>
                                (
                                <input
                                  id="checkbox-switch-3"
                                  className="form-check-input"
                                  type="checkbox"
                                  onChange={checkHandle3}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkbox-switch-3"
                                >
                                  영업안함
                                </label>
                                )
                              </div>
                            </td>
                            <td className="bg-slate-100">
                              <div className="flex items-center justify-center gap-1">
                                <span>목</span>
                                (
                                <input
                                  id="checkbox-switch-101"
                                  className="form-check-input"
                                  type="checkbox"
                                  onChange={checkHandle4}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkbox-switch-101"
                                >
                                  영업안함
                                </label>
                                )
                              </div>
                            </td>
                            <td className="bg-slate-100">
                              <div className="flex items-center justify-center gap-1">
                                <span>금</span>
                                (
                                <input
                                  id="checkbox-switch-102"
                                  className="form-check-input"
                                  type="checkbox"
                                  onChange={checkHandle5}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkbox-switch-102"
                                >
                                  영업안함
                                </label>
                                )
                              </div>
                            </td>
                            <td className="bg-slate-100">
                              <div className="flex items-center justify-center gap-1">
                                <span>토</span>
                                (
                                <input
                                  id="checkbox-switch-103"
                                  className="form-check-input"
                                  type="checkbox"
                                  onChange={checkHandle6}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkbox-switch-103"
                                >
                                  영업안함
                                </label>
                                )
                              </div>
                            </td>
                            <td className="bg-slate-100">
                              <div className="flex items-center justify-center gap-1">
                                <span>일</span>
                                (
                                <input
                                  id="checkbox-switch-7"
                                  className="form-check-input"
                                  type="checkbox"
                                  onChange={checkHandle7}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkbox-switch-7"
                                >
                                  영업안함
                                </label>
                                )
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-slate-100 ">OPEN</td>
                            <td>
                              {isClose ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose2 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose3 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose4 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose5 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose6 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose7 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-slate-100 ">CLOSE</td>
                            <td>
                              {isClose ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose2 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose3 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose4 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose5 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose6 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose7 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                          </tr>
                        </table>
                      </div>
                    </td>
                  </tr>
                  <tr className={isOpen2Detail ? '' : 'none_box'}>
                    <td colSpan={15}>
                      <div className="flex justify-center gap-2 ">
                        <button
                          className="btn btn-outline-danger w-24"
                          onClick={toggleDetail2}
                        >
                          취소
                        </button>
                        <button
                          className="btn btn-primary w-24"
                          onClick={() => {
                            setConfirmModal(true)
                            toggleDetail2()
                          }}
                        >
                          수정
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="space-between flex items-center p-5">
            <span className="btn btn-sm btn-secondary-soft w-24">
              총 30,000건
            </span>
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
        </div>
      </div>

      {/* 국가 시작 */}
      <div className="box mt-6">
        <div className="border-slate-200/6 space-between flex border-b p-3">
          <div className="flex items-center gap-2">
            <button
              className="btn btn-warning btn-sm mr-8 w-20"
              onClick={() => toggleMenu3()}
            >
              국가
              <Lucide
                icon="ChevronDown"
                className={isOpen3 ? 'ml-2 h-4 w-4 rotate-180' : 'ml-2 h-4 w-4'}
              />
            </button>
            {/* <button className="btn btn-outline-dark btn-sm">
              Feed 수동 업데이트
            </button> */}
            <button
              className="btn btn-outline-dark btn-sm w-20"
              onClick={() => setConfirmModal(true)}
            >
              저장
            </button>
            <Link
              to=""
              className="btn btn-outline-primary btn-sm "
              onClick={() => setUploadModal(true)}
            >
              일괄 업로드
            </Link>
          </div>

          <div className="flex gap-3">
            <button className="btn btn-primary btn-sm">다운로드</button>
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
        <div className={isOpen3 ? 'on' : 'none_box'}>
          <div className="flex flex-row border-b border-slate-200/60 p-3">
            <div className="w-full overflow-x-auto">
              <table className="table">
                <thead className="table-dark text-center">
                  <tr>
                    <th className="w-20">번호</th>
                    <th>브랜드</th>
                    <th>국가 코드</th>
                    <th className="w-36">국가 국문명</th>
                    <th>국가 영문명</th>
                    <th>주</th>
                    <th>도시</th>
                    <th>지점</th>
                    <th>노출여부</th>
                    <th>최종수정자</th>
                    <th>최종수정일시</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td>99</td>
                    <td>내셔널</td>
                    <td onClick={toggleDetail3}>
                      <p className="cursor-pointer underline">US</p>
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <p>United Arab Emirates</p>
                    </td>
                    <td onClick={toggleDetail3}>
                      <p className="cursor-pointer underline">13</p>
                    </td>
                    <td onClick={toggleDetail3}>
                      <p className="cursor-pointer underline">321</p>
                    </td>
                    <td onClick={toggleDetail3}>
                      <p className="cursor-pointer underline">2,234</p>
                    </td>
                    <td>
                      <select className="form-select w-16">
                        <option value="">N</option>
                        <option value="">Y</option>
                        <option value="">P</option>
                        <option value="">D</option>
                      </select>
                    </td>
                    <td>연동데이터</td>
                    <td>2022-11-11 11:11:11</td>
                  </tr>
                  {/* <tr className={isOpen3Detail ? '' : 'none_box'}>
                    <td colSpan={15}>
                      <div className="w-full overflow-x-auto">
                        <table className="table-bordered table">
                          <tr>
                            <td className="bg-slate-100 ">주소</td>
                            <td>
                              <input type="text" className="form-control" />
                            </td>
                            <td className="bg-slate-100 ">상세주소</td>
                            <td>
                              <input type="text" className="form-control" />
                            </td>
                            <td className="bg-slate-100 ">우편번호1</td>
                            <td>
                              <input type="number" className="form-control" />
                            </td>
                            <td className="bg-slate-100 ">위도</td>
                            <td>
                              <input type="number" className="form-control" />
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-slate-100 ">전화번호</td>
                            <td>
                              <input type="number" className="form-control" />
                            </td>
                            <td className="bg-slate-100 ">팩스</td>
                            <td>
                              <input type="number" className="form-control" />
                            </td>
                            <td className="bg-slate-100 ">우편번호2</td>
                            <td>
                              <input type="number" className="form-control" />
                            </td>
                            <td className="bg-slate-100 ">경도</td>
                            <td>
                              <input type="number" className="form-control" />
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-slate-100 ">픽업국문정보</td>
                            <td>
                              <input type="text" className="form-control" />
                            </td>
                            <td className="bg-slate-100 ">픽업영문정보</td>
                            <td>
                              <input type="text" className="form-control" />
                            </td>
                            <td className="bg-slate-100 ">렌터사</td>
                            <td colSpan={4}>알라모</td>
                          </tr>
                        </table>
                      </div>
                    </td>
                  </tr>
                  <tr className={isOpen3Detail ? '' : 'none_box'}>
                    <td colSpan={15}>
                      <div className="w-full overflow-x-auto">
                        <table className="table-bordered table">
                          <tr>
                            <td className="bg-slate-100" rowSpan={3}>
                              영업시간
                            </td>
                            <td className="bg-slate-100">요일</td>
                            <td className="bg-slate-100">
                              <div className="flex items-center justify-center gap-1">
                                <span>월</span>
                                (
                                <input
                                  id="checkbox-switch-99"
                                  className="form-check-input"
                                  type="checkbox"
                                  onChange={checkHandle}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkbox-switch-99"
                                >
                                  영업안함
                                </label>
                                )
                              </div>
                            </td>
                            <td className="bg-slate-100">
                              <div className="flex items-center justify-center gap-1">
                                <span>화</span>
                                (
                                <input
                                  id="checkbox-switch-98"
                                  className="form-check-input"
                                  type="checkbox"
                                  onChange={checkHandle2}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkbox-switch-98"
                                >
                                  영업안함
                                </label>
                                )
                              </div>
                            </td>
                            <td className="bg-slate-100">
                              <div className="flex items-center justify-center gap-1">
                                <span>수</span>
                                (
                                <input
                                  id="checkbox-switch-97"
                                  className="form-check-input"
                                  type="checkbox"
                                  onChange={checkHandle3}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkbox-switch-97"
                                >
                                  영업안함
                                </label>
                                )
                              </div>
                            </td>
                            <td className="bg-slate-100">
                              <div className="flex items-center justify-center gap-1">
                                <span>목</span>
                                (
                                <input
                                  id="checkbox-switch-96"
                                  className="form-check-input"
                                  type="checkbox"
                                  onChange={checkHandle4}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkbox-switch-96"
                                >
                                  영업안함
                                </label>
                                )
                              </div>
                            </td>
                            <td className="bg-slate-100">
                              <div className="flex items-center justify-center gap-1">
                                <span>금</span>
                                (
                                <input
                                  id="checkbox-switch-95"
                                  className="form-check-input"
                                  type="checkbox"
                                  onChange={checkHandle5}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkbox-switch-95"
                                >
                                  영업안함
                                </label>
                                )
                              </div>
                            </td>
                            <td className="bg-slate-100">
                              <div className="flex items-center justify-center gap-1">
                                <span>토</span>
                                (
                                <input
                                  id="checkbox-switch-94"
                                  className="form-check-input"
                                  type="checkbox"
                                  onChange={checkHandle6}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkbox-switch-94"
                                >
                                  영업안함
                                </label>
                                )
                              </div>
                            </td>
                            <td className="bg-slate-100">
                              <div className="flex items-center justify-center gap-1">
                                <span>일</span>
                                (
                                <input
                                  id="checkbox-switch-93"
                                  className="form-check-input"
                                  type="checkbox"
                                  onChange={checkHandle7}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkbox-switch-93"
                                >
                                  영업안함
                                </label>
                                )
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-slate-100 ">OPEN</td>
                            <td>
                              {isClose ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose2 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose3 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose4 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose5 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose6 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose7 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-slate-100 ">CLOSE</td>
                            <td>
                              {isClose ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose2 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose3 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose4 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose5 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose6 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose7 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                          </tr>
                        </table>
                      </div>
                    </td>
                  </tr>
                  <tr className={isOpen3Detail ? '' : 'none_box'}>
                    <td colSpan={15}>
                      <div className="flex justify-center gap-2 ">
                        <button
                          className="btn btn-outline-danger w-24"
                          onClick={toggleDetail3}
                        >
                          취소
                        </button>
                        <button
                          className="btn btn-primary w-24"
                          onClick={() => {
                            setConfirmModal(true)
                            toggleDetail3()
                          }}
                        >
                          수정
                        </button>
                      </div>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
          <div className="space-between flex items-center p-5">
            <span className="btn btn-sm btn-secondary-soft w-24">
              총 30,000건
            </span>
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
        </div>
      </div>

      {/* 주 시작 */}
      <div className="box mt-6">
        <div className="border-slate-200/6 space-between flex border-b p-3">
          <div className="flex items-center gap-2">
            <button
              className="btn btn-warning btn-sm mr-8 w-20"
              onClick={() => toggleMenu4()}
            >
              주
              <Lucide
                icon="ChevronDown"
                className={isOpen4 ? 'ml-2 h-4 w-4 rotate-180' : 'ml-2 h-4 w-4'}
              />
            </button>
            {/* <button className="btn btn-outline-dark btn-sm">
              Feed 수동 업데이트
            </button> */}
            <button
              className="btn btn-outline-dark btn-sm w-20"
              onClick={() => setConfirmModal(true)}
            >
              저장
            </button>
            <Link
              to=""
              className="btn btn-outline-primary btn-sm "
              onClick={() => setUploadModal(true)}
            >
              일괄 업로드
            </Link>
          </div>

          <div className="flex gap-3">
            <button className="btn btn-primary btn-sm">다운로드</button>
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
        <div className={isOpen4 ? 'on' : 'none_box'}>
          <div className="flex flex-row border-b border-slate-200/60 p-3">
            <div className="w-full overflow-x-auto">
              <table className="table">
                <thead className="table-dark text-center">
                  <tr>
                    <th className="w-20">번호</th>
                    <th>브랜드</th>
                    <th>국가 코드</th>
                    <th>주 코드</th>
                    <th className="w-36">주 국문명</th>
                    <th>주 영문명</th>
                    <th>도시</th>
                    <th>지점</th>
                    <th>노출여부</th>
                    <th>최종수정자</th>
                    <th>최종수정일시</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td>99</td>
                    <td>내셔널</td>
                    <td onClick={toggleDetail4}>
                      <p className="cursor-pointer underline">US</p>
                    </td>
                    <td onClick={toggleDetail4}>
                      <p className="cursor-pointer underline">ES</p>
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>ALBERTA</td>
                    <td onClick={toggleDetail4}>
                      <p className="cursor-pointer underline">321</p>
                    </td>
                    <td onClick={toggleDetail4}>
                      <p className="cursor-pointer underline">2,234</p>
                    </td>
                    <td>
                      <select className="form-select w-16">
                        <option value="">N</option>
                        <option value="">Y</option>
                        <option value="">P</option>
                        <option value="">D</option>
                      </select>
                    </td>
                    <td>연동데이터</td>
                    <td>2022-11-11 11:11:11</td>
                  </tr>
                  {/* <tr className={isOpen4Detail ? '' : 'none_box'}>
                    <td colSpan={15}>
                      <div className="w-full overflow-x-auto">
                        <table className="table-bordered table">
                          <tr>
                            <td className="bg-slate-100 ">주소</td>
                            <td>
                              <input type="text" className="form-control" />
                            </td>
                            <td className="bg-slate-100 ">상세주소</td>
                            <td>
                              <input type="text" className="form-control" />
                            </td>
                            <td className="bg-slate-100 ">우편번호1</td>
                            <td>
                              <input type="number" className="form-control" />
                            </td>
                            <td className="bg-slate-100 ">위도</td>
                            <td>
                              <input type="number" className="form-control" />
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-slate-100 ">전화번호</td>
                            <td>
                              <input type="number" className="form-control" />
                            </td>
                            <td className="bg-slate-100 ">팩스</td>
                            <td>
                              <input type="number" className="form-control" />
                            </td>
                            <td className="bg-slate-100 ">우편번호2</td>
                            <td>
                              <input type="number" className="form-control" />
                            </td>
                            <td className="bg-slate-100 ">경도</td>
                            <td>
                              <input type="number" className="form-control" />
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-slate-100 ">픽업국문정보</td>
                            <td>
                              <input type="text" className="form-control" />
                            </td>
                            <td className="bg-slate-100 ">픽업영문정보</td>
                            <td>
                              <input type="text" className="form-control" />
                            </td>
                            <td className="bg-slate-100 ">렌터사</td>
                            <td colSpan={4}>알라모</td>
                          </tr>
                        </table>
                      </div>
                    </td>
                  </tr>
                  <tr className={isOpen4Detail ? '' : 'none_box'}>
                    <td colSpan={15}>
                      <div className="w-full overflow-x-auto">
                        <table className="table-bordered table">
                          <tr>
                            <td className="bg-slate-100" rowSpan={3}>
                              영업시간
                            </td>
                            <td className="bg-slate-100">요일</td>
                            <td className="bg-slate-100">
                              <div className="flex items-center justify-center gap-1">
                                <span>월</span>
                                (
                                <input
                                  id="checkbox-switch-92"
                                  className="form-check-input"
                                  type="checkbox"
                                  onChange={checkHandle}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkbox-switch-92"
                                >
                                  영업안함
                                </label>
                                )
                              </div>
                            </td>
                            <td className="bg-slate-100">
                              <div className="flex items-center justify-center gap-1">
                                <span>화</span>
                                (
                                <input
                                  id="checkbox-switch-91"
                                  className="form-check-input"
                                  type="checkbox"
                                  onChange={checkHandle2}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkbox-switch-91"
                                >
                                  영업안함
                                </label>
                                )
                              </div>
                            </td>
                            <td className="bg-slate-100">
                              <div className="flex items-center justify-center gap-1">
                                <span>수</span>
                                (
                                <input
                                  id="checkbox-switch-90"
                                  className="form-check-input"
                                  type="checkbox"
                                  onChange={checkHandle3}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkbox-switch-90"
                                >
                                  영업안함
                                </label>
                                )
                              </div>
                            </td>
                            <td className="bg-slate-100">
                              <div className="flex items-center justify-center gap-1">
                                <span>목</span>
                                (
                                <input
                                  id="checkbox-switch-89"
                                  className="form-check-input"
                                  type="checkbox"
                                  onChange={checkHandle4}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkbox-switch-89"
                                >
                                  영업안함
                                </label>
                                )
                              </div>
                            </td>
                            <td className="bg-slate-100">
                              <div className="flex items-center justify-center gap-1">
                                <span>금</span>
                                (
                                <input
                                  id="checkbox-switch-88"
                                  className="form-check-input"
                                  type="checkbox"
                                  onChange={checkHandle5}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkbox-switch-88"
                                >
                                  영업안함
                                </label>
                                )
                              </div>
                            </td>
                            <td className="bg-slate-100">
                              <div className="flex items-center justify-center gap-1">
                                <span>토</span>
                                (
                                <input
                                  id="checkbox-switch-87"
                                  className="form-check-input"
                                  type="checkbox"
                                  onChange={checkHandle6}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkbox-switch-87"
                                >
                                  영업안함
                                </label>
                                )
                              </div>
                            </td>
                            <td className="bg-slate-100">
                              <div className="flex items-center justify-center gap-1">
                                <span>일</span>
                                (
                                <input
                                  id="checkbox-switch-86"
                                  className="form-check-input"
                                  type="checkbox"
                                  onChange={checkHandle7}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkbox-switch-86"
                                >
                                  영업안함
                                </label>
                                )
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-slate-100 ">OPEN</td>
                            <td>
                              {isClose ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose2 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose3 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose4 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose5 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose6 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose7 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-slate-100 ">CLOSE</td>
                            <td>
                              {isClose ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose2 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose3 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose4 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose5 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose6 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose7 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                          </tr>
                        </table>
                      </div>
                    </td>
                  </tr>
                  <tr className={isOpen4Detail ? '' : 'none_box'}>
                    <td colSpan={15}>
                      <div className="flex justify-center gap-2 ">
                        <button
                          className="btn btn-outline-danger w-24"
                          onClick={toggleDetail4}
                        >
                          취소
                        </button>
                        <button
                          className="btn btn-primary w-24"
                          onClick={() => {
                            setConfirmModal(true)
                            toggleDetail4()
                          }}
                        >
                          수정
                        </button>
                      </div>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
          <div className="space-between flex items-center p-5">
            <span className="btn btn-sm btn-secondary-soft w-24">
              총 30,000건
            </span>
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
        </div>
      </div>

      {/* 도시 시작 */}
      <div className="box mt-6">
        <div className="border-slate-200/6 space-between flex border-b p-3">
          <div className="flex items-center gap-2">
            <button
              className="btn btn-warning btn-sm mr-8 w-20"
              onClick={() => toggleMenu5()}
            >
              도시
              <Lucide
                icon="ChevronDown"
                className={isOpen5 ? 'ml-2 h-4 w-4 rotate-180' : 'ml-2 h-4 w-4'}
              />
            </button>
            {/* <button className="btn btn-outline-dark btn-sm">
              Feed 수동 업데이트
            </button> */}
            <button
              className="btn btn-outline-dark btn-sm w-20"
              onClick={() => setConfirmModal(true)}
            >
              저장
            </button>
            <Link
              to=""
              className="btn btn-outline-primary btn-sm "
              onClick={() => setUploadModal(true)}
            >
              일괄 업로드
            </Link>
          </div>

          <div className="flex gap-3">
            <button className="btn btn-primary btn-sm">다운로드</button>
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
        <div className={isOpen5 ? 'on' : 'none_box'}>
          <div className="flex flex-row border-b border-slate-200/60 p-3">
            <div className="w-full overflow-x-auto">
              <table className="table">
                <thead className="table-dark text-center">
                  <tr>
                    <th className="w-20">번호</th>
                    <th>브랜드</th>
                    <th>국가 코드</th>
                    <th>주 코드</th>
                    <th>도시 코드</th>
                    <th className="w-36">도시 국문명</th>
                    <th>도시 영문명</th>
                    <th>지점</th>
                    <th>노출여부</th>
                    <th>최종수정자</th>
                    <th>최종수정일시</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td>99</td>
                    <td>내셔널</td>
                    <td onClick={toggleDetail5}>
                      <p className="cursor-pointer underline">US</p>
                    </td>
                    <td onClick={toggleDetail5}>
                      <p className="cursor-pointer underline">ES</p>
                    </td>
                    <td>AUH</td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>ABU DHABI</td>
                    <td onClick={toggleDetail5}>
                      <p className="cursor-pointer underline">2,234</p>
                    </td>
                    <td>
                      <select className="form-select w-16">
                        <option value="">N</option>
                        <option value="">Y</option>
                        <option value="">P</option>
                        <option value="">D</option>
                      </select>
                    </td>
                    <td>연동데이터</td>
                    <td>2022-11-11 11:11:11</td>
                  </tr>
                  {/* <tr className={isOpen5Detail ? '' : 'none_box'}>
                    <td colSpan={15}>
                      <div className="w-full overflow-x-auto">
                        <table className="table-bordered table">
                          <tr>
                            <td className="bg-slate-100 ">주소</td>
                            <td>
                              <input type="text" className="form-control" />
                            </td>
                            <td className="bg-slate-100 ">상세주소</td>
                            <td>
                              <input type="text" className="form-control" />
                            </td>
                            <td className="bg-slate-100 ">우편번호1</td>
                            <td>
                              <input type="number" className="form-control" />
                            </td>
                            <td className="bg-slate-100 ">위도</td>
                            <td>
                              <input type="number" className="form-control" />
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-slate-100 ">전화번호</td>
                            <td>
                              <input type="number" className="form-control" />
                            </td>
                            <td className="bg-slate-100 ">팩스</td>
                            <td>
                              <input type="number" className="form-control" />
                            </td>
                            <td className="bg-slate-100 ">우편번호2</td>
                            <td>
                              <input type="number" className="form-control" />
                            </td>
                            <td className="bg-slate-100 ">경도</td>
                            <td>
                              <input type="number" className="form-control" />
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-slate-100 ">픽업국문정보</td>
                            <td>
                              <input type="text" className="form-control" />
                            </td>
                            <td className="bg-slate-100 ">픽업영문정보</td>
                            <td>
                              <input type="text" className="form-control" />
                            </td>
                            <td className="bg-slate-100 ">렌터사</td>
                            <td colSpan={4}>알라모</td>
                          </tr>
                        </table>
                      </div>
                    </td>
                  </tr>
                  <tr className={isOpen5Detail ? '' : 'none_box'}>
                    <td colSpan={15}>
                      <div className="w-full overflow-x-auto">
                        <table className="table-bordered table">
                          <tr>
                            <td className="bg-slate-100" rowSpan={3}>
                              영업시간
                            </td>
                            <td className="bg-slate-100">요일</td>
                            <td className="bg-slate-100">
                              <div className="flex items-center justify-center gap-1">
                                <span>월</span>
                                (
                                <input
                                  id="checkbox-switch-84"
                                  className="form-check-input"
                                  type="checkbox"
                                  onChange={checkHandle}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkbox-switch-84"
                                >
                                  영업안함
                                </label>
                                )
                              </div>
                            </td>
                            <td className="bg-slate-100">
                              <div className="flex items-center justify-center gap-1">
                                <span>화</span>
                                (
                                <input
                                  id="checkbox-switch-83"
                                  className="form-check-input"
                                  type="checkbox"
                                  onChange={checkHandle2}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkbox-switch-83"
                                >
                                  영업안함
                                </label>
                                )
                              </div>
                            </td>
                            <td className="bg-slate-100">
                              <div className="flex items-center justify-center gap-1">
                                <span>수</span>
                                (
                                <input
                                  id="checkbox-switch-82"
                                  className="form-check-input"
                                  type="checkbox"
                                  onChange={checkHandle3}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkbox-switch-82"
                                >
                                  영업안함
                                </label>
                                )
                              </div>
                            </td>
                            <td className="bg-slate-100">
                              <div className="flex items-center justify-center gap-1">
                                <span>목</span>
                                (
                                <input
                                  id="checkbox-switch-81"
                                  className="form-check-input"
                                  type="checkbox"
                                  onChange={checkHandle4}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkbox-switch-81"
                                >
                                  영업안함
                                </label>
                                )
                              </div>
                            </td>
                            <td className="bg-slate-100">
                              <div className="flex items-center justify-center gap-1">
                                <span>금</span>
                                (
                                <input
                                  id="checkbox-switch-80"
                                  className="form-check-input"
                                  type="checkbox"
                                  onChange={checkHandle5}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkbox-switch-80"
                                >
                                  영업안함
                                </label>
                                )
                              </div>
                            </td>
                            <td className="bg-slate-100">
                              <div className="flex items-center justify-center gap-1">
                                <span>토</span>
                                (
                                <input
                                  id="checkbox-switch-79"
                                  className="form-check-input"
                                  type="checkbox"
                                  onChange={checkHandle6}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkbox-switch-79"
                                >
                                  영업안함
                                </label>
                                )
                              </div>
                            </td>
                            <td className="bg-slate-100">
                              <div className="flex items-center justify-center gap-1">
                                <span>일</span>
                                (
                                <input
                                  id="checkbox-switch-78"
                                  className="form-check-input"
                                  type="checkbox"
                                  onChange={checkHandle7}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkbox-switch-78"
                                >
                                  영업안함
                                </label>
                                )
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-slate-100 ">OPEN</td>
                            <td>
                              {isClose ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose2 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose3 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose4 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose5 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose6 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose7 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-slate-100 ">CLOSE</td>
                            <td>
                              {isClose ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose2 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose3 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose4 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose5 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose6 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                            <td>
                              {isClose7 ? (
                                <>
                                  <div className="text-center">Closed</div>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <input
                                      type="time"
                                      placeholder="00:00"
                                      className="form-control"
                                    />
                                  </div>
                                </>
                              )}
                            </td>
                          </tr>
                        </table>
                      </div>
                    </td>
                  </tr>
                  <tr className={isOpen5Detail ? '' : 'none_box'}>
                    <td colSpan={15}>
                      <div className="flex justify-center gap-2 ">
                        <button
                          className="btn btn-outline-danger w-24"
                          onClick={toggleDetail5}
                        >
                          취소
                        </button>
                        <button
                          className="btn btn-primary w-24"
                          onClick={() => {
                            setConfirmModal(true)
                            toggleDetail5()
                          }}
                        >
                          수정
                        </button>
                      </div>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
          <div className="space-between flex items-center p-5">
            <span className="btn btn-sm btn-secondary-soft w-24">
              총 30,000건
            </span>
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
        </div>
      </div>

      {/* 저장시 */}
      <Dialog
        open={confirmModal}
        onClose={() => {
          setConfirmModal(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setConfirmModal(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="text-center text-lg font-bold">
              정상적으로 등록되었습니다.
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Button
              variant="primary"
              className="w-24"
              type="button"
              onClick={() => {
                setConfirmModal(false)
              }}
            >
              확인
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      <Dialog
        open={confirmModal2}
        onClose={() => {
          setConfirmModal2(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setConfirmModal2(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="text-center text-lg font-bold">
              ***을 입력해주세요
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Button
              variant="primary"
              className="w-24"
              type="button"
              onClick={() => {
                setConfirmModal2(false)
              }}
            >
              확인
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 일괄업로드시 */}
      <Dialog
        size="md"
        open={uploadModal}
        onClose={() => {
          setUploadModal(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">일괄 등록</h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setUploadModal(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="border-b border-slate-200/60 pb-5">
              <div className="font-bold">엑셀 업로드</div>
              <div className="filebox mt-2 flex">
                <div className="left_icon btn-secondary flex items-center border px-3 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    icon-name="file"
                    data-lucide="file"
                    className="lucide lucide-file h-4 w-4"
                  >
                    <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                </div>
                <input
                  id="fileName"
                  className="upload-name text_line flex-1 truncate border border-secondary p-2 text-slate-500"
                  value="첨부파일"
                  placeholder=""
                  readOnly
                />
                <label
                  htmlFor="file"
                  className="file_search btn-secondary cursor-pointer border p-2"
                >
                  파일선택
                </label>
                <input type="file" id="file" />
              </div>
              <div className="mt-2 text-xs">
                <p>
                  * 대량등록의 경우 정상 등록 가능 확인이{' '}
                  <span className="text-danger">최대 30분 시간이</span>{' '}
                  소요됩니다.
                </p>
                <p>* 등록가능한 확장자 : xlsx, csv, xls</p>
              </div>
            </div>
            <div className="pt-5">
              <button type="button" className="btn btn-secondary w-full">
                포멧 다운로드
              </button>
              <div className="mt-2 text-xs">
                <p>* 포멧에 맞춰서 파일을 업로드 해주세요</p>
                <p>
                  * 최대 <span className="text-danger">3,000건</span>까지
                  가능합니다.
                </p>
              </div>
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Button
              className="ml-3 w-24"
              type="button"
              onClick={() => {
                setUploadModal(false)
              }}
            >
              취소
            </Button>
            <Button
              variant="primary"
              className="ml-3 w-24"
              type="button"
              onClick={() => {
                setRegistBtn(true)
              }}
            >
              등록
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 일괄등록 등록 버튼*/}
      <Dialog
        open={RegistBtn}
        onClose={() => {
          setRegistBtn(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setRegistBtn(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <div className="text-center text-lg font-bold">
              정상적으로 등록되었습니다.
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setRegistBtn(false)
                  setUploadModal(false)
                }}
                className="btn btn-primary w-24"
              >
                확인
              </button>
            </div>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}
