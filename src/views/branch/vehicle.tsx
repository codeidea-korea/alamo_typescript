import { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '@/base-components/Button'
import { Dialog } from '@/base-components/Headless'
import { Tab } from '@/base-components/Headless'
import Lucide from '@/base-components/Lucide'

const VehicleMng = () => {
  const [confirmModal, setConfirmModal] = useState(false)
  const [confirmModal2, setConfirmModal2] = useState(false)
  const [carNumber, setCarNumber] = useState(false)

  const [uploadModal, setUploadModal] = useState(false)
  const [RegistBtn, setRegistBtn] = useState(false)
  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">차량정보 관리</h2>
      </div>
      <div className="box mt-3 overflow-x-auto p-3">
        <Tab.Group>
          <Tab.List className="nav-tabs">
            <Tab className="flex-none	">
              <Tab.Button className="text-base font-bold" as="button">
                차량정보
              </Tab.Button>
            </Tab>
            <Tab className="flex-none">
              <Tab.Button className="text-base font-bold" as="button">
                차량제원
              </Tab.Button>
            </Tab>
          </Tab.List>
          <Tab.Panels className="border-l border-r border-b">
            <Tab.Panel className="p-5 leading-relaxed">
              <div className="overflow-x-auto">
                <table className="table-bordered table">
                  <tbody>
                    <tr>
                      <td className="whitespace-nowrap  bg-slate-100 ">
                        브랜드
                      </td>
                      <td>
                        <select className="form-select w-56">
                          <option>전체</option>
                          <option>option1</option>
                          <option>option2</option>
                        </select>
                      </td>
                      <td className="whitespace-nowrap  bg-slate-100 ">
                        차량그룹
                      </td>
                      <td colSpan={3}>
                        <select className="form-select w-56">
                          <option>전체</option>
                          <option>option1</option>
                          <option>option2</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap  bg-slate-100 ">국가</td>
                      <td>
                        <select className="form-select w-56">
                          <option>국가전체</option>
                          <option>option1</option>
                          <option>option2</option>
                        </select>
                      </td>
                      <td className="whitespace-nowrap  bg-slate-100 ">
                        국문명 유무
                      </td>
                      <td>
                        <div className="flex flex-row gap-2">
                          <div className="form-check">
                            <input
                              id="checkbox-switch-4"
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkbox-switch-4"
                            >
                              Y
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              id="checkbox-switch-5"
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkbox-switch-5"
                            >
                              N
                            </label>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap  bg-slate-100 ">
                        노출여부
                      </td>
                      <td>
                        <div className="flex flex-row gap-2">
                          <div className="form-check">
                            <input
                              id="checkbox-switch-6"
                              className="form-check-input"
                              type="checkbox"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkbox-switch-6"
                            >
                              Y
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              id="checkbox-switch-7"
                              className="form-check-input"
                              type="checkbox"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkbox-switch-7"
                            >
                              N
                            </label>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap  bg-slate-100 ">
                        차량코드
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                        />
                      </td>
                      <td className="whitespace-nowrap  bg-slate-100 ">
                        차량등급 영문명
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                        />
                      </td>
                      <td className="whitespace-nowrap  bg-slate-100 ">
                        차량등급 국문명
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="mt-5 pb-8">
                  <div className="flex-center flex gap-3">
                    <button className="btn w-24 bg-white">초기화</button>
                    <button className="btn btn-primary w-24">조회</button>
                  </div>
                </div>

                <div className="border-slate-200/6 space-between mb-3 flex border-t pt-8">
                  <div className="flex items-center gap-2">
                    <button className="btn btn-outline-dark btn-sm">
                      Feed 수동 업데이트
                    </button>
                    <button
                      className="btn btn-outline-primary btn-sm "
                      onClick={() => setConfirmModal2(true)}
                    >
                      저장(필수 입력값 미입력 시)
                    </button>
                    <button
                      className="btn btn-outline-primary btn-sm "
                      onClick={() => setConfirmModal(true)}
                    >
                      저장(정상 저장 시)
                    </button>
                  </div>

                  <div className="flex gap-3">
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

                <div className="border-slate-200/60 pb-8">
                  <div className="w-full overflow-x-auto">
                    <table className="table">
                      <thead className="table-dark text-center">
                        <tr>
                          <th className="w-20">번호</th>
                          <th>브랜드</th>
                          <th>차량그룹</th>
                          <th>노출여부</th>
                          <th>국가코드</th>
                          <th>차량코드</th>
                          <th>차량등급 영문명</th>
                          <th>차량등급 국문명</th>
                          <th>차량제원</th>
                          <th>이미지</th>
                          <th>최종 업데이트 일시</th>
                          <th>최종수정자</th>
                          <th>최종수정일시</th>
                        </tr>
                      </thead>
                      <tbody className="whitespace-nowrap text-center">
                        <tr>
                          <td>99</td>
                          <td>내셔널</td>
                          <td>
                            <select
                              className="form-select w-24"
                              aria-label="Default select example"
                            >
                              <option>선택</option>
                              <option>세단</option>
                              <option>웨건</option>
                              <option>SUV</option>
                              <option>컨버터블</option>
                              <option>밴</option>
                            </select>
                          </td>
                          <td>
                            <select
                              className="form-select w-24"
                              aria-label="Default select example"
                            >
                              <option>Y</option>
                              <option>N</option>
                            </select>
                          </td>
                          <td>US</td>
                          <td>CCAR</td>
                          <td>Compact</td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="중소형"
                            />
                          </td>
                          <td
                            className="cursor-pointer underline"
                            onClick={() => setCarNumber((prev) => !prev)}
                          >
                            3
                          </td>
                          <td>
                            <div className="flex">
                              <a href="#" className="" download="">
                                <img
                                  src="https://www.hyundai.com/contents/mainbanner/venue_m.png"
                                  alt="dfdf"
                                  className="w-40"
                                />
                              </a>
                              <a href="#" className="" download="">
                                <img
                                  src="https://www.hyundai.com/contents/mainbanner/venue_m.png"
                                  alt="dfdf"
                                  className="w-40"
                                />
                              </a>
                            </div>
                          </td>
                          <td>2022-11-11 11:11:11</td>
                          <td>연동데이터</td>
                          <td>2022-11-11 11:11:11</td>
                        </tr>
                      </tbody>
                    </table>
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
                              <Lucide
                                icon="ChevronsRight"
                                className="h-4 w-4"
                              />
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
                {carNumber && (
                  <>
                    <div className="border-slate-200/6 flex items-center border-t pt-8">
                      <h2 className="mr-auto text-lg font-bold">
                        차량제원 목록
                      </h2>
                    </div>
                    <div className="mt-5">
                      <div className="overflow-x-auto">
                        <table className="table">
                          <thead className="table-dark text-center">
                            <tr>
                              <th className="w-20">번호</th>
                              <th>차량제원 코드</th>
                              <th>차량제원 영문명</th>
                              <th>차량제원 국문명</th>
                            </tr>
                          </thead>
                          <tbody className="whitespace-nowrap text-center">
                            <tr>
                              <td>3</td>
                              <td>33</td>
                              <td>Cruise Control</td>
                              <td>자동 속도 조절 장치</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>31</td>
                              <td>Leather Interior</td>
                              <td>가죽 인테리어</td>
                            </tr>
                            <tr>
                              <td>1</td>
                              <td>22</td>
                              <td>2WD or 4WD</td>
                              <td>2WD or 4WD</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </Tab.Panel>
            <Tab.Panel className="p-5 leading-relaxed">
              <div className="overflow-x-auto">
                <table className="table-bordered table">
                  <tr>
                    <td className="whitespace-nowrap  bg-slate-100 ">브랜드</td>
                    <td colSpan={3}>
                      <select className="form-select w-56">
                        <option>전체</option>
                        <option>option1</option>
                        <option>option2</option>
                      </select>
                    </td>
                    <td className="whitespace-nowrap  bg-slate-100 ">
                      국문명 유무
                    </td>
                    <td>
                      <div className="flex flex-row gap-2">
                        <div className="form-check mr-2">
                          <input
                            id="checkbox-switch-4"
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checkbox-switch-4"
                          >
                            Y
                          </label>
                        </div>
                        <div className="form-check mr-2 mt-0">
                          <input
                            id="checkbox-switch-5"
                            className="form-check-input"
                            type="checkbox"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checkbox-switch-5"
                          >
                            N
                          </label>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap  bg-slate-100 ">
                      차량제원 코드
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                    </td>
                    <td className="whitespace-nowrap  bg-slate-100 ">
                      차량제원 영문명
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                    </td>
                    <td className="whitespace-nowrap  bg-slate-100 ">
                      차량제원 국문명
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                    </td>
                  </tr>
                </table>
              </div>
              <div className="mt-5 pb-8">
                <div className="flex-center flex gap-3">
                  <button className="btn w-24 bg-white">초기화</button>
                  <button className="btn btn-primary w-24">조회</button>
                </div>
              </div>

              <div className="border-slate-200/6 space-between mb-3 flex border-t pt-8">
                <div className="flex items-center gap-2">
                  <button
                    className="btn btn-outline-primary btn-sm w-20"
                    onClick={() => setConfirmModal(true)}
                  >
                    저장
                  </button>
                  <button className="btn btn-outline-dark btn-sm"
                    onClick={() =>
                      setUploadModal(true)
                    }
                  >
                    일괄 업로드
                  </button>
                </div>

                <div className="flex gap-3">
                  <button className="btn btn-primary btn-sm w-20">
                    다운로드
                  </button>
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

              <div className="border-slate-200/60 pb-8">
                <div className="w-full overflow-x-auto">
                  <table className="table">
                    <thead className="table-dark text-center">
                      <tr>
                        <th className="w-20">번호</th>
                        <th>브랜드</th>
                        <th>차량제원 코드</th>
                        <th>차량제원 영문명</th>
                        <th>차량제원 국문명</th>
                        <th>최종수정자</th>
                        <th>최종수정일시</th>
                      </tr>
                    </thead>
                    <tbody className="whitespace-nowrap text-center">
                      <tr>
                        <td>99</td>
                        <td>내셔널</td>
                        <td>33</td>
                        <td>Cruise Control</td>
                        <td>
                          {/* 자동 속도 조절 장치 */}
                          {/* 차량제원 국문명 그리드에서 직접 입력/수정 */}
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="자동 속도 조절 장치"
                          />
                        </td>
                        <td>연동데이터</td>
                        <td>2022-11-11 11:11:11</td>
                      </tr>
                      <tr>
                        <td>98</td>
                        <td>엔터프라이즈</td>
                        <td>33</td>
                        <td>Leather Interior</td>
                        <td>
                          {/* 가죽 인테리어 */}
                          {/* 차량제원 국문명 그리드에서 직접 입력/수정 */}
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="가죽 인테리어"
                          />
                        </td>
                        <td>홍길동</td>
                        <td>2022-11-11 11:11:11</td>
                      </tr>
                      <tr>
                        <td>97</td>
                        <td>알라모</td>
                        <td>33</td>
                        <td>2WD or 4WD</td>
                        <td>
                          {/* 2WD or 4WD */}
                          {/* 차량제원 국문명 그리드에서 직접 입력/수정 */}
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="2WD or 4WD"
                          />
                        </td>
                        <td>홍길동</td>
                        <td>2022-11-11 11:11:11</td>
                      </tr>
                    </tbody>
                  </table>
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
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
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
              type="button"
              variant="primary"
              className="w-24"
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
              type="button"
              variant="primary"
              className="w-24"
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
export default VehicleMng
