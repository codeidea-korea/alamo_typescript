import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import Pick from 'lodash/pick'
import { z } from 'zod'

import request from '@/utils/request'

import { ClassicEditor } from '@/base-components/Ckeditor'
import Dropzone, { DropzoneElement } from '@/base-components/Dropzone'
import { Dialog } from '@/base-components/Headless'
import Lucide from '@/base-components/Lucide'
import Tippy from '@/base-components/Tippy'

import LoadingBox from '@/components/LoadingBox'
import RadioUse from '@/components/common/RadioUse'

interface Props {
  isCreate?: boolean
}

interface NoticeDetail {
  brandId: number
  contents: string
  fixed: boolean
  id: number
  modifiedAt: string
  modifiedId: number
  title: string
  views: number
  visabled: boolean
}

const noticeInput = z.object({
  title: z.string().min(1, { message: '제목을 입력해주세요.' }),
  contents: z.string().min(1, { message: '내용을 입력해주세요.' }),
  visabled: z.boolean().or(z.enum(['Y', 'N'])),
  fixed: z.boolean().or(z.enum(['Y', 'N'])),
})

type Input = z.infer<typeof noticeInput>

export default function NoticeControl({ isCreate }: Props) {
  const navigate = useNavigate()
  const { id } = useParams()

  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    reset,
    formState: { errors, defaultValues },
  } = useForm<Input>({
    defaultValues: {
      title: '',
      contents: '',
      visabled: 'Y',
      fixed: 'N',
    },
    resolver: zodResolver(noticeInput),
  })

  const { isLoading: isGetNoticeDetail } = useQuery(
    ['getNoticeDetail'],
    () => request.get(`/contents/notice/${id}`),
    {
      enabled: !isCreate,
      select: ({ data }): NoticeDetail => data.data,
      onSuccess: (data) => {
        const pickData = Pick(data, Object.keys(defaultValues as object))
        reset({
          ...pickData,
          visabled: pickData.visabled ? 'Y' : 'N',
          fixed: pickData.fixed ? 'Y' : 'N',
        })
      },
    },
  )

  const { mutate: createNotice, isLoading: isCreateNotice } = useMutation(
    (params: any) =>
      request[isCreate ? 'post' : 'put'](`/contents/notice/${id}`, params),
    {
      onSuccess({ data }) {
        if (data.result) {
          navigate('/system/notice')
        }
      },
    },
  )

  const onSubmit: SubmitHandler<Input> = (data) => {
    createNotice({
      ...data,
      visabled: data.visabled === 'Y',
      fixed: data.fixed === 'Y',
    })
  }

  // 파일 삭제
  const FileDeleteHandle = (e: any) => {
    const file = e.target.parentElement.parentElement
    file.remove()
  }

  // 등록 버튼
  const [RegistBtn, setRegistBtn] = useState(false)
  const [RegistBtn2, setRegistBtn2] = useState(false)

  // 컨펌 모달
  const [deleteConfirm, setdeleteConfirm] = useState(false)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">공지사항 등록</h2>
      </div>

      <LoadingBox
        className="intro-y box mt-3 p-3"
        loading={isCreateNotice || (isGetNoticeDetail && !isCreate)}
      >
        <table className="table-bordered table">
          <tbody>
            <tr>
              <td className="w-40 bg-slate-100">브랜드</td>
              <td colSpan={3}>
                <select name="" id="" className="form-select w-56">
                  <option value="">전체</option>
                  <option value="">옵션1</option>
                  <option value="">옵션2</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="w-40 bg-slate-100">제목</td>
              <td colSpan={3}>
                <input
                  type="text"
                  className={clsx(
                    'form-control',
                    errors?.title && 'border-danger',
                  )}
                  {...register('title')}
                />
                {errors?.title && (
                  <div className="mt-1 text-danger">
                    {errors?.title.message}
                  </div>
                )}
              </td>
            </tr>
            <tr>
              <td className="w-40 bg-slate-100">첨부파일</td>
              <td colSpan={3}>
                <label
                  htmlFor="fileadd"
                  className="btn btn-sm btn-secondary w-16"
                >
                  파일 찾기
                </label>
                <input
                  type="file"
                  name="fileadd"
                  id="fileadd"
                  className="hidden"
                  multiple
                />
                <span className="ml-3 text-xs text-sky-600">
                  ※ JPG, PNG, SVG, PDF, DOC, HWP 만 가능 / 최대 2개
                </span>
                <div className="mt-3">
                  <span className="relative mr-2">
                    <Lucide
                      icon="XCircle"
                      className="absolute right-[-7px] top-[-7px] ml-4 h-5 w-5 cursor-pointer fill-black text-white"
                      onClick={FileDeleteHandle}
                    ></Lucide>
                    <Tippy
                      as="a"
                      href="#"
                      className="tooltip"
                      content="파일명"
                      options={{
                        theme: 'light',
                      }}
                      download
                    >
                      <Lucide
                        icon="FileText"
                        className="inline-block h-6 w-6"
                      />
                    </Tippy>
                  </span>
                  <span className="relative mr-2">
                    <Lucide
                      icon="XCircle"
                      className="absolute right-[-7px] top-[-7px] ml-4 h-5 w-5 cursor-pointer fill-black text-white"
                      onClick={FileDeleteHandle}
                    ></Lucide>
                    <Tippy
                      as="a"
                      href="#"
                      className="tooltip"
                      content="파일명"
                      options={{
                        theme: 'light',
                      }}
                      download
                    >
                      <Lucide
                        icon="FileText"
                        className="inline-block h-6 w-6"
                      />
                    </Tippy>
                  </span>
                </div>
                {/* <Dropzone
                  options={{
                    url: 'https://httpbin.org/post',
                    thumbnailWidth: 150,
                    maxFilesize: 0.5,
                    addRemoveLinks: true,
                    dictRemoveFile: '삭제',
                    headers: { 'My-Awesome-Header': 'header value' },
                  }}
                  className="dropzone"
                >
                  <div className="text-lg font-medium">
                    <div className="btn btn-sm btn-dark mr-2">
                      <Lucide
                        icon="Plus"
                        className="h-3 w-3 -rotate-90 transform text-white"
                      />
                    </div>
                    파일찾기 또는 드래그 앤 드롭 해주세요.
                  </div>
                  <div className="text-gray-600">
                    <div className="text-xs text-slate-500">
                      &#40;※ JPG, PNG, SVG, PDF, DOC, HWP 최대 3개까지 가능&#41;
                    </div>
                  </div>
                </Dropzone> */}
              </td>
            </tr>
            <tr>
              <td className="w-40 bg-slate-100">내용</td>
              <td colSpan={3}>
                <ClassicEditor
                  value={getValues('contents')}
                  onChange={(value) => setValue('contents', value)}
                />
                {errors?.contents && (
                  <div className="mt-1 text-danger">
                    {errors?.contents.message}
                  </div>
                )}
              </td>
            </tr>
            <tr>
              <td className="w-40 bg-slate-100">노출여부</td>
              <td>
                <div className="flex items-center gap-2">
                  <div className="form-check">
                    <input
                      id="radio-dis-switch-1"
                      className="form-check-input mr-2"
                      type="radio"
                      name="horizontal_radio_button"
                      value="horizontal-check1"
                    />
                    <label
                      className="form-radio-label"
                      htmlFor="radio-dis-switch-1"
                    >
                      Y
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="radio-dis-switch-2"
                      className="form-check-input mr-2"
                      type="radio"
                      name="horizontal_radio_button"
                      value="horizontal-check1"
                    />
                    <label
                      className="form-radio-label"
                      htmlFor="radio-dis-switch-2"
                    >
                      N
                    </label>
                  </div>
                </div>
              </td>
              <td className="w-40 bg-slate-100">고정여부</td>
              <td>
                <div className="flex items-center gap-2">
                  <div className="form-check">
                    <input
                      id="radio-dis-switch-3"
                      className="form-check-input mr-2"
                      type="radio"
                      name="horizontal_radio_button2"
                    />
                    <label
                      className="form-radio-label"
                      htmlFor="radio-dis-switch-3"
                    >
                      Y
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="radio-dis-switch-4"
                      className="form-check-input mr-2"
                      type="radio"
                      name="horizontal_radio_button2"
                    />
                    <label
                      className="form-radio-label"
                      htmlFor="radio-dis-switch-4"
                    >
                      N
                    </label>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </LoadingBox>
      <div className="mt-3 text-center">
        <button
          type="button"
          className="btn mr-2 mb-2 inline-block w-24 bg-white"
          onClick={() => navigate(-1)}
        >
          취소
        </button>
        <button
          className="btn btn-primary mr-2 mb-2 "
          onClick={() => setdeleteConfirm(true)}
        >
          등록 (상단고정 게시글 3개 있을 경우)
        </button>
        <button
          className="btn btn-primary mr-2 mb-2 "
          onClick={() => setRegistBtn(true)}
        >
          등록 (정상등록시)
        </button>
      </div>

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
              <Link to="/system/notice">
                <button
                  type="button"
                  onClick={() => {
                    setRegistBtn(false)
                  }}
                  className="btn btn-primary w-24"
                >
                  확인
                </button>
              </Link>
            </div>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 등록 버튼*/}
      <Dialog
        open={RegistBtn2}
        onClose={() => {
          setRegistBtn2(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setRegistBtn2(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <div className="text-center text-lg font-bold">
              상단 고정 게시글은 최대 3개까지만 가능합니다.
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setRegistBtn2(false)
                }}
                className="btn btn-primary w-24"
              >
                확인
              </button>
            </div>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 컨펌 모달 */}
      <Dialog
        open={deleteConfirm}
        onClose={() => {
          setdeleteConfirm(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">선택 삭제</h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setdeleteConfirm(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <div className="text-center text-lg font-bold">
              고정 게시글은 3개까지 등록 가능합니다.
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setdeleteConfirm(false)
                }}
                className="btn btn-white mr-2 w-24"
              >
                취소
              </button>
              <button
                type="button"
                onClick={() => {
                  setdeleteConfirm(false)
                }}
                className="btn btn-primary w-24"
              >
                확인
              </button>
            </div>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>
    </form>
  )
}
