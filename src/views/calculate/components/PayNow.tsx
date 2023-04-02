import Dialog from '@/base-components/Headless/Dialog'
import Lucide from '@/base-components/Lucide'

interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function PayNow({ open, setOpen }: Props) {
  return (
    <Dialog
      size="xxl"
      open={open}
      onClose={() => {
        setOpen(false)
      }}
    >
       <Dialog.Panel>
       <Dialog.Title>
        <h2 className="mr-auto text-base font-bold">
          지금결제 넷가 송금결재
        </h2>
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
        <p>[렌터카] 2022년 8월 반납 및 1~7월 반납 노쇼 지금결제 넷가 송금</p>
        <p className="mt-3">
          알라모 렌터카 8월 반납 및 1~7월 반납 노쇼에 대한 지금결제 금액 송금
          관련하여 다음과 같이 보고 드리오니, 결재 부탁 드립니다.
          <br />- 다 음 -
        </p>
        <p className="mt-3">1. 8월 반납 이용 건</p>
        <table className="table-bordered table-sm mt-3 table">
          <tbody>
            <tr>
              <td className="w-40 bg-slate-100 text-center font-bold">
                기간
              </td>
              <td>2022년 8월 1일 ~ 2022년 8월 31일 지금결제 이용 건</td>
            </tr>
            <tr>
              <td className="w-40 bg-slate-100 text-center font-bold">
                내용
              </td>
              <td>이용 건수 155건</td>
            </tr>
            <tr>
              <td className="w-40 bg-slate-100 text-center font-bold">
                송금 금액
              </td>
              <td>US$ 98,446.30</td>
            </tr>
            <tr>
              <td className="w-40 bg-slate-100 text-center font-bold">
                송금내역
              </td>
              <td>
                1) US$ 3,446.37 금액은 인보이스 #.30599145, 49 건<br />
                2) US$ 30,653.85 금액은 인보이스 #.#:30599145, 49 건<br />
                3) US$ 36,056.58 금액은 인보이스 #.30680657, 52 건<br />
                4) US$ 28,269.50 금액은 인보이스 #.#:30771788, 53 건
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-5">2. 1~7월 반납 노쇼 건</p>
        <table className="table-bordered table-sm mt-3 table">
          <tbody>
            <tr>
              <td className="w-40 bg-slate-100 text-center font-bold">
                기간
              </td>
              <td>2022년 1월 1일 ~ 2022년 7월 31일 지금결제 노쇼 건</td>
            </tr>
            <tr>
              <td className="w-40 bg-slate-100 text-center font-bold">
                내용
              </td>
              <td>노쇼 건수 53건</td>
            </tr>
            <tr>
              <td className="w-40 bg-slate-100 text-center font-bold">
                송금 금액
              </td>
              <td>$12,819.23</td>
            </tr>
            <tr>
              <td className="w-40 bg-slate-100 text-center font-bold">
                송금내역
              </td>
              <td>
                1) 1~6월 반납 노쇼 : $8,602.80, 44건
                <br />
                2) 7월 반납 노쇼 : $4,216.43, 9건
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-5">3. 총 송금액</p>
        <table className="table-bordered table-sm mt-3 table">
          <tbody>
            <tr>
              <td className="w-40 bg-slate-100 text-center font-bold">
                총 송금 금액
              </td>
              <td>
                <b>$111,265.53</b>
              </td>
            </tr>
            <tr>
              <td className="w-40 bg-slate-100 text-center font-bold">
                송금내역
              </td>
              <td>
                1) 8월 반납 : $98,446.30
                <br />
                2) 1~7월 반납 노쇼 : $12,819.23
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-5">
          4. 8월 반납 이용 인보이스, 1~6월 반납 노쇼 인보이스, 7월 반납 노쇼
          인보이스
        </p>
        </Dialog.Description>
      </Dialog.Panel>
    </Dialog>
  )
}
