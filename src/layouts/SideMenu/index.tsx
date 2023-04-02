import { useEffect, useState } from 'react'
import { useSignOut } from 'react-auth-kit'
import { useForm } from 'react-hook-form'
import {
  Link,
  Outlet,
  useLocation,
  useMatch,
  useNavigate,
} from 'react-router-dom'
import { Transition } from 'react-transition-group'

import { useAppSelector } from '@/stores/hooks'
import { selectSideMenu } from '@/stores/sideMenuSlice'
import clsx from 'clsx'

import { FormInput } from '@/base-components/Form'
import { Dialog } from '@/base-components/Headless'
import Litepicker from '@/base-components/Litepicker'
import Lucide from '@/base-components/Lucide'

import ChangeInfoDialog from '@/components/Layouts/ChangeInfoDialog'
import SideMenuTooltip from '@/components/SideMenuTooltip'

import logoUrl from '@/assets/images/alamo_logo.svg'

import { FormattedMenu, enter, leave, linkTo, nestedMenu } from './side-menu'

function Main() {
  const location = useLocation()
  const [formattedMenu, setFormattedMenu] = useState<
    Array<FormattedMenu | 'divider'>
  >([])
  const sideMenuStore = useAppSelector(selectSideMenu)
  const sideMenu = () => nestedMenu(sideMenuStore, location)
  const signOut = useSignOut()

  useEffect(() => {
    setFormattedMenu(sideMenu())
  }, [sideMenuStore, location.pathname])

  const ishome = useMatch('/')

  //사이드메뉴
  const [sidesMenu, setSidesMenu] = useState(false)

  // 정보변경 모달
  const [modifyModal, setModifyModal] = useState(false)

  //알람 현황 모달
  const [notifiModal, setNotifiModal] = useState(false)
  const [notifyrange, setNotifyrange] = useState('')

  // 대시보드 편집 모달
  const [dashboardModal, setDashboardModal] = useState(false)
  const [RegistBtn, setRegistBtn] = useState(false) //대시보드 편집 등록

  // 체크
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false)

  const handleCheckAll = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const checkboxes = document.querySelectorAll<HTMLInputElement>(
      '.check_table2 input[type="checkbox"]',
    )
    checkboxes.forEach((checkbox) => {
      checkbox.checked = event.target.checked
    })
    setIsAllChecked(event.target.checked)
  }

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const checkboxes = document.querySelectorAll<HTMLInputElement>(
      '.check_table2 input[type="checkbox"]',
    )
    let allChecked = true
    checkboxes.forEach((checkbox) => {
      if (checkbox !== event.target) {
        checkbox.checked = checkbox.checked || false
      }
      allChecked = allChecked && checkbox.checked
    })
    setIsAllChecked(allChecked)
  }

  return (
    <div>
      {/* top */}
      <div className="min-w1000 top_header flex items-center justify-between">
        <div className="flex items-center">
          <div>
            <img src={logoUrl} alt="" className=" mr-2 w-24" />
          </div>
          <div className="text-lg font-bold text-white">
            렌터카 통합관리자 시스템
          </div>
        </div>
        <div className="topSearch flex items-center gap-1">
          <Link to="/cscenter/counseling">
            <Lucide
              icon="Headphones"
              className="headphones__icon text-white/80"
            />
          </Link>
          <Link to="/reservation">
            <Lucide icon="Calendar" className="calendar__icon text-white/80" />
          </Link>
          <Link to="/member/normal">
            <Lucide icon="Users" className="users__icon text-white/80" />
          </Link>

          {/* BEGIN: Search */}
          <div className="intro-x relative">
            <div className="relative hidden sm:block">
              <FormInput
                type="text"
                className="w-56 rounded-full border-transparent bg-white pr-8 text-sm shadow-none transition-[width] duration-300 ease-in-out focus:w-72 focus:border-transparent"
                placeholder="검색어를 입력하세요"
              />
              <Lucide
                icon="Search"
                className="absolute inset-y-0 right-0 my-auto mr-3 h-5 w-5 text-slate-600 dark:text-slate-500"
              />
            </div>
            <a className="relative hidden text-slate-600" href="">
              <Lucide icon="Search" className="h-5 w-5" />
            </a>
          </div>
          {/* END: Search  */}
        </div>

        <div className="topLink_menu flex items-center gap-1 text-white/80">
          <b>투어코리아</b>님<span>|</span>
          <button onClick={() => signOut()}>로그아웃</button>
          <span>|</span>
          <Link
            to="#"
            onClick={(event: React.MouseEvent) => {
              event.preventDefault()
              setModifyModal(true)
            }}
          >
            정보변경
          </Link>
          <span>|</span>
          <Link to="">
            <Lucide icon="BookOpen" className="bookOpen__icon " />
          </Link>
          <Link
            to="#"
            className="notifi_icon"
            onClick={(event: React.MouseEvent) => {
              event.preventDefault()
              setNotifiModal(true)
            }}
          >
            <Lucide icon="Bell" className="notification__icon " />
            <em>10</em>
          </Link>
          <Link
            to="#"
            onClick={(event: React.MouseEvent) => {
              event.preventDefault()
              setDashboardModal(true)
            }}
          >
            <Lucide icon="Edit" className="edit__icon " />
          </Link>
        </div>
      </div>
      {/* top 끝 */}

      {/* 정보변경 모달 */}
      <ChangeInfoDialog open={modifyModal} setOpen={setModifyModal} />
      {/* 정보변경 모달 끝 */}

      {/* 알림현황 모달 */}
      <Dialog
        size="lg"
        open={notifiModal}
        onClose={() => {
          setModifyModal(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">알림 현황</h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setNotifiModal(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <table className="table-bordered table">
              <colgroup>
                <col width="20%" />
                <col width="80%" />
              </colgroup>
              <tbody>
                <tr>
                  <td className="bg-slate-100 text-center">수신일</td>
                  <td>
                    <div className="relative inline-block w-56">
                      <div className="absolute flex h-full w-10 items-center justify-center rounded-l border bg-slate-100 text-slate-500 dark:border-darkmode-800 dark:bg-darkmode-700 dark:text-slate-400">
                        <Lucide icon="Calendar" className="h-4 w-4" />
                      </div>
                      <Litepicker
                        value={notifyrange}
                        onChange={setNotifyrange}
                        options={{
                          autoApply: false,
                          singleMode: false,
                          numberOfColumns: 2,
                          numberOfMonths: 2,
                          showWeekNumbers: true,
                          dropdowns: {
                            minYear: 1990,
                            maxYear: null,
                            months: true,
                            years: true,
                          },
                        }}
                        className="form-control mx-auto block w-56 pl-12"
                      />
                    </div>
                    <button className="btn btn-rounded-dark mr-1 mb-2 ml-2 w-20 p-1">
                      조회
                    </button>
                    <button className="btn btn-rounded btn-dark-soft mr-1 mb-2 w-20 p-1">
                      초기화
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="mt-6 text-red-500">
              1달 전 알림은 확인 여부와 무관하게 삭제됩니다.{' '}
            </p>
            <table className="table-bordered mt-1 table">
              <colgroup>
                <col width="20%" />
                <col width="80%" />
              </colgroup>
              <thead className="bg-slate-100 text-center">
                <tr>
                  <th>알림일자</th>
                  <th>제목</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">2022-03-02</td>
                  <td>제목</td>
                </tr>
              </tbody>
            </table>
          </Dialog.Description>
          <Dialog.Footer>
            <button
              type="button"
              className="btn btn-primary w-20"
              onClick={() => {
                setNotifiModal(false)
              }}
            >
              확인
            </button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>
      {/* 알림현황 모달 끝 */}

      {/* 대쉬보드 모달 */}
      <Dialog
        size="md"
        open={dashboardModal}
        onClose={() => {
          setDashboardModal(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">대시보드 편집</h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setDashboardModal(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <p className="font-bold">
              현재 <span className="text-red-500">7</span>개 설정 중
            </p>
            <div className="check_table2">
              <table className="table-bordered mt-3 table">
                <colgroup>
                  <col width="20%" />
                  <col width="80%" />
                </colgroup>
                <thead className="bg-slate-100 text-center">
                  <tr>
                    <th>
                      <input
                        id="checkbox-switch-1"
                        className="form-check-input check_all"
                        checked={isAllChecked}
                        onChange={handleCheckAll}
                        type="checkbox"
                      />
                    </th>
                    <th>구분</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <input
                        id="checkbox-switch-1"
                        className="form-check-input"
                        type="checkbox"
                        onChange={handleCheck}
                      />
                    </td>
                    <td>일일 예약 현황</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <input
                        id="checkbox-switch-1"
                        className="form-check-input"
                        type="checkbox"
                        onChange={handleCheck}
                      />
                    </td>
                    <td>당일 예약 목록</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <input
                        id="checkbox-switch-1"
                        className="form-check-input"
                        type="checkbox"
                        onChange={handleCheck}
                      />
                    </td>
                    <td>1:1문의 답변대기 목록</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <input
                        id="checkbox-switch-1"
                        className="form-check-input"
                        type="checkbox"
                        onChange={handleCheck}
                      />
                    </td>
                    <td>최근 일주일 상담 현황</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <input
                        id="checkbox-switch-1"
                        className="form-check-input"
                        type="checkbox"
                        onChange={handleCheck}
                      />
                    </td>
                    <td>알림 현황</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <input
                        id="checkbox-switch-1"
                        className="form-check-input"
                        type="checkbox"
                        onChange={handleCheck}
                      />
                    </td>
                    <td>최근 일주일 예약 현황</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <input
                        id="checkbox-switch-1"
                        className="form-check-input"
                        type="checkbox"
                        onChange={handleCheck}
                      />
                    </td>
                    <td>최근 일주일 예약 추이</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Dialog.Description>
          <Dialog.Footer className="text-center">
            <button
              type="button"
              onClick={() => {
                setDashboardModal(false)
              }}
              className="btn btn-outline-secondary mr-1 w-20"
            >
              취소
            </button>
            <button
              type="button"
              className="btn btn-primary w-20"
              onClick={() => {
                setRegistBtn(true)
              }}
            >
              등록
            </button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 등록 버튼*/}
      <Dialog
        open={RegistBtn}
        onClose={() => {
          setRegistBtn(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setRegistBtn(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <div className="text-center text-lg font-bold">
              정상적으로 등록 되었습니다.
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setRegistBtn(false)
                  setDashboardModal(false)
                }}
                className="btn btn-primary w-24"
              >
                확인
              </button>
            </div>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 컨텐츠 상단 */}
      <div className="items-top topMenu min-w1000 flex">
        <div className="side pr-5">
          <button className="btn btn-rounded bg-navy w-full border-none text-sm text-white">
            렌터카 시스템
          </button>
        </div>
        <div className="top-nav">
          <ul>
            <li>
              <Link
                to="/"
                className={ishome ? 'top-menu top-menu--active' : 'top-menu'}
              >
                <div className="top-menu__icon flex items-center"></div>
                <div className="top-menu__title home">홈</div>
              </Link>
            </li>
            <li>
              <Link to="/cscenter/counseling" className="top-menu">
                <div className="top-menu__icon flex items-center">
                  <button type="button">
                    <Lucide icon="Star" className=" bookMark active" />
                  </button>
                </div>
                <div className="top-menu__title">상담관리</div>
                <button type="button">
                  <Lucide
                    icon="XCircle"
                    className="bookMarkCancel ml-4 block"
                  />
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* 컨텐츠 상단 끝 */}

      <div className="flex">
        {/* BEGIN: Side Menu */}
        <nav
          className={
            sidesMenu
              ? 'side-nav on tr mt-10 hidden w-[85px] shrink-0 overflow-x-hidden pr-5 pb-16 md:block xl:w-[230px]'
              : 'side-nav tr mt-10 hidden w-[85px] shrink-0 overflow-x-hidden pr-5 pb-16 md:block xl:w-[230px]'
          }
        >
          <ul>
            <li>
              <div className="side-menu">
                <div className="side-menu__icon">
                  {sidesMenu && (
                    <Lucide
                      onClick={() => {
                        setSidesMenu((prev) => !prev)
                      }}
                      icon="Unlock"
                      className=""
                    />
                  )}
                </div>
                <div className="side-menu__title">
                  <div className="flex items-center gap-2">
                    <span>😀</span>
                    <p>오늘도 행복하세요.</p>
                  </div>
                </div>
                {!sidesMenu && (
                  <>
                    <button
                      onClick={() => {
                        setSidesMenu((prev) => !prev)
                      }}
                    >
                      <Lucide icon="Lock" className="h-4 w-4" />
                    </button>
                    <button className="ml-1">
                      <Lucide icon="Star" className="bookMark active" />
                    </button>
                  </>
                )}
              </div>
            </li>

            {/* BEGIN: First Child */}
            {formattedMenu.map((menu, menuKey) =>
              menu == 'divider' ? (
                <Divider
                  type="li"
                  className={clsx([
                    'my-6',

                    // Animation
                    `animate-[0.4s_ease-in-out_0.1s_intro-divider] opacity-0 animate-fill-mode-forwards animate-delay-${
                      (menuKey + 1) * 10
                    }`,
                  ])}
                  key={menuKey}
                ></Divider>
              ) : (
                <li key={menuKey}>
                  <Menu
                    className={clsx({
                      // Animation
                      [`translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] opacity-0 animate-fill-mode-forwards animate-delay-${
                        (menuKey + 1) * 10
                      }`]: !menu.active,
                    })}
                    menu={menu}
                    formattedMenuState={[formattedMenu, setFormattedMenu]}
                    level="first"
                  ></Menu>
                  {/* BEGIN: Second Child */}
                  {menu.subMenu && (
                    <Transition
                      in={menu.activeDropdown}
                      onEnter={enter}
                      onExit={leave}
                      timeout={300}
                    >
                      <ul
                        className={clsx([
                          'rounded-lg bg-black/10 dark:bg-darkmode-900/30',
                          { block: menu.activeDropdown },
                          { hidden: !menu.activeDropdown },
                        ])}
                      >
                        {menu.subMenu.map((subMenu, subMenuKey) => (
                          <li key={subMenuKey}>
                            <Menu
                              className={clsx({
                                // Animation
                                [`translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] opacity-0 animate-fill-mode-forwards animate-delay-${
                                  (subMenuKey + 1) * 10
                                }`]: !subMenu.active,
                              })}
                              subMenuKey={subMenuKey}
                              menu={subMenu}
                              formattedMenuState={[
                                formattedMenu,
                                setFormattedMenu,
                              ]}
                              level="second"
                            ></Menu>
                          </li>
                        ))}
                      </ul>
                    </Transition>
                  )}
                  {/* END: Second Child */}
                </li>
              ),
            )}
            {/* END: First Child */}
          </ul>
        </nav>
        {/* END: Side Menu */}
        {/* BEGIN: Content */}
        <div className="content">
          <Outlet />
        </div>
        {/* END: Content */}
      </div>
    </div>
  )
}

function Menu(props: {
  className?: string
  menu: FormattedMenu
  subMenuKey?: number
  formattedMenuState: [
    (FormattedMenu | 'divider')[],
    React.Dispatch<React.SetStateAction<(FormattedMenu | 'divider')[]>>,
  ]
  level: 'first' | 'second' | 'third'
}) {
  const navigate = useNavigate()
  const [formattedMenu, setFormattedMenu] = props.formattedMenuState

  return (
    <SideMenuTooltip
      as="a"
      content={props.menu.title}
      href={props.menu.subMenu ? '#' : props.menu.pathname}
      className={clsx([
        'relative mb-1 flex h-[50px] items-center rounded-full pl-5 text-white',
        {
          'dark:text-slate-300': props.menu.active && props.level != 'first',
          'text-white/70 dark:text-slate-400':
            !props.menu.active && props.level != 'first',
          'z-10 bg-slate-100 dark:bg-darkmode-700':
            props.menu.active && props.level == 'first',
          "before:absolute before:top-0 before:right-0 before:-mt-[30px] before:-mr-5 before:h-[30px] before:w-[30px] before:rotate-90 before:scale-[1.04] before:bg-menu-corner before:bg-[length:100%] before:content-[''] dark:before:bg-menu-corner-dark":
            props.menu.active && props.level == 'first',
          "after:absolute after:top-0 after:right-0 after:mt-[50px] after:-mr-5 after:h-[30px] after:w-[30px] after:scale-[1.04] after:bg-menu-corner after:bg-[length:100%] after:content-[''] dark:after:bg-menu-corner-dark":
            props.menu.active && props.level == 'first',
          '[&>div:nth-child(1)]:hover:before:bg-white/5 [&>div:nth-child(1)]:hover:before:dark:bg-darkmode-500/70':
            !props.menu.active &&
            !props.menu.activeDropdown &&
            props.level == 'first',
        },
        props.className,
      ])}
      onClick={(event: React.MouseEvent) => {
        event.preventDefault()
        linkTo(props.menu, navigate)
        setFormattedMenu([...formattedMenu])
      }}
    >
      <div
        className={clsx({
          'text-primary dark:text-slate-300':
            props.menu.active && props.level == 'first',
          'dark:text-slate-400': !props.menu.active && props.level == 'first',
          "before:absolute before:top-0 before:right-0 before:z-[-1] before:-mr-5 before:h-full before:w-12 before:bg-slate-100 before:content-[''] before:dark:bg-darkmode-700":
            props.menu.active && props.level == 'first',
          "before:absolute before:top-0 before:left-0 before:z-[-1] before:h-full before:w-[230px] before:rounded-l-full before:transition before:duration-100 before:ease-in before:content-['']":
            !props.menu.activeDropdown &&
            !props.menu.active &&
            props.level == 'first',
        })}
      >
        {props.menu?.icon && <Lucide icon={props.menu.icon} />}
      </div>
      {props.subMenuKey !== undefined && (
        <div className="side-menu__icon list_ml3 ml-3">
          <span className="list_ord text-lg font-bold">
            {props.subMenuKey + 1}
          </span>
        </div>
      )}
      <div
        className={clsx([
          'side-menu__title ml-3 hidden w-full items-center xl:flex',
          { 'font-medium': props.menu.active && props.level != 'first' },
          {
            'font-medium text-slate-800 dark:text-slate-300':
              props.menu.active && props.level == 'first',
          },
          {
            'dark:text-slate-400': !props.menu.active && props.level == 'first',
          },
        ])}
      >
        {props.menu.title}
        {props.menu.subMenu && (
          <div
            className={clsx([
              'ml-auto mr-5 hidden transition duration-100 ease-in xl:block',
              { 'rotate-180 transform': props.menu.activeDropdown },
            ])}
          >
            <Lucide className="h-4 w-4" icon="ChevronDown" />
          </div>
        )}
      </div>
      {props.subMenuKey !== undefined && (
        <button type="button" className="mr-5">
          <Lucide icon="Star" className="h-4 w-4"></Lucide>
        </button>
      )}
    </SideMenuTooltip>
  )
}

function Divider<C extends React.ElementType>(
  props: { as?: C } & React.ComponentPropsWithoutRef<C>,
) {
  const { className, ...computedProps } = props
  const Component = props.as || 'div'

  return (
    <Component
      {...computedProps}
      className={clsx([
        props.className,
        'relative z-10 h-px w-full bg-white/[0.08] dark:bg-white/[0.07]',
      ])}
    ></Component>
  )
}

export default Main
