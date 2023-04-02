import React from 'react'

import { Dialog } from '@/base-components/Headless'

interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CreateReservationDialog({ open, setOpen }: Props) {
  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false)
      }}
    >
      <Dialog.Panel>
        <Dialog.Description className="px-5 py-10">
          <div className="text-center">
            <div className="mb-5">
              <span className="mr-1 font-bold text-danger">[152,983원]</span>
              차감 후
              <span className="mr-1 ml-2 font-bold text-primary">
                [152,983원]
              </span>
              환불예정이에요. <br />
              예약을 취소하시겠습니까?
            </div>
            <div className="flex-center flex gap-5">
              <button type="button" className="btn btn-secondary w-24">
                취소
              </button>
              <button type="button" className="btn btn-primary w-24">
                확인
              </button>
            </div>
          </div>
        </Dialog.Description>
      </Dialog.Panel>
    </Dialog>

    
    /* <Modal show={showmemberReserve} onHidden={() => {
                setShowmemberReserve(false);
            }} className="reserve-member-pop"
            >
                <ModalHeader>
                    <h2 className="font-medium text-base mr-auto">
                        회원 예약 정보
                    </h2>
                    <button
                        className="btn btn-rounded-secondary hidden sm:flex p-1"
                        onClick={() => {
                            setShowmemberReserve(false);
                        }}
                    >
                        <Lucide icon="X" className="w-4 h-4" />
                    </button>
                </ModalHeader>
                <ModalBody>
                    <div className="">
                        <div className="overflow-x-auto">
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td className="bg-slate-100  whitespace-nowrap w-40">브랜드</td>
                                        <td className="w-per50">
                                            알라모
                                        </td>
                                        <td className="bg-slate-100  whitespace-nowrap w-40">아이디</td>
                                        <td className="w-per50">
                                            Akd
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="bg-slate-100  whitespace-nowrap w-40">한글 이름</td>
                                        <td className="w-per50">
                                            홍길동
                                        </td>
                                        <td className="bg-slate-100  whitespace-nowrap w-40">영문 이름</td>
                                        <td className="w-per50">
                                            Gildong hong
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="bg-slate-100  whitespace-nowrap w-40">이메일</td>
                                        <td className="w-per50">
                                            A@a.co.kr
                                        </td>
                                        <td className="bg-slate-100  whitespace-nowrap w-40">휴대폰번호</td>
                                        <td className="w-per50">
                                            010-111-111
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="bg-slate-100  whitespace-nowrap w-40">예약횟수(렌티드 횟수)</td>
                                        <td colSpan={3}>
                                            3(1)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="bg-slate-100  whitespace-nowrap w-40">뉴스레터 수신여부</td>
                                        <td colSpan={3}>
                                            Y
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="bg-slate-100  whitespace-nowrap w-40">항공사</td>
                                        <td className="w-per50">
                                            대한항공
                                        </td>
                                        <td className="bg-slate-100  whitespace-nowrap w-40">멤버십번호</td>
                                        <td className="w-per50">
                                            abdd111
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="flex gap-5 flex-center mt-10">
                            <button
                                type="button"
                                onClick={() => {
                                    setShowmemberReserve(false);
                                }}
                                className="btn btn-primary w-24"
                            >
                                확인
                            </button>

                        </div>
                    </div>
                </ModalBody>
            </Modal>
            <Modal show={showCalHistory} onHidden={() => {
                setShowCalHistory(false);
            }} className="reserve-member-pop"
            >
                <ModalHeader>
                    <h2 className="font-medium text-base mr-auto">
                        회원 예약 정보
                    </h2>
                    <button
                        className="btn btn-rounded-secondary hidden sm:flex p-1"
                        onClick={() => {
                            setShowCalHistory(false);
                        }}
                    >
                        <Lucide icon="X" className="w-4 h-4" />
                    </button>
                </ModalHeader>
                <ModalBody>
                    <div className="">
                        <div className="box overflow-x-auto">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th className="bg-slate-100  whitespace-nowrap w-40">구분</th>
                                        <th className="bg-slate-100  whitespace-nowrap w-40">판매가</th>
                                        <th className="bg-slate-100  whitespace-nowrap w-40">넷가</th>
                                        <th className="bg-slate-100  whitespace-nowrap w-40">커미션</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="bg-slate-100  whitespace-nowrap w-40">현지결제 20220901</td>
                                        <td>103,000</td>
                                        <td>103,000</td>
                                        <td>103,000</td>
                                    </tr>
                                    <tr>
                                        <td className="bg-slate-100  whitespace-nowrap w-40">오버라이딩 20220901</td>
                                        <td>103,000</td>
                                        <td>103,000</td>
                                        <td>103,000</td>
                                    </tr>
                                    <tr>
                                        <td className="bg-slate-100  whitespace-nowrap w-40">합계</td>
                                        <td>103,000</td>
                                        <td>103,000</td>
                                        <td>103,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="flex gap-5 flex-center mt-10">
                            <button
                                type="button"
                                onClick={() => {
                                    setShowCalHistory(false);
                                }}
                                className="btn btn-primary w-24"
                            >
                                확인
                            </button>

                        </div>
                    </div>
                </ModalBody>
            </Modal>
            <Modal show={showTotalInform} onHidden={() => {
                setShowTotalInform(false);
            }} className="reserve-member-pop"
            >
                <ModalHeader>
                    <h2 className="font-medium text-base mr-auto">
                        합산정보
                    </h2>
                    <button
                        className="btn btn-rounded-secondary hidden sm:flex p-1"
                        onClick={() => {
                            setShowTotalInform(false);
                        }}
                    >
                        <Lucide icon="X" className="w-4 h-4" />
                    </button>
                </ModalHeader>
                <ModalBody>
                    <div className="">
                        <div className="box overflow-x-auto">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th className="bg-slate-100  whitespace-nowrap w-40">구분</th>
                                        <th className="bg-slate-100  whitespace-nowrap w-40">건수</th>
                                        <th className="bg-slate-100  whitespace-nowrap w-40">USD</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>확정</td>
                                        <td>422</td>
                                        <td>193,03.00</td>
                                    </tr>
                                    <tr>
                                        <td>취소</td>
                                        <td>2</td>
                                        <td>193,03.00</td>
                                    </tr>
                                    <tr>
                                        <td>Rented</td>
                                        <td>4</td>
                                        <td>193,03.00</td>
                                    </tr>
                                    <tr>
                                        <td>Cancelled</td>
                                        <td>0</td>
                                        <td>193,03.00</td>
                                    </tr>
                                    <tr>
                                        <td>No Show</td>
                                        <td>2</td>
                                        <td>193,03.00</td>
                                    </tr>
                                    <tr>
                                        <td>미확인</td>
                                        <td>2</td>
                                        <td>193,03.00</td>
                                    </tr>
                                    <tr>
                                        <td className="bg-slate-100  whitespace-nowrap font-bold">합계</td>
                                        <td className="bg-slate-100  whitespace-nowrap font-bold">522</td>
                                        <td className="bg-slate-100  whitespace-nowrap font-bold">193,03.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="flex gap-5 flex-center mt-10">
                            <button
                                type="button"
                                onClick={() => {
                                    setShowTotalInform(false);
                                }}
                                className="btn btn-primary w-24"
                            >
                                확인
                            </button>

                        </div>
                    </div>
                </ModalBody>
            </Modal> */
  )
}
