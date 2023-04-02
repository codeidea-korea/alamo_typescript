import Dialog from '@/base-components/Headless/Dialog'
import Lucide from '@/base-components/Lucide'

interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function PayNow2({ open, setOpen }: Props) {
  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false)
      }}
    >
      <Dialog.Panel>
        <Dialog.Title>
          <h2 className="mr-auto text-base font-bold">
            중복예약번호/정산코드
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
          <table className="table-bordered table-sm table">
            <tbody className="text-center">
              <tr className="bg-slate-100">
                <td>정산코드</td>
                <td>예약번호(RES)</td>
              </tr>
              <tr className="bg-slate-300">
                <td>20220801</td>
                <td>10293758329</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-6 text-center">
            <button
              className="btn btn-primary mb-2 w-24"
              onClick={() => {
                setOpen(false)
              }}
            >
              확인
            </button>
          </div>
        </Dialog.Description>
      </Dialog.Panel>
    </Dialog>
  )
}
