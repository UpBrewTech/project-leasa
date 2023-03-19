import { PropsWithChildren, ReactNode } from 'react'

export type Column<T> = {
  label: string
  cell: (data: T) => ReactNode
}

interface RowSpanProps extends PropsWithChildren {
  length: number
}

const RowSpan = ({ length, children }: RowSpanProps) => {
  return (
    <tr className="p-xs relative block text-center lg:table-row">
      <td colSpan={length} className="py-sm">
        {children}
      </td>
    </tr>
  )
}

const DataCell = ({ label, render }: { label: string; render: ReactNode }) => {
  return (
    <td
      data-title={label}
      className="lg:py-sm flex items-center justify-between whitespace-nowrap before:text-xs before:uppercase before:text-gray-500 before:content-[attr(data-title)] lg:table-cell lg:before:content-[]"
    >
      {render}
    </td>
  )
}

interface DataRowProps<T> {
  data: T
  columns: Column<T>[]
}

export const DataRow = <T extends {}>({ columns, data }: DataRowProps<T>) => {
  return (
    <tr className="p-xs relative block text-center lg:table-row">
      {columns.map(({ label, cell }, key) => (
        <DataCell key={key} label={label} render={cell(data)} />
      ))}
    </tr>
  )
}

export interface DataTableProps<T> {
  loading: boolean
  columns: Column<T>[]
  data?: T[]
  dataCount?: number
}

export const DataTable = <T extends { id: any }>({
  loading,
  columns,
  data,
  dataCount,
}: DataTableProps<T>) => {
  return (
    <table className="w-full table-auto">
      <thead className="hidden bg-slate-600 text-xs uppercase text-white lg:table-row-group">
        <tr>
          {columns.map(({ label }, key) => (
            <th key={key} className="font-medium tracking-wide">
              <span className="p-sm flex items-center justify-center">
                {label}
              </span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="block divide-y divide-dashed text-sm lg:table-row-group">
        {(loading && <RowSpan length={columns.length}>loading...</RowSpan>) ||
          (!dataCount && <RowSpan length={columns.length}>empty...</RowSpan>)}

        {!loading &&
          data?.map((row) => (
            <DataRow key={row.id} columns={columns} data={row} />
          ))}
      </tbody>
      <tfoot>
        <RowSpan length={columns.length}></RowSpan>
      </tfoot>
    </table>
  )
}
