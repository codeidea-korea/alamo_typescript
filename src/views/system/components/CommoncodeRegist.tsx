import React from 'react'
import { useState } from 'react'

import { Dialog } from '@/base-components/Headless'
import Lucide from '@/base-components/Lucide'

interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CommonCodeRegist({ open, setOpen }: Props) {
  function commonCodeRegist(arg0: boolean) {
    throw new Error('Function not implemented.')
  }

  const [Confirm, setConfirm] = useState(false)

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
          <h2 className="mr-auto text-base font-medium">공통코드 등록</h2>
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
          <div className="">
            <div className="intro-y box p-3">
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
                        disabled
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="w-44 bg-slate-100 text-center font-semibold">
                      공통코드
                    </td>
                    <td>
                      <input
                        id="common_code"
                        type="text"
                        className="form-control"
                        value="자동생성"
                        disabled
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="w-44 bg-slate-100 text-center font-semibold">
                      공통코드명
                    </td>
                    <td>
                      <input
                        id="common_name"
                        type="text"
                        className="form-control"
                        value=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="w-44 bg-slate-100 text-center font-semibold">
                      우선순위
                    </td>
                    <td>
                      <input
                        id="priority"
                        type="text"
                        className="form-control"
                        value=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="w-44 bg-slate-100 text-center font-semibold">
                      사용여부
                    </td>
                    <td>
                      <div className="flex flex-row">
                        <div className="form-check mr-2">
                          <input
                            id="check_use-1"
                            className="form-check-input"
                            type="radio"
                            name="check_use"
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
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-3 pb-8 text-center">
            <button type="button" className="btn mr-2 w-24 bg-white"    onClick={() => {
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
              공통코드를 등록하시겠습니까?
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
    </>
  )
}
