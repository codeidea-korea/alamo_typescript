import Dialog from '@/base-components/Headless/Dialog'
import Lucide from '@/base-components/Lucide'
import { useState } from 'react'
import { Link } from 'react-router-dom'


interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AuthorityDetailChange({ open, setOpen }: Props) {

  const showAlert2 = () => {
    alert('비밀번호가 초기화되었습니다.')
  }
  const [Confirm, setConfirm] = useState(false)
  const [Delete, setDelete] = useState(false)


  return (
    <>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false)
        }}
        size="xl"
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">사용자 상세/수정</h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setOpen(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="p-0">
            <div className="intro-y box p-3">
              <table className="table-bordered table w-full">
                <tbody>
                  <tr>
                    <td className="w-44 bg-slate-100 text-center font-semibold">
                      권한
                    </td>
                    <td>
                      <table className="table-bordered table w-full">
                        <tbody>
                          <tr>
                            <td className="w-44 bg-slate-100 text-center font-semibold">
                              시스템 권한
                            </td>
                            <td>
                              <div className="flex">
                                <div className="form-check mr-5">
                                  <input
                                    id="system_auth"
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="system_auth"
                                  >
                                    마스터
                                  </label>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="w-44 bg-slate-100 text-center font-semibold">
                              정산 권한
                            </td>
                            <td>
                              <div className="flex">
                                <div className="form-check mr-5">
                                  <input
                                    id="settle_auth-1"
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="settle_auth-1"
                                  >
                                    담당직원
                                  </label>
                                </div>
                                <div className="form-check mr-5">
                                  <input
                                    id="settle_auth-2"
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="settle_auth-2"
                                  >
                                    경영팀장
                                  </label>
                                </div>
                                <div className="form-check mr-5">
                                  <input
                                    id="settle_auth-3"
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="settle_auth-3"
                                  >
                                    이사
                                  </label>
                                </div>
                                <div className="form-check mr-5">
                                  <input
                                    id="settle_auth-4"
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="settle_auth-4"
                                  >
                                    대표이사
                                  </label>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="w-44 bg-slate-100 text-center font-semibold">
                              00 권한
                            </td>
                            <td>
                              <div className="flex">
                                <div className="form-check mr-5">
                                  <input
                                    id="a_auth-1"
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="a_auth-1"
                                  >
                                    권한1
                                  </label>
                                </div>
                                <div className="form-check mr-5">
                                  <input
                                    id="a_auth-2"
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="a_auth-2"
                                  >
                                    권한2
                                  </label>
                                </div>
                                <div className="form-check mr-5">
                                  <input
                                    id="a_auth-3"
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="a_auth-3"
                                  >
                                    권한3
                                  </label>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-44 bg-slate-100  text-center font-semibold">
                      직위
                    </td>
                    <td>
                      <select
                        className="form-select-sm form-select w-20"
                        aria-label=".form-select-lg example"
                      >
                        <option>선택</option>
                        <option>직위1</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-44 bg-slate-100 text-center font-semibold">
                      소속팀
                    </td>
                    <td>
                      <select
                        className="form-select-sm form-select w-20"
                        aria-label=".form-select-lg example"
                      >
                        <option>선택</option>
                        <option>소속팀1</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-44 bg-slate-100 text-center font-semibold">
                      아이디
                    </td>
                    <td>
                      <div className="flex">
                        <input
                          id="name_kr"
                          type="text"
                          className="form-control mr-2"
                          value="a0000" disabled
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-44 bg-slate-100 text-center font-semibold">
                      비밀번호
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary mr-2 "
                        onClick={() =>
                          showAlert2()
                        }
                      >
                        비밀번호 초기화
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-44 bg-slate-100 text-center font-semibold">
                      이름
                    </td>
                    <td>
                      <input
                        id="name"
                        type="text"
                        className="form-control"
                        value=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="w-44 bg-slate-100 text-center font-semibold">
                      휴대폰 번호
                    </td>
                    <td>
                      <input
                        id="phone"
                        type="number"
                        className="form-control"
                        value=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="w-44 bg-slate-100 text-center font-semibold">
                      이메일
                    </td>
                    <td>
                      <input
                        id="email"
                        type="text"
                        className="form-control"
                        value=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="w-44 bg-slate-100 text-center font-semibold">
                      최종 접속일시
                    </td>
                    <td>
                      2022-11-11 11:11:11
                    </td>
                  </tr>

                  <tr>
                    <td className="w-44 bg-slate-100 text-center font-semibold">
                      최종 수정자
                    </td>
                    <td>
                      홍길동
                    </td>
                  </tr>
                  <tr>
                    <td className="w-44 bg-slate-100 text-center font-semibold">
                      최종 수정일시
                    </td>
                    <td>
                      2022-11-11 11:11:11
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-5 mt-5 pb-8 text-center">
              <button
                type="button"
                className="btn btn-danger mr-2 w-24"
                onClick={() => {
                  setDelete(true)
                }}
              >
                삭제
              </button>
              <button
                type="button"
                className="btn btn-ouline-secondary mr-2 w-24"
                onClick={() => {
                  setOpen(false)
                }}
              >
                취소
              </button>
              <button
                type="button"
                onClick={() => {
                  setConfirm(true)
                }}
                className="btn btn-primary w-24"
              >
                등록
              </button>
            </div>
          </Dialog.Description>
        </Dialog.Panel>
      </Dialog>

      {/* 등록 모달 */}
      <Dialog
        open={Confirm}
        onClose={() => {
          setConfirm(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">Confirm</h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setConfirm(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <div className="text-center text-lg font-bold">
              사용자/상세 수정을 등록하시겠습니까?
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setConfirm(false)
                }}
                className="btn btn-white mr-2 w-24"
              >
                취소
              </button>
              <button
                type="button"
                onClick={() => {
                  setConfirm(false),
                    setOpen(false)
                }}
                className="btn btn-primary w-24"
              >
                확인
              </button>
            </div>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 삭제 모달 */}
      <Dialog
        open={Delete}
        onClose={() => {
          setDelete(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">Confirm</h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setDelete(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <div className="text-center text-lg font-bold">
              사용자/상세를 삭제하시겠습니까?
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setDelete(false)
                }}
                className="btn btn-white mr-2 w-24"
              >
                취소
              </button>
              <button
                type="button"
                onClick={() => {
                  setDelete(false),    setOpen(false)
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
