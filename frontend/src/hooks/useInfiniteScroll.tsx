import { useState, useEffect } from 'react'

type InfiniteScrollType<TData> = {
  meta: {
    total: number,
    per_page: number,
    page: number
  },
  data: {
    [key: string]: TData[],
  }
}

const useInfiniteScroll = <TData, TParams>(getItems: (params: TParams & { page: number }) => Promise<{ data: InfiniteScrollType<TData> }>, extraParams: TParams) => {
  const [items, setItems] = useState<TData[]>([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  const fetchData = (defaultPage?: number) => {
    getItems({ ...extraParams, page: defaultPage || page })
      .then(({ data }) => {
        if (data.meta.total === data.meta.page) setHasMore(false)

        setItems((items: TData[]) => [...items, ...Object.values(data?.data)[0]])
        setPage(data.meta.page + 1)
      })
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    items,
    next: fetchData,
    hasMore,
    refetch: () => {
      setItems([])
      setHasMore(true)
      fetchData(1)
    }
  }
}

export default useInfiniteScroll
