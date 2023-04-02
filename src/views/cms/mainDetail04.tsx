import { useEffect, useRef } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Dialog } from '@/base-components/Headless'
import Litepicker from '@/base-components/Litepicker'
import Lucide from '@/base-components/Lucide'

import bannerImg3 from '@/assets/images/profile-12.jpg'
// import {
//   Litepicker,
//   Lucide,
//   Modal,
//   ModalBody,
//   Tab,
//   TabGroup,
//   TabList,
//   TabPanel,
//   TabPanels,
// } from '@/base-components'
import bannerImg from '@/assets/images/profile-14.jpg'
import bannerImg2 from '@/assets/images/profile-15.jpg'

import { Tab } from '../../base-components/Headless'
import DetailTable01 from './DetailTable01'
import DetailTable02 from './DetailTable02'
import DetailTable03 from './DetailTable03'
import DetailTable04 from './DetailTable04'
import DetailTable05 from './DetailTable05'

const MainDetail04 = () => {
  // 순서변경'
  const [containers, setContainers] = useState([
    { id: 1, content: <DetailTable01 />, active: true },
    { id: 2, content: <DetailTable02 />, active: false },
    { id: 3, content: <DetailTable03 />, active: false },
  ])

  const handleUpClick = (index: number) => {
    if (index > 0) {
      const newContainers = [...containers]
      const current = newContainers[index]
      const prev = newContainers[index - 1]
      newContainers[index] = prev
      newContainers[index - 1] = current
      setContainers(newContainers)
    }
  }

  const handleDownClick = (index: number) => {
    if (index < containers.length - 1) {
      const newContainers = [...containers]
      const current = newContainers[index]
      const next = newContainers[index + 1]
      newContainers[index] = next
      newContainers[index + 1] = current
      setContainers(newContainers)
    }
  }

  const handleMinusClick = () => {
    if (containers.length > 3) {
      setContainers(containers.slice(0, -1))
    }
  }

  const handlePlusClick = () => {
    if (containers.length < 6) {
      setContainers([
        ...containers,
        {
          id: containers.length + 1,
          content: <DetailTable05 />,
          active: false,
        },
      ])
    }
  }

  const [daterange, setDaterange] = useState('')
  const [staticBackdropModalPreview, setStaticBackdropModalPreview] =
    useState(false)

  // 컨펌 모달
  const [Confirm, setConfirm] = useState(false)
  const [Confirm2, setConfirm2] = useState(false)
  const [Confirm3, setConfirm3] = useState(false)
  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">메인 상세/수정</h2>
      </div>

      <Tab.Group>
        <div className="box mt-3 overflow-x-auto p-3">
          <table className="table-bordered table">
            <tbody>
              <tr>
                <td className="whitespace-nowrap  bg-slate-100">브랜드</td>
                <td className="">
                  <select
                    className="form-select w-56"
                    aria-label=".form-select-sm example"
                  >
                    <option>전체</option>
                    <option>option1</option>
                    <option>option2</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap bg-slate-100 ">전시영역</td>
                <td className="main-banner-tab">
                  <Tab.List className="flex flex-row border-0">
                    <Link to="/cms/main/detail">
                      <Tab
                        className="mr-2 flex items-center gap-1"
                        tag="button"
                      >
                        <input
                          id="tab01"
                          className="form-check-input"
                          type="radio"
                          name="tab"
                        />
                        <label className="form-radio-label" htmlFor="tab01">
                          메인 비주얼
                        </label>
                      </Tab>
                    </Link>
                    <Link to="/cms/main/detail02">
                      <Tab
                        className="mr-2 flex items-center gap-1"
                        tag="button"
                      >
                        <input
                          id="tab02"
                          className="form-check-input"
                          type="radio"
                          name="tab"
                        />
                        <label className="form-radio-label" htmlFor="tab02">
                          메인 퀵메뉴
                        </label>
                      </Tab>
                    </Link>
                    <Link to="/cms/main/detail03">
                      <Tab
                        className="mr-2 flex items-center gap-1"
                        tag="button"
                      >
                        <input
                          id="tab03"
                          className="form-check-input"
                          type="radio"
                          name="tab"
                        />
                        <label className="form-radio-label" htmlFor="tab03">
                          메인 띠배너
                        </label>
                      </Tab>
                    </Link>
                    <Link to="/cms/main/detail04">
                      <Tab
                        className="mr-2 flex items-center gap-1"
                        tag="button"
                      >
                        <input
                          id="tab04"
                          className="form-check-input"
                          type="radio"
                          name="tab"
                          defaultChecked
                        />
                        <label className="form-radio-label" htmlFor="tab04">
                          메인 카드배너
                        </label>
                      </Tab>
                    </Link>
                  </Tab.List>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap bg-slate-100 ">노출영역</td>
                <td>
                  <div className="flex flex-row gap-2">
                    <div className="form-check gap-2">
                      <input
                        id="radio-tab-switch-1"
                        className="form-check-input"
                        type="radio"
                        name="horizontal_radio_button"
                        value="horizontal-check1"
                        defaultChecked
                      />
                      <label
                        className="form-radio-label"
                        htmlFor="radio-tab-switch-1"
                      >
                        Y
                      </label>
                    </div>
                    <div className="form-check gap-2">
                      <input
                        id="radio-tab-switch-2"
                        className="form-check-input"
                        type="radio"
                        name="horizontal_radio_button"
                        value="horizontal-check1"
                      />
                      <label
                        className="form-radio-label"
                        htmlFor="radio-tab-switch-2"
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

        <Tab.Panels className="">
          <Tab.Panel className="leading-relaxed">
            <div className="box mt-6 ">
              <div className="border-slate-200/6 space-between flex border-b p-3">
                <h2 className="mr-auto text-base font-medium">
                  배너 목록 (메인 카드배너)
                </h2>
              </div>

              {containers.map((container, index) => (
                <div
                  key={container.id}
                  className={`container ${container.active ? 'active' : ''}`}
                >
                  <div className="mt-5 ml-5">
                    <button
                      className={`btn btn-warning up mr-2 ${
                        index === 0 ? 'disabled' : ''
                      }`}
                      disabled={index === 0}
                      onClick={() => handleUpClick(index)}
                    >
                      <Lucide icon="ChevronUp" className="h-4 w-4"></Lucide>
                    </button>
                    <button
                      className={`btn btn-warning down ${
                        index === containers.length - 1 ? 'disabled' : ''
                      }`}
                      disabled={index === containers.length - 1}
                      onClick={() => handleDownClick(index)}
                    >
                      <Lucide icon="ChevronDown" className="h-4 w-4"></Lucide>
                    </button>
                  </div>
                  {container.content}
                </div>
              ))}
              <div className="container p-5">
                <div>
                  <button
                    className="btn btn-danger minus mr-2"
                    disabled={containers.length <= 3} // 3개 이하일 때 비활성화
                    onClick={handleMinusClick}
                  >
                    <Lucide icon="Minus" className="h-4 w-4"></Lucide>
                  </button>
                  <button
                    className="btn btn-success plus"
                    disabled={containers.length >= 6} // 6개 이상일 때 비활성화
                    onClick={handlePlusClick}
                  >
                    <Lucide icon="Plus" className="h-4 w-4"></Lucide>
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex-center flex gap-2">
                <Link to="/cms/main">
                  <button type="button" className="btn w-24 bg-white">
                    취소
                  </button>
                </Link>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setConfirm2(true)}
                >
                  수정 (모두 미노출일 때)
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setConfirm(true)}
                >
                  수정 (노출 하나라도 있을 때)
                </button>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      {/* 컨펌 모달 */}
      <Dialog
        open={Confirm}
        onClose={() => {
          setConfirm(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
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
              해당 게시물을 노출하시겠습니까?
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
                  setConfirm3(true)
                }}
                className="btn btn-primary w-24"
              >
                확인
              </button>
            </div>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      <Dialog
        open={Confirm3}
        onClose={() => {
          setConfirm3(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setConfirm3(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <div className="text-center text-lg font-bold">
              정상적으로 노출되었습니다
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <Link to="/cms/main">
                <button type="button" className="btn btn-primary w-24">
                  확인
                </button>
              </Link>
            </div>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      <Dialog
        open={Confirm2}
        onClose={() => {
          setConfirm2(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setConfirm2(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <div className="text-center text-lg font-bold">
              최소 1개 노출되어야 합니다.
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setConfirm2(false)
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
export default MainDetail04
