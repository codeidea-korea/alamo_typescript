import LoadingIcon from '@/base-components/LoadingIcon'

function Loading() {
  return (
    <div className="absolute top-0 bottom-0 left-0 z-50 flex w-full items-center justify-center bg-white/70">
      <LoadingIcon icon="ball-triangle" className="h-8 w-8" />
    </div>
  )
}

export default Loading
