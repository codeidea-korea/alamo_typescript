import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import NoticeList from './components/NoticeList'
import NoticeSearch from './components/NoticeSearch'

export interface SearchForm {
  date: string
  title: string
  brandId: string
  visabled: string
  fixed: string
}

export default function Notice() {
  const props = useForm<SearchForm>({
    defaultValues: {
      date: '',
      title: '',
      brandId: '',
      visabled: '',
      fixed: '',
    },
  })
  return (
    <>
      <div className="mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">공지사항 관리</h2>
      </div>

      <NoticeSearch {...props} />

      <NoticeList />
    </>
  )
}
