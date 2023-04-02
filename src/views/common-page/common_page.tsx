import { useState } from 'react'

const SystemCodeMng = () => {
  const [buttonModalPreview1, memberSearch] = useState(false)
  const [buttonModalPreview2, batchRegist] = useState(false)

  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">페이지공통</h2>
      </div>

      {/* BEGIN: Page Layout */}
      <div className="mt-5 grid grid-cols-12 gap-4">
        <button
          className="btn btn-primary w-24"
          onClick={() => {
            memberSearch(true)
          }}
        >
          회원검색
        </button>
        <button
          className="btn btn-primary w-24"
          onClick={() => {
            batchRegist(true)
          }}
        >
          일괄등록
        </button>
      </div>
      {/* END: Page Layout */}

      {/* BEGIN: Modal 회원검색 */}
      {/* <Modal
        size="modal-xl"
        backdrop="static"
        show={buttonModalPreview1}
        onHidden={() => {
          memberSearch(false)
        }}
      >
        <ModalHeader>
          <h2 className="mr-auto text-base font-medium">회원검색</h2>
          <button
            className="btn btn-rounded-secondary hidden p-1 sm:flex"
            onClick={() => {
              memberSearch(false)
            }}
          >
            <Lucide icon="X" className="h-4 w-4" />
          </button>
        </ModalHeader>
        <ModalBody className="p-0">
          <TabGroup>
            <TabList className="nav-tabs mt-5">
              <Tab className="w-full py-2" tag="button">
                일반회원
              </Tab>
              <Tab className="w-full py-2" tag="button">
                여행사
              </Tab>
            </TabList>
            <TabPanels className="border-l border-r border-b">
              <TabPanel className="grid grid-cols-12 gap-6 p-5 leading-relaxed">
                <div className="intro-y box col-span-12 overflow-auto p-5">
                  <table class="table-bordered table w-full">
                    <tbody>
                      <tr>
                        <td class="w-44 bg-slate-100 text-center font-semibold">
                          브랜드
                        </td>
                        <td colSpan={3}>
                          <select
                            className="form-select"
                            aria-label=".form-select-lg example"
                          >
                            <option>전체</option>
                            <option>브랜드1</option>
                            <option>브랜드2</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td class="w-44 bg-slate-100 text-center font-semibold">
                          가입유형
                        </td>
                        <td>
                          <select
                            className="form-select"
                            aria-label=".form-select-lg example"
                          >
                            <option>선택</option>
                            <option>가입유형1</option>
                            <option>가입유형2</option>
                          </select>
                        </td>
                        <td class="w-44 bg-slate-100 text-center font-semibold">
                          아이디
                        </td>
                        <td>
                          <input
                            id="id"
                            type="text"
                            className="form-control"
                            value=""
                          />
                        </td>
                      </tr>
                      <tr>
                        <td class="w-44 bg-slate-100 text-center font-semibold">
                          한글이름
                        </td>
                        <td>
                          <input
                            id="name_kr"
                            type="text"
                            className="form-control"
                            value=""
                          />
                        </td>
                        <td class="w-44 bg-slate-100 text-center font-semibold">
                          영문 성/이름
                        </td>
                        <td>
                          <input
                            id="name_en"
                            type="text"
                            className="form-control"
                            value=""
                          />
                        </td>
                      </tr>
                      <tr>
                        <td class="w-44 bg-slate-100 text-center font-semibold">
                          휴대폰번호
                        </td>
                        <td>
                          <input
                            id="phone"
                            type="text"
                            className="form-control"
                            value=""
                          />
                        </td>
                        <td class="w-44 bg-slate-100 text-center font-semibold">
                          이메일
                        </td>
                        <td>
                          <input
                            id="email"
                            type="email"
                            className="form-control"
                            value=""
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="mt-5 text-center">
                    <button
                      type="button"
                      className="btn btn-ouline-secondary mr-2 w-24"
                    >
                      초기화
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        memberSearch(false)
                      }}
                      className="btn btn-primary w-24"
                    >
                      조회
                    </button>
                  </div>
                </div>
                <div className="intro-y box col-span-12 mt-5 overflow-auto p-5">
                  <div className="overflow-x-auto">
                    <table className="table whitespace-nowrap">
                      <thead className="table-dark text-center">
                        <tr>
                          <th>번호</th>
                          <th>가입유형</th>
                          <th>아이디</th>
                          <th>한글이름</th>
                          <th>영문성</th>
                          <th>영문이름</th>
                          <th>휴대폰번호</th>
                          <th>이메일</th>
                        </tr>
                      </thead>
                      <tbody class="text-center">
                        <tr className="link">
                          <td>99</td>
                          <td>자사회원</td>
                          <td>abc1</td>
                          <td>홍길동</td>
                          <td>HONG</td>
                          <td>GILDONG</td>
                          <td>010-0000-0000</td>
                          <td>abc@email.com</td>
                        </tr>
                        <tr className="link">
                          <td>99</td>
                          <td>자사회원</td>
                          <td>abc1</td>
                          <td>홍길동</td>
                          <td>HONG</td>
                          <td>GILDONG</td>
                          <td>010-0000-0000</td>
                          <td>abc@email.com</td>
                        </tr>
                        <tr className="link">
                          <td>99</td>
                          <td>자사회원</td>
                          <td>abc1</td>
                          <td>홍길동</td>
                          <td>HONG</td>
                          <td>GILDONG</td>
                          <td>010-0000-0000</td>
                          <td>abc@email.com</td>
                        </tr>
                        <tr className="link">
                          <td>99</td>
                          <td>자사회원</td>
                          <td>abc1</td>
                          <td>홍길동</td>
                          <td>HONG</td>
                          <td>GILDONG</td>
                          <td>010-0000-0000</td>
                          <td>abc@email.com</td>
                        </tr>
                        <tr className="link">
                          <td>99</td>
                          <td>자사회원</td>
                          <td>abc1</td>
                          <td>홍길동</td>
                          <td>HONG</td>
                          <td>GILDONG</td>
                          <td>010-0000-0000</td>
                          <td>abc@email.com</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="intro-y col-span-12">
                  <ul class="pagination justify-center">
                    <li class="page-item">
                      <a class="page-link mt-1" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          icon-name="chevron-left"
                          data-lucide="chevron-left"
                          class="lucide lucide-chevron-left h-4 w-4"
                        >
                          <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                      </a>
                    </li>
                    <li class="page-item active">
                      <a class="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link mt-1" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          icon-name="chevron-right"
                          data-lucide="chevron-right"
                          class="lucide lucide-chevron-right h-4 w-4"
                        >
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </TabPanel>
              <TabPanel className="grid grid-cols-12 gap-6 p-5 leading-relaxed">
                <div className="intro-y box col-span-12 overflow-auto p-5">
                  <table class="table-bordered table w-full">
                    <tbody>
                      <tr>
                        <td class="w-44 bg-slate-100 text-center font-semibold">
                          여행사
                        </td>
                        <td colSpan={3}>
                          <select
                            className="form-select"
                            aria-label=".form-select-lg example"
                          >
                            <option>전체</option>
                            <option>여행사1</option>
                            <option>여행사2</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td class="w-44 bg-slate-100 text-center font-semibold">
                          부서명
                        </td>
                        <td>
                          <select
                            className="form-select"
                            aria-label=".form-select-lg example"
                          >
                            <option>선택</option>
                            <option>부서명1</option>
                            <option>부서명2</option>
                          </select>
                        </td>
                        <td class="w-44 bg-slate-100 text-center font-semibold">
                          세금계산서용 이메일
                        </td>
                        <td>
                          <input
                            id="tax_email"
                            type="text"
                            className="form-control"
                            value=""
                          />
                        </td>
                      </tr>
                      <tr>
                        <td class="w-44 bg-slate-100 text-center font-semibold">
                          담당자명
                        </td>
                        <td>
                          <input
                            id="manager_name"
                            type="text"
                            className="form-control"
                            value=""
                          />
                        </td>
                        <td class="w-44 bg-slate-100 text-center font-semibold">
                          담당자 아이디
                        </td>
                        <td>
                          <input
                            id="namager_id"
                            type="text"
                            className="form-control"
                            value=""
                          />
                        </td>
                      </tr>
                      <tr>
                        <td class="w-44 bg-slate-100 text-center font-semibold">
                          담당자 휴대폰번호
                        </td>
                        <td>
                          <input
                            id="manager_phone"
                            type="text"
                            className="form-control"
                            value=""
                          />
                        </td>
                        <td class="w-44 bg-slate-100 text-center font-semibold">
                          담당자 이메일
                        </td>
                        <td>
                          <input
                            id="manager_email"
                            type="email"
                            className="form-control"
                            value=""
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="mt-5 text-center">
                    <button
                      type="button"
                      className="btn btn-ouline-secondary mr-2 w-24"
                    >
                      초기화
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        memberSearch(false)
                      }}
                      className="btn btn-primary w-24"
                    >
                      조회
                    </button>
                  </div>
                </div>
                <div className="intro-y box col-span-12 mt-5 overflow-auto p-5">
                  <div className="overflow-x-auto">
                    <table className="table whitespace-nowrap">
                      <thead className="table-dark text-center">
                        <tr>
                          <th>번호</th>
                          <th>사업자 번호</th>
                          <th>여행사</th>
                          <th>부서명</th>
                          <th>세금계산서용 이메일</th>
                          <th>아이디</th>
                          <th>담당자명</th>
                          <th>담당자 휴대폰번호</th>
                          <th>담당자 이메일</th>
                        </tr>
                      </thead>
                      <tbody class="text-center">
                        <tr className="link">
                          <td>99</td>
                          <td>123-33-11111</td>
                          <td>정성투어</td>
                          <td>마케팅팀</td>
                          <td>abc@email.com</td>
                          <td>abc1</td>
                          <td>홍길동</td>
                          <td>010-0000-0000</td>
                          <td>abc@email.com</td>
                        </tr>
                        <tr className="link">
                          <td>99</td>
                          <td>123-33-11111</td>
                          <td>정성투어</td>
                          <td>마케팅팀</td>
                          <td>abc@email.com</td>
                          <td>abc1</td>
                          <td>홍길동</td>
                          <td>010-0000-0000</td>
                          <td>abc@email.com</td>
                        </tr>
                        <tr className="link">
                          <td>99</td>
                          <td>123-33-11111</td>
                          <td>정성투어</td>
                          <td>마케팅팀</td>
                          <td>abc@email.com</td>
                          <td>abc1</td>
                          <td>홍길동</td>
                          <td>010-0000-0000</td>
                          <td>abc@email.com</td>
                        </tr>
                        <tr className="link">
                          <td>99</td>
                          <td>123-33-11111</td>
                          <td>정성투어</td>
                          <td>마케팅팀</td>
                          <td>abc@email.com</td>
                          <td>abc1</td>
                          <td>홍길동</td>
                          <td>010-0000-0000</td>
                          <td>abc@email.com</td>
                        </tr>
                        <tr className="link">
                          <td>99</td>
                          <td>123-33-11111</td>
                          <td>정성투어</td>
                          <td>마케팅팀</td>
                          <td>abc@email.com</td>
                          <td>abc1</td>
                          <td>홍길동</td>
                          <td>010-0000-0000</td>
                          <td>abc@email.com</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="intro-y col-span-12">
                  <ul class="pagination justify-center">
                    <li class="page-item">
                      <a class="page-link mt-1" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          icon-name="chevron-left"
                          data-lucide="chevron-left"
                          class="lucide lucide-chevron-left h-4 w-4"
                        >
                          <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                      </a>
                    </li>
                    <li class="page-item active">
                      <a class="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link mt-1" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          icon-name="chevron-right"
                          data-lucide="chevron-right"
                          class="lucide lucide-chevron-right h-4 w-4"
                        >
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </ModalBody>
      </Modal> */}
      {/* END: Modal 회원검색 */}

      {/* BEGIN: Modal 일괄등록 */}
      {/* <Modal
        size="modal-xl"
        backdrop="static"
        show={buttonModalPreview2}
        onHidden={() => {
          batchRegist(false)
        }}
      >
        <ModalHeader>
          <h2 className="mr-auto text-base font-medium">일괄 등록</h2>
          <button
            className="btn btn-rounded-secondary hidden p-1 sm:flex"
            onClick={() => {
              batchRegist(false)
            }}
          >
            <Lucide icon="X" className="h-4 w-4" />
          </button>
        </ModalHeader>
        <ModalBody className="p-0">
          <div className="p-5">
            <div className="intro-y box mt-5 p-5">
              <div className="border-b border-slate-200/60 pb-5">
                <div className="font-bold">엑셀 업로드</div>
                <div className="filebox mt-2 flex">
                  <div className="left_icon btn-secondary flex items-center border px-3 py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      icon-name="file"
                      data-lucide="file"
                      class="lucide lucide-file h-4 w-4"
                    >
                      <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                    </svg>
                  </div>
                  <input
                    id="fileName"
                    className="upload-name text_line flex-1 truncate border border-secondary p-2 text-slate-500"
                    value="첨부파일"
                    placeholder=""
                    readOnly=""
                  />
                  <label
                    htmlFor="file"
                    className="file_search btn-secondary cursor-pointer border p-2"
                  >
                    파일선택
                  </label>
                  <input type="file" id="file" />
                </div>
                <div className="mt-2 text-xs">
                  <p>
                    * 대량등록의 경우 정상 등록 가능 확인이{' '}
                    <span className="text-danger">최대 30분 시간이</span>{' '}
                    소요됩니다.
                  </p>
                  <p>* 등록가능한 확장자 : xlsx, csv, xls</p>
                </div>
              </div>
              <div className="pt-5">
                <button type="button" className="btn btn-secondary w-full">
                  포멧 다운로드
                </button>
                <div className="mt-2 text-xs">
                  <p>* 포멧에 맞춰서 파일을 업로드 해주세요</p>
                  <p>
                    * 최대 <span className="text-danger">3,000건</span>까지
                    가능합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 pb-8 text-center">
            <button
              type="button"
              className="btn btn-ouline-secondary mr-2 w-24"
            >
              취소
            </button>
            <button
              type="button"
              onClick={() => {
                batchRegist(false)
              }}
              className="btn btn-primary w-24"
            >
              등록
            </button>
          </div>
        </ModalBody>
      </Modal> */}
      {/* END: Modal 일괄등록 */}
    </>
  )
}

export default SystemCodeMng
