import React, { useState } from 'react'
import { useQuery } from 'react-query'

import request from '@/utils/request'

interface Props {
  url: string
  key: string
}

export interface ReturnType {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  pageSize: number
  setPageSize: React.Dispatch<React.SetStateAction<number>>
  selectedNotice: number[]
  setSelectedNotice: React.Dispatch<React.SetStateAction<number[]>>
  data: any
  isLoading: boolean
  isRefetching: boolean
}

export default function GetListHook({ url, key }: Props): ReturnType {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [selectedNotice, setSelectedNotice] = useState<number[]>([])
  const { data, isLoading, isRefetching } = useQuery(
    [key, page, pageSize],
    () =>
      request.get(url, {
        params: {
          page,
          pageSize,
        },
      }),
    {
      keepPreviousData: true,
      select: ({ data }) => ({
        list: data.data.list,
        count: data.data.count,
      }),
    },
  )
  return {
    page,
    setPage,
    pageSize,
    setPageSize,
    selectedNotice,
    setSelectedNotice,
    data,
    isLoading,
    isRefetching,
  }
}
