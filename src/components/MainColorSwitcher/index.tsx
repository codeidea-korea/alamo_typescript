import clsx from 'clsx'

import {
  ColorSchemes,
  selectColorScheme,
  setColorScheme,
} from '../../stores/colorSchemeSlice'
import { selectDarkMode } from '../../stores/darkModeSlice'
import { useAppDispatch, useAppSelector } from '../../stores/hooks'

function Main() {
  const dispatch = useAppDispatch()
  const colorScheme = useAppSelector(selectColorScheme)
  const darkMode = useAppSelector(selectDarkMode)

  const setColorSchemeClass = () => {
    const el = document.querySelectorAll('html')[0]
    el.setAttribute('class', colorScheme)
    darkMode && el.classList.add('dark')
  }

  const switchColorScheme = (colorScheme: ColorSchemes) => {
    dispatch(setColorScheme(colorScheme))
    localStorage.setItem('colorScheme', colorScheme)
    setColorSchemeClass()
  }

  setColorSchemeClass()

  return (
    <>
      {/* BEGIN: Main Color Switcher */}
      <div className="box fixed bottom-0 right-0 z-50 mb-10 mr-52 flex h-12 items-center justify-center rounded-full border px-5 shadow-md">
        <div className="mr-4 hidden text-slate-600 dark:text-slate-200 sm:block">
          Color Scheme
        </div>
        <a
          onClick={() => {
            switchColorScheme('default')
          }}
          className={clsx({
            'mr-1 block h-8 w-8 cursor-pointer rounded-full border-4 bg-blue-800 hover:border-slate-200':
              true,
            'border-slate-300 dark:border-darkmode-800/80':
              colorScheme == 'default',
            'border-white dark:border-darkmode-600': colorScheme != 'default',
          })}
        ></a>
        <a
          onClick={() => {
            switchColorScheme('theme-1')
          }}
          className={clsx({
            'mr-1 block h-8 w-8 cursor-pointer rounded-full border-4 bg-emerald-900 hover:border-slate-200':
              true,
            'border-slate-300 dark:border-darkmode-800/80':
              colorScheme == 'theme-1',
            'border-white dark:border-darkmode-600': colorScheme != 'theme-1',
          })}
        ></a>
        <a
          onClick={() => {
            switchColorScheme('theme-2')
          }}
          className={clsx({
            'mr-1 block h-8 w-8 cursor-pointer rounded-full border-4 bg-blue-900 hover:border-slate-200':
              true,
            'border-slate-300 dark:border-darkmode-800/80':
              colorScheme == 'theme-2',
            'border-white dark:border-darkmode-600': colorScheme != 'theme-2',
          })}
        ></a>
        <a
          onClick={() => {
            switchColorScheme('theme-3')
          }}
          className={clsx({
            'mr-1 block h-8 w-8 cursor-pointer rounded-full border-4 bg-cyan-900 hover:border-slate-200':
              true,
            'border-slate-300 dark:border-darkmode-800/80':
              colorScheme == 'theme-3',
            'border-white dark:border-darkmode-600': colorScheme != 'theme-3',
          })}
        ></a>
        <a
          onClick={() => {
            switchColorScheme('theme-4')
          }}
          className={clsx({
            'block h-8 w-8 cursor-pointer rounded-full border-4 bg-indigo-900 hover:border-slate-200':
              true,
            'border-slate-300 dark:border-darkmode-800/80':
              colorScheme == 'theme-4',
            'border-white dark:border-darkmode-600': colorScheme != 'theme-4',
          })}
        ></a>
      </div>
      {/* END: Main Color Switcher */}
    </>
  )
}

export default Main
