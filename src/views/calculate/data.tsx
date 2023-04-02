import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Tab } from '@/base-components/Headless'
import { Dialog } from '@/base-components/Headless'
import Lucide from '@/base-components/Lucide'

import DataCheck from './components/DataCheck'
import PayNow from './components/PayNow'

const AccountData = () => {
  // 지금결제 넷가 송금결재 팝업
  const [paymentModal, SetPaymentModal] = useState(false)
  // 기존 정산데이터 확인 팝업
  const [datumModal, SetDatumModal] = useState(false)
  // 기존 정산데이터 확인 팝업 내 total(중복제외) 팝업
  const [totalModal, SetTotalModal] = useState(false)
  // 컨펌 모달
  const [Confirm, setConfirm] = useState(false)

  // 삭제모달
  const [Delete, setDelete] = useState(false)

  // 등록 버튼
  const [RegistBtn, setRegistBtn] = useState(false)

  return (
    <>
      <div className="mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">정산 관리</h2>
      </div>

      <div className="mt-3">
        <Tab.Group>
          <Tab.List className="nav-tabs">
            <Tab className="flex-none">
              <Link to="/calculate/data">
                <button className="block cursor-pointer appearance-none rounded-t-md border border-slate-200 border-b-transparent bg-white px-5 py-2.5 text-base font-bold text-slate-800 dark:border-transparent dark:border-x-darkmode-400 dark:border-t-darkmode-400 dark:border-b-darkmode-600 dark:bg-transparent dark:text-white">
                  정산데이터 변환
                </button>
              </Link>
            </Tab>
            <Tab className="flex-none	">
              <Link to="/calculate/remittance">
                <button className="block cursor-pointer appearance-none rounded-t-md border border-transparent px-5 py-2.5 text-base font-bold text-slate-700 hover:bg-slate-100 dark:border-transparent dark:text-slate-400 dark:hover:border-transparent dark:hover:bg-darkmode-400">
                  입금일/송금일/환율 관리
                </button>
              </Link>
            </Tab>
            <Tab className="flex-none	">
              <Link to="/calculate/tax">
                <button className="block cursor-pointer appearance-none rounded-t-md border border-transparent px-5 py-2.5 text-base font-bold text-slate-700 hover:bg-slate-100 dark:border-transparent dark:text-slate-400 dark:hover:border-transparent dark:hover:bg-darkmode-400">
                  여행사 세금계산서 요청
                </button>
              </Link>
            </Tab>
            <Tab className="flex-none	">
              <Link to="/calculate/settlement">
                <button className="block cursor-pointer appearance-none rounded-t-md border border-transparent px-5 py-2.5 text-base font-bold text-slate-700 hover:bg-slate-100 dark:border-transparent dark:text-slate-400 dark:hover:border-transparent dark:hover:bg-darkmode-400">
                  정산 결재
                </button>
              </Link>
            </Tab>
          </Tab.List>
        </Tab.Group>
      </div>

      <div className="intro-y box p-3">
        <table className="table-bordered table">
          <tbody>
            <tr>
              <td className="bg-slate-100 text-center">정산년월</td>
              <td colSpan={3}>
                <select
                  className="form-select w-52"
                  aria-label="Default select example"
                >
                  <option>202209</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="bg-slate-100 text-center">정산타입</td>
              <td colSpan={3}>
                <div className="mt-2 flex flex-col sm:flex-row">
                  <div className="form-check mr-2">
                    <input
                      id="radio-switch-4"
                      className="form-check-input"
                      type="radio"
                      name="horizontal_radio_button"
                      value="horizontal-radio-chris-evans"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="radio-switch-4"
                    >
                      지금결제
                    </label>
                  </div>
                  <div className="form-check mr-2">
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
                      현지결제
                    </label>
                  </div>
                  <div className="form-check mr-2">
                    <input
                      id="radio-switch-6"
                      className="form-check-input"
                      type="radio"
                      name="horizontal_radio_button"
                      value="horizontal-radio-daniel-craig"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="radio-switch-6"
                    >
                      오버라이딩{' '}
                      <span className="text-xs text-red-500">
                        (CSV로 업로드하세요!)
                      </span>
                    </label>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td rowSpan={2} className="bg-slate-100 text-center">
                회차별 파일 업로드
              </td>
              <td rowSpan={2} className="w-2/4">
                <div className="flex">
                  <p>
                    <label
                      htmlFor="fileadd"
                      className="btn btn-sm btn-dark w-52"
                    >
                      CSV 파일 업로드 (1회차)
                    </label>
                    <input
                      type="file"
                      name="fileadd"
                      id="fileadd"
                      className="hidden"
                      multiple
                    />
                  </p>
                  <div className="ml-5 mt-2">
                    <p>20220123_settle11.CSV</p>
                    <p>20220123_settle12.CSV</p>
                    <p>20220123_settle13.CSV</p>
                    <p>20220123_settle14.CSV</p>
                    <p>20220123_settle15.CSV</p>
                    <p>20220123_settle16.CSV</p>
                  </div>
                </div>
                <div className="mt-3 flex">
                  <p>
                    <label
                      htmlFor="fileadd"
                      className="btn btn-sm btn-primary w-52"
                    >
                      CSV 파일 업로드 (노쇼(no show)
                    </label>
                    <input
                      type="file"
                      name="fileadd"
                      id="fileadd"
                      className="hidden"
                      multiple
                    />
                  </p>
                  <div className="ml-5 mt-2">
                    <p>20220123_settle_noshow.CSV</p>
                  </div>
                </div>
                {/* 정산데이터 확인/저장 후 */}
                <div className="mt-3">
                  <button
                    className="btn btn-sm btn-primary mr-2 mb-2 inline-block"
                    onClick={() => setConfirm(true)}
                  >
                    기존 데이터가 존재합니다. 삭제하시겠습니까?
                  </button>
                  <a className="btn btn-sm btn-dark mb-2" download>
                    데이터 다운로드
                  </a>
                </div>
              </td>
              <td className="w-40 bg-red-700 text-center text-white">
                주의사항
              </td>
              <td>
                <ul className="ml-3">
                  <li className="list-disc text-red-500">
                    CSV로 변환하여 업로드하면 6배 이상 빨라집니다. <br />
                    (오버라이딩은 30배!! csv 3초 vs xlsx 1분!!)
                  </li>
                  <li className="list-disc">
                    csv 변환 저장시 엑셀에서 대여/반납일이 연-월-일로 보이는지
                    다시 한 번 확인해주세요.
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="w-40 bg-blue-700 text-center text-white">
                가이드
              </td>
              <td>
                <ul>
                  <li className="list-disc text-blue-700">
                    하나의 정산타입에 여러 파일을 묶어서 올릴 수 있습니다.
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-3 text-left">
        <button
          className="btn mr-2 mb-2 inline-block bg-blue-600 text-white"
          onClick={() => {
            SetDatumModal(true)
          }}
        >
          기존 정산데이터 확인 (데이터O)
        </button>
        <button
          className="btn mr-2 mb-2 inline-block bg-blue-600 text-white"
          onClick={() => {
            setRegistBtn(true)
          }}
        >
          기존 정산데이터 확인 (데이터X)
        </button>
        <button
          className="btn mr-2 mb-2 bg-sky-500 text-white"
          onClick={() => {
            SetPaymentModal(true)
          }}
        >
          지금결제 넷가 송금결재 (데이터O)
        </button>
        <button
          className="btn mb-2 bg-sky-500 text-white"
          onClick={() => {
            setRegistBtn(true)
          }}
        >
          지금결제 넷가 송금결재 (데이터X)
        </button>
      </div>
      <div className="text-center">
        <button className="btn relative  mr-2 mb-2 inline-block w-24 bg-white">
          취소
        </button>
        <button
          className="btn btn-primary relative mb-2 mr-2"
          onClick={() => setRegistBtn(true)}
        >
          정산데이터 변환 (등록된 데이터X)
        </button>
        <button
          className="btn btn-primary relative  mb-2 "
          onClick={() => {
            SetDatumModal(true)
          }}
        >
          정산데이터 변환 (등록된 데이터O)
        </button>
      </div>

      {/* 지금결제 넷가 송금결재 팝업 */}

      <PayNow open={paymentModal} setOpen={SetPaymentModal} />

      {/* 기존 정산데이터 확인 팝업 */}

      <DataCheck open={datumModal} setOpen={SetDatumModal} />

      {/* 컨펌 모달 */}
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
              삭제 후 데이터 재등록 하시겠습니까?
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
                  setDelete(true)
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
            <div className="text-center text-lg font-bold">삭제되었습니다.</div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setDelete(false), setConfirm(false)
                }}
                className="btn btn-primary w-24"
              >
                확인
              </button>
            </div>
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
              등록된 데이터가 없습니다.
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setRegistBtn(false)
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

export default AccountData
