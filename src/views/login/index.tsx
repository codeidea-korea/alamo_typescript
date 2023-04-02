import { useEffect, useRef, useState } from 'react'
import { useIsAuthenticated, useSignIn } from 'react-auth-kit'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { z } from 'zod'

import request from '@/utils/request'

import Button from '@/base-components/Button'
import { Dialog } from '@/base-components/Headless'
import Lucide from '@/base-components/Lucide'
import Notification, {
  NotificationElement,
} from '@/base-components/Notification'

import ChangeInfoDialog from '@/components/Layouts/ChangeInfoDialog'
import Loading from '@/components/Loading'

import logoUrl from '@/assets/images/alamo_logo.svg'

const loginSchema = z.object({
  username: z.string().min(4, { message: '아이디 4자 이상 입력해주세요.' }),
  password: z.string().min(8, { message: '비밀번호는 8자 이상 입력해주세요.' }),
  saveId: z.boolean(),
})

type Input = z.infer<typeof loginSchema>

const Login = () => {
  const navigate = useNavigate()
  const [headerFooterModalPreview, setHeaderFooterModalPreview] =
    useState(false)
  const deleteButtonRef = useRef(null)
  const signIn = useSignIn()
  const isAuthenticated = useIsAuthenticated()
  const auth = isAuthenticated()

  const errorNotification = useRef<NotificationElement>()

  const {
    register,
    getValues,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: localStorage.getItem('username') || '',
      password: '',
      saveId: false,
    },
  })

  const { mutate: createToken, isLoading: isCreateToken } = useMutation(
    (params: Input) =>
      request.post('/user/login', null, {
        params,
      }),
    {
      onSuccess({ data }) {
        if (data.result) {
          getValues('saveId') &&
            localStorage.setItem('username', getValues('username'))
          signIn({
            token: data.data.accessToken,
            tokenType: 'Bearer',
            expiresIn: 60 * 24 * 7,
            authState: {
              userId: data.data.userId,
              name: data.data.name,
              email: data.data.email,
              phoneNo: data.data.phoneNo,
              mobilePhoneNo: data.data.mobilePhoneNo,
            },
          })
        }
      },
      onError() {
        reset({
          username: '',
          password: '',
        })
        errorNotification.current?.showToast()
      },
    },
  )

  useEffect(() => {
    if (auth) {
      navigate('/')
    }
  }, [auth])

  const onSubmit: SubmitHandler<Input> = (data) => {
    createToken(data)
  }

  const submitSetPassword = () => {}

  // 정보변경 모달
  const [modifyModal, setModifyModal] = useState(false)

  return (
    <div className="flex h-screen items-center">
      <form
        className="relative my-10 mx-auto h-auto w-2/5 rounded-md bg-white p-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        {isCreateToken && <Loading />}
        <div className="mb-7 text-center">
          <img src={logoUrl} alt="" className=" mx-auto w-24" />
          <div className="mt-3 text-2xl font-bold text-black">
            렌터카 통합관리자 시스템
          </div>
        </div>
        <div className="form-inline">
          <label htmlFor="horizontal-form-1" className="form-label sm:w-20">
            아이디
          </label>
          <input
            id="horizontal-form-1"
            type="text"
            autoComplete="username"
            className="form-control"
            placeholder="아이디를 입력해주세요"
            {...register('username', { required: true })}
          />
        </div>
        {errors.username && (
          <div className="form-inline mt-2 pl-[100px] text-danger">
            {errors.username.message}
          </div>
        )}
        <div className="form-inline mt-3">
          <label htmlFor="horizontal-form-2" className="form-label sm:w-20">
            비밀번호
          </label>
          <input
            id="horizontal-form-2"
            type="password"
            autoComplete="current-password"
            className="form-control"
            placeholder="비밀번호를 입력해주세요"
            {...register('password', { required: true })}
          />
        </div>
        {errors.password && (
          <div className="form-inline mt-2 pl-[100px] text-danger">
            {errors.password.message}
          </div>
        )}
        <div className="form-check mt-5 sm:ml-20 sm:pl-5">
          <input
            id="horizontal-form-3"
            className="form-check-input"
            type="checkbox"
            {...register('saveId')}
          />
          <label className="form-check-label" htmlFor="horizontal-form-3">
            아이디 저장
          </label>
        </div>
        <div className=" mt-5 sm:pl-5">
          <button
            className="btn btn-elevated-dark w-full text-base"
            disabled={!watch('username') || !watch('password')}
          >
            로그인
          </button>
        </div>
        <div className="my-7 border-t border-solid border-slate-300"></div>
        <p className="text-center">
          아이디, 비밀번호 분실 등의 문의는 <b>개발팀</b>으로 문의 주세요.
        </p>

        {/* 첫로그인 시 나중 삭제 */}
        <div className="mt-2 flex gap-2 justify-center">
          <Button
            as="a"
            variant="primary"
            onClick={() => {
              setHeaderFooterModalPreview(true)
            }}
          >
            첫 로그인 모달 (프리뷰용)
          </Button>
          <Button
            as="a"
            variant="primary"
            onClick={() => {
              setModifyModal(true)
            }}
          >
            정보 변경 모달 (프리뷰용)
          </Button>
        </div>
      </form>
      <Notification
        getRef={(el) => {
          errorNotification.current = el
        }}
        className="flex"
      >
        <Lucide icon="Slash" className="text-danger" />
        <div className="ml-4 mr-4">
          <div className="font-medium">로그인</div>
          <div className="mt-1 text-danger">로그인 정보를 확인해주세요.</div>
        </div>
      </Notification>

      {/* 정보변경 모달 */}
      <ChangeInfoDialog open={modifyModal} setOpen={setModifyModal} />
      {/* 정보변경 모달 끝 */}

      {/* 비밀번호 설정 팝업 */}
      <Dialog
        open={headerFooterModalPreview}
        onClose={() => {
          setHeaderFooterModalPreview(false)
        }}
        initialFocus={deleteButtonRef}
      >
        <Dialog.Panel as="form" onSubmit={handleSubmit(submitSetPassword)}>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">비밀번호 설정</h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setHeaderFooterModalPreview(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="text-center text-lg font-bold">
              첫 로그인시 비밀번호 설정 후 사용가능 합니다.
            </div>
            <table className="table-bordered mt-6 table">
              <tbody>
                <tr>
                  <td className="w-40 bg-slate-100 p-1">
                    <label htmlFor="horizontal-form-1">아이디</label>
                  </td>
                  <td className="p-1">
                    <input
                      id="horizontal-form-1"
                      type="text"
                      className="form-control"
                      autoComplete="username"
                      placeholder="아이디를 입력해주세요"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="w-40 bg-slate-100 p-1">
                    <label htmlFor="horizontal-form-2" className="">
                      비밀번호
                    </label>
                  </td>
                  <td className="p-1">
                    <input
                      id="horizontal-form-2"
                      type="password"
                      className="form-control"
                      autoComplete="new-password"
                      placeholder="비밀번호를 입력해주세요"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="w-40 bg-slate-100 p-1">
                    <label htmlFor="horizontal-form-3" className="">
                      비밀번호 재입력
                    </label>
                  </td>
                  <td className="p-1">
                    <input
                      id="horizontal-form-3"
                      type="password"
                      className="form-control"
                      autoComplete="new-password"
                      placeholder="비밀번호를 입력해주세요"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="form-check mt-3">
              <p className="text-xs text-rose-600">
                재입력 비밀번호를 확인해주세요.
              </p>
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-8 text-center">
            <Button
              variant="outline-secondary"
              type="button"
              onClick={() => {
                setHeaderFooterModalPreview(false)
              }}
              className="mr-1 w-24"
            >
              취소
            </Button>
            <Button
              variant="primary"
              className="w-24"
              ref={deleteButtonRef}
              onClick={() => {
                setHeaderFooterModalPreview(false)
                navigate('/')
              }}
            >
              등록
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>
    </div>
  )
}

export default Login
