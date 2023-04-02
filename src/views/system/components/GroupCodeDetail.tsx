import React from 'react'
import { useState } from 'react'

import { Dialog } from '@/base-components/Headless'
import Lucide from '@/base-components/Lucide'

interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function GroupCodeDetail({ open, setOpen }: Props) {

  const [Confirm, setConfirm] = useState(false)
  const [Delete, setDelete] = useState(false)

  return (
    <>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">그룹코드 상세/수정</h2>
            <button
              type='button'
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setOpen(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="p-0">
            <div className="">
              <div className="intro-y box p-5">
                <table className="table-bordered table w-full">
                  <tbody>
                    <tr>
                      <td className="w-44 bg-slate-100 text-center font-semibold">
                        그룹코드
                      </td>
                      <td>
                        <input
                          id="group_code"
                          type="text"
                          className="form-control"
                          value="G0001"
                          disabled
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="w-44 bg-slate-100 text-center font-semibold">
                        그룹명
                      </td>
                      <td>
                        <input
                          id="group_name"
                          type="text"
                          className="form-control"
                          value="FAQ 구분"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="w-44 bg-slate-100 text-center font-semibold">
                        사용여부
                      </td>
                      <td>
                        <div className="mt-2 flex flex-col sm:flex-row">
                          <div className="form-check mr-5">
                            <input
                              id="check_use-1"
                              className="form-check-input"
                              type="radio"
                              name="check_use"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="check_use-1"
                            >
                              Y
                            </label>
                          </div>
                          <div className="form-check mr-2">
                            <input
                              id="check_use-2"
                              className="form-check-input"
                              type="radio"
                              name="check_use"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="check_use-2"
                            >
                              N
                            </label>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-44 bg-slate-100 text-center font-semibold">
                        최종수정자
                      </td>
                      <td>홍길동</td>
                    </tr>
                    <tr>
                      <td className="w-44 bg-slate-100 text-center font-semibold">
                        최종수정일시
                      </td>
                      <td>2022-11-11 11:11:11</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="px-5 pb-8 text-center">
              <button type="button" className="btn btn-danger mr-2 w-24"
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
              그룹코드/상세 수정을 등록하시겠습니까?
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
            그룹코드/상세를 삭제하시겠습니까?
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
                  setDelete(false), setOpen(false)
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
