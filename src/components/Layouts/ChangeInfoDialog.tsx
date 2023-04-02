import { useRef, useState } from 'react'
import { useAuthUser } from 'react-auth-kit'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'

import request from '@/utils/request'

import Dialog from '@/base-components/Headless/Dialog'
import Lucide from '@/base-components/Lucide'

import Loading from '@/components/Loading'

interface Inputs {
  name: string
  phoneNo: string
  email: string
}

export default function ChangeInfoDialog({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const auth = useAuthUser()
  const [password, setPassword] = useState(false)
  const [RegistBtn, setRegistBtn] = useState(false)

  const updateButton = useRef(null)

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: auth()?.name,
      phoneNo: auth()?.phoneNo,
      email: auth()?.email,
    },
  })

  const { mutate: updateUserInfo, isLoading: isUpdateUserInfo } = useMutation(
    (params: Inputs) => request.put('/user', params),
  )

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    updateUserInfo(data)
  }
  return (
    <>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false)
        }}
        initialFocus={updateButton}
      >
        <Dialog.Panel
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          className="relative"
        >
          {isUpdateUserInfo && <Loading />}
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">정보변경</h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setOpen(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <table className="table-bordered table">
              <tbody>
                <tr>
                  <td className="w-40 bg-slate-100">아이디</td>
                  <td>{auth()?.userId}</td>
                </tr>

                {password ? (
                  <>
                    <tr>
                      <td className="w-40 bg-slate-100">
                        <label htmlFor="horizontal-form-4" className="">
                          현재 비밀번호
                        </label>
                      </td>
                      <td>
                        <input
                          id="horizontal-form-4"
                          type="password"
                          className="form-control"
                          placeholder=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="w-40 bg-slate-100">
                        <label htmlFor="horizontal-form-5" className="">
                          새로운 비밀번호
                        </label>
                      </td>
                      <td>
                        <input
                          id="horizontal-form-5"
                          type="password"
                          className="form-control"
                          placeholder=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="w-40 bg-slate-100">
                        <label htmlFor="horizontal-form-6" className="">
                          비밀번호 재입력
                        </label>
                      </td>
                      <td>
                        <input
                          id="horizontal-form-6"
                          type="password"
                          className="form-control"
                          placeholder=""
                        />
                      </td>
                    </tr>
                  </>
                ) : (
                  <tr>
                    <td className="w-40 bg-slate-100">비밀번호</td>
                    <td>
                      <button
                        onClick={() => {
                          setPassword(true)
                        }}
                        className="btn btn-sm btn-secondary mr-1 w-24"
                      >
                        비밀번호 재설정
                      </button>
                    </td>
                  </tr>
                )}
                <tr>
                  <td className="w-40 bg-slate-100">
                    <label htmlFor="horizontal-form-1" className="">
                      이름
                    </label>
                  </td>
                  <td>
                    <input
                      id="horizontal-form-1"
                      type="text"
                      className="form-control"
                      placeholder="이름을 입력해주세요"
                      {...register('name')}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="w-40 bg-slate-100">
                    <label htmlFor="horizontal-form-2" className="">
                      휴대폰번호
                    </label>
                  </td>
                  <td>
                    <input
                      id="horizontal-form-2"
                      type="number"
                      className="form-control"
                      placeholder="휴대폰번호를 입력해주세요"
                      {...register('phoneNo')}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="w-40 bg-slate-100">
                    <label htmlFor="horizontal-form-3" className="">
                      이메일
                    </label>
                  </td>
                  <td>
                    <input
                      id="horizontal-form-3"
                      type="text"
                      className="form-control"
                      placeholder="이메일을 입력해주세요"
                      {...register('email')}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </Dialog.Description>
          <Dialog.Footer>
            <button
              type="button"
              onClick={() => {
                setOpen(false)
              }}
              className="btn btn-outline-secondary mr-1 w-20"
            >
              취소
            </button>
            <button className="btn btn-primary w-20" ref={updateButton}
              onClick={() =>
                setRegistBtn(true)
              }
            >
              등록
            </button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 등록 버튼*/}
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
