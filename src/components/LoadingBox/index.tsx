import { ReactElement } from 'react'

import clsx from 'clsx'

import Loading from '@/components/Loading'

interface Props {
  className?: string
  loading: boolean
  children: ReactElement | ReactElement[]
}

function index({ className, loading, children }: Props) {
  return (
    <div className={clsx(className, 'relative min-h-[100px]')}>
      {loading && <Loading />}
      {children}
    </div>
  )
}

export default index
