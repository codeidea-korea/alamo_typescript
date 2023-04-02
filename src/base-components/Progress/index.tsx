import { twMerge } from 'tailwind-merge'

type ProgressProps = React.PropsWithChildren &
  React.ComponentPropsWithoutRef<'div'>

function Progress(props: ProgressProps) {
  return (
    <div
      {...props}
      className={twMerge([
        'h-2 w-full rounded bg-slate-200 dark:bg-black/20',
        props.className,
      ])}
    >
      {props.children}
    </div>
  )
}

type BarProps = React.PropsWithChildren & React.ComponentPropsWithoutRef<'div'>

Progress.Bar = (props: BarProps) => {
  return (
    <div
      {...props}
      className={twMerge([
        'flex h-full items-center justify-center rounded bg-primary text-xs text-white',
        props.className,
      ])}
    >
      {props.children}
    </div>
  )
}

export default Progress
