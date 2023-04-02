import { useReducer, useState } from 'react'

import AuthorityControl from './components/AuthorityControl'
import AuthorityDetailChange from './components/AuthorityDetailChange'
import AuthorityList from './components/AuthorityList'

export default function SystemAuthority() {
  const [createAuthDialog, setCreateAuthDialog] = useState(false)
  const [changeAuthDialog, setChangeAuthDialog] = useState(false)
  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">권한관리</h2>
      </div>

      <AuthoriSearch />

      <AuthorityList
        setOpen={setCreateAuthDialog}
        setOpen2={setChangeAuthDialog}
      />

      <AuthorityControl open={createAuthDialog} setOpen={setCreateAuthDialog} />
      <AuthorityDetailChange
        open={changeAuthDialog}
        setOpen={setChangeAuthDialog}
      />
    </>
  )
}

function AuthoriSearch() {
  return (
    <>
      <div className="intro-y box mt-3 p-3">
        <table className="table-bordered table w-full">
          <tbody>
            <tr>
              <td className="bg-slate-100 text-center font-semibold">소속팀</td>
              <td>
                <select
                  className="form-select"
                  aria-label=".form-select-lg example"
                >
                  <option>전체</option>
                  <option>소속팀1</option>
                </select>
              </td>
              <td className="bg-slate-100 text-center font-semibold">직위</td>
              <td>
                <select
                  className="form-select"
                  aria-label=".form-select-lg example"
                >
                  <option>전체</option>
                  <option>직위1</option>
                </select>
              </td>
              <td className="bg-slate-100 text-center font-semibold">이름</td>
              <td>
                <input id="name" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <td className="bg-slate-100 text-center font-semibold">
                휴대폰번호
              </td>
              <td>
                <input id="phone" type="number" className="form-control" />
              </td>
              <td className="bg-slate-100 text-center font-semibold">이메일</td>
              <td>
                <input id="email" type="email" className="form-control" />
              </td>
              <td className="bg-slate-100 text-center font-semibold">아이디</td>
              <td>
                <input id="id" type="text" className="form-control" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-3 text-center">
        <button className="btn btn-outline-secondary ml-auto mr-3 w-20 bg-white">
          초기화
        </button>
        <button className="btn btn-primary ml-auto mr-3 w-20">조회</button>
      </div>
    </>
  )
}
