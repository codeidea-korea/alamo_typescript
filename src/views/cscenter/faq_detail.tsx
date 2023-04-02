import { useState } from 'react'

import ClassicEditor from '@/base-components/Ckeditor/ClassicEditor'

// import { ClassicEditor } from '@/base-components'

const FaqDetail = () => {
  const [editorData, setEditorData] = useState('<p>Content of the editor.</p>')
  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">FAQ 상세/수정</h2>
      </div>

      <div className="intro-y box mt-3 p-3">
        <div className="overflow-x-auto">
          <table className="table-bordered table whitespace-nowrap">
            <tbody>
              <tr>
                <td className="bg-slate-100 text-center">브랜드</td>
                <td colSpan={5}>
                  <select
                    className="form-select mr-2 w-52"
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
                    className="form-select w-52"
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
                    placeholder=""
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
                        value="horizontal-radio-chris-evans"
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
                        value="horizontal-radio-liam-neeson"
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
                <td colSpan={3}>
                  <input
                    id="regular-form-1"
                    type="text"
                    className="form-control"
                    placeholder=""
                  />
                </td>
                <td className="bg-slate-100 text-center">조회수</td>
                <td>323</td>
              </tr>
              <tr>
                <td className="bg-slate-100 text-center">답변</td>
                <td colSpan={5}>
                  <ClassicEditor value={editorData} onChange={setEditorData} />
                </td>
              </tr>
              <tr>
                <td className="bg-slate-100 text-center">최종수정자</td>
                <td colSpan={2}>홍길동</td>
                <td className="bg-slate-100 text-center">최종수정일시</td>
                <td colSpan={2}>2022-11-11 11:11:11</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-3 text-center">
        <button className="btn btn-outline-danger mr-2 mb-2 inline-block w-24 bg-white">
          삭제
        </button>
        <button className="btn btn-outline-secondary mr-2 mb-2 inline-block w-24 bg-white">
          취소
        </button>
        <button className="btn btn-primary mb-2 w-24">수정</button>
      </div>
    </>
  )
}
export default FaqDetail
