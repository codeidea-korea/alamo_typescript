import { useState } from 'react'
import { Link } from 'react-router-dom'

import ClassicEditor from '@/base-components/Ckeditor/ClassicEditor'
import { Dialog } from '@/base-components/Headless'
import Lucide from '@/base-components/Lucide'

const ReservationManageRegist = () => {
  const [daterange, setDaterange] = useState('')
  const [staticBackdropModalPreview, setStaticBackdropModalPreview] =
    useState(false)

  const [editorData, setEditorData] = useState('<p>Content of the editor.</p>')

  // 등록 버튼
  const [RegistBtn, setRegistBtn] = useState(false)

  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">예약안내 등록</h2>
      </div>
      <div className="box mt-3 overflow-x-auto p-3">
        <table className="table-bordered table">
          <tbody>
            <tr>
              <td className="whitespace-nowrap  bg-slate-100 ">브랜드</td>
              <td className="" colSpan={5}>
                <select className="form-select w-56">
                  <option>선택</option>
                  <option>option1</option>
                  <option>option2</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap  bg-slate-100 ">전시 구분</td>
              <td>
                <select className="form-select w-56">
                  <option>선택</option>
                  <option>차량대여요금</option>
                  <option>추가옵션</option>
                  <option>편도이용 요금 및 추가옵션</option>
                  <option>세금 및 기타 부가요금</option>
                </select>
              </td>
              <td className="whitespace-nowrap  bg-slate-100 ">안내 구분</td>
              <td colSpan={3}>
                <select className="form-select w-56">
                  <option>선택</option>
                  <option>option1</option>
                  <option>option2</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap  bg-slate-100 ">국가</td>
              <td>
                <select className="form-select w-56">
                  <option>선택</option>
                  <option>option1</option>
                  <option>option2</option>
                </select>
              </td>
              <td className="whitespace-nowrap  bg-slate-100 ">결제구분</td>
              <td>
                <div className="flex gap-2">
                  <div className="form-check mr-2 gap-2">
                    <input
                      id="radio-dis-switch-3"
                      className="form-check-input"
                      type="radio"
                      name="horizontal_radio_button"
                      value="horizontal-check1"
                    />
                    <label
                      className="form-radio-label"
                      htmlFor="radio-dis-switch-3"
                    >
                      현지결제
                    </label>
                  </div>
                  <div className="form-check mr-2 gap-2">
                    <input
                      id="radio-dis-switch-4"
                      className="form-check-input"
                      type="radio"
                      name="horizontal_radio_button"
                      value="horizontal-check1"
                    />
                    <label
                      className="form-radio-label"
                      htmlFor="radio-dis-switch-4"
                    >
                      지금결제
                    </label>
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap  bg-slate-100 ">노출여부</td>
              <td>
                <div className="flex flex-row gap-2">
                  <div className="form-check mr-2 gap-2">
                    <input
                      id="radio-dis-switch-1"
                      className="form-check-input"
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
                  <div className="form-check mr-2 gap-2">
                    <input
                      id="radio-dis-switch-2"
                      className="form-check-input"
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
            </tr>
            <tr>
              <td className="whitespace-nowrap bg-slate-100 ">내용</td>
              <td colSpan={5}>
                <ClassicEditor value={editorData} onChange={setEditorData} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-3">
        <div className="flex-center flex gap-3">
          <Link to="/cms/reservation">
            <button className="btn w-24 bg-white">취소</button>
          </Link>
          <button
            className="btn btn-primary w-24"
            onClick={() => setRegistBtn(true)}
          >
            등록
          </button>
        </div>
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
              <Link to="/cms/reservation">
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
    </>
  )
}
export default ReservationManageRegist
