import { useState } from 'react'
import { Link } from 'react-router-dom'

import CodeGroupList from './components/CodeGroupList'
import CodeTableList from './components/CodeTableList'
import ControlGroupCodeDialog from './components/ControlGroupCodeDialog'
import GroupCodeDetail from './components/GroupCodeDetail'
import CommonCodeRegist from './components/CommoncodeRegist'
import CommonCodeChange from './components/CommoncodeChange'

import { Dialog } from '@/base-components/Headless'
import Lucide from '@/base-components/Lucide'

interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SystemCodeMng = ({open, setOpen}: Props ) => {
  const [isControlGroupCode, setIsControlGroupCode] = useState(false)
  const [groupCodeDetail, setgroupCodeDetail] = useState(false)
  const [commonCodeRegist, setcommonCodeRegist] = useState(false)
  const [commonCodeChange, setcommonCodeChange] = useState(false)



  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">공통코드 관리</h2>
      </div>

      <div className="mt-5 grid grid-cols-12 gap-4">
        <CodeGroupList setOpen={setIsControlGroupCode} setOpen2={setgroupCodeDetail}/>

        <CodeTableList setOpen={setcommonCodeRegist} setOpen2={setcommonCodeChange}/>
      </div>

      <ControlGroupCodeDialog
        open={isControlGroupCode}
        setOpen={setIsControlGroupCode}
      />



      {/* BEGIN: Modal 그룹코드 등록 */}
      {/*  */}
      {/* END: Modal 그룹코드 등록 */}

      {/* BEGIN: Modal 그룹코드 상세/수정 */}

      <GroupCodeDetail open={groupCodeDetail} setOpen={setgroupCodeDetail} />

      {/* END: Modal 그룹코드 상세/수정 */}

      {/* BEGIN: Modal 공통코드 등록 */}
      
      <CommonCodeRegist open={commonCodeRegist} setOpen={setcommonCodeRegist} />
      {/* END: Modal 공통코드 등록 */}

      {/* BEGIN: Modal 공통코드 상세/수정 */}
      <CommonCodeChange open={commonCodeChange} setOpen={setcommonCodeChange} />
      {/* END: Modal 공통코드 상세/수정 */}
    </>
  )
}

export default SystemCodeMng
