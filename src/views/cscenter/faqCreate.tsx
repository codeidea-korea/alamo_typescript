import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { zodResolver } from '@hookform/resolvers/zod'
import { number, z } from 'zod'

import ClassicEditor from '@/base-components/Ckeditor/ClassicEditor'

import CommonModal from '../modal_del/common-modal'

const faqInput = z.object({
  // title: z.string().min(1, { message: '제목을 입력해주세요.' }),
  contents: z.string().min(1, { message: '내용을 입력해주세요.' }),
  // visabled: z.boolean(),
  // orders: z.number().or(z.null()),
})

type Input = z.infer<typeof faqInput>

const FaqCreate = () => {
  const {
    register,
    watch,
    setValue,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(faqInput),
    defaultValues: {
      // title: '',
      contents: '',
      // visabled: true,
      // orders: null,
    },
  })

  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data)
  }

  // 등록 버튼
  const [RegistBtn, setRegistBtn] = useState(false)


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">FAQ 등록</h2>
      </div>

      {/* <div>
        <pre>{JSON.stringify(errors, null, 2)}</pre>
      </div> */}

      <div className="intro-y box mt-5 p-5">
        <div className="overflow-x-auto">
          <table className="table-bordered table whitespace-nowrap">
            <tbody>
              <tr>
                <td className="bg-slate-100 text-center">브랜드</td>
                <td colSpan={5}>
                  <select
                    className="form-select w-40 sm:mr-2"
                    aria-label="Default select example"
                  >
                    <option>전체</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="bg-slate-100 text-center">FAQ 구분</td>
                <td>
                  <select
                    className="form-select sm:mr-2"
                    aria-label="Default select example"
                  >
                    <option>요금제 문의</option>
                  </select>
                </td>
                <td className="bg-slate-100 text-center">노출순위</td>
                <td>
                  <input
                    id="regular-form-1"
                    type="number"
                    className="form-control"
                  />
                </td>
                <td className="bg-slate-100 text-center">노출여부</td>
                <td>
                  <div className="mt-2 flex flex-col sm:flex-row">
                    <div className="form-check mr-2">
                      <input
                        id="radio-switch-4"
                        className="form-check-input"
                        type="radio"
                        name="horizontal_radio_button"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="radio-switch-4"
                      >
                        Y
                      </label>
                    </div>
                    <div className="form-check mr-2 mt-2 sm:mt-0">
                      <input
                        id="radio-switch-5"
                        className="form-check-input"
                        type="radio"
                        name="horizontal_radio_button"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="radio-switch-5"
                      >
                        N
                      </label>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="bg-slate-100 text-center">제목</td>
                <td colSpan={5}>
                  <input
                    id="regular-form-1"
                    type="text"
                    className="form-control w-3/4"
                  />
                </td>
              </tr>
              <tr>
                <td className="bg-slate-100 text-center">답변</td>
                <td colSpan={5}>
                  <ClassicEditor
                    className="border border-danger"
                    onChange={(value) => {
                      setValue('contents', value)
                      trigger('contents')
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-6 text-center">
              <Link to="/cscenter/faq">
                <button
                  type="button"
                  className="btn btn-outline-secondary mr-2 mb-2 inline-block w-24"
                >
                  취소
                </button>
              </Link>
            <button
              className="btn btn-primary mb-2 w-24"
              onClick={() => 
                {
                  setRegistBtn(true)
                }
              }
            >
              등록
            </button>
          </div>
        </div>
      </div>
      <CommonModal
        RegistBtn2={RegistBtn}
        setRegistBtn2={setRegistBtn} //등록이동
        confirmUrl={'/cscenter/faq'}
      />
    </form>
  )
}
export default FaqCreate
