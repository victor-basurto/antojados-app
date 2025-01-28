'use client';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@heroui/react';
import type {
  TableColumnsType,
  ResponseDataWithLoadingAndError,
} from '@/lib/types';

interface Props<T> {
  data: ResponseDataWithLoadingAndError<T> | null;
  tableHeaders: TableColumnsType[];
  cssclasses: string;
}
export default function UITable<T>({
  data,
  tableHeaders,
  cssclasses,
}: Props<T>) {
  if (data?.isLoading) return <div>Loading...{data.message}</div>;
  if (data?.error) return <div>Error: {data.error}</div>;
  if (!data?.data || data?.data.length === 0)
    return <div>No data available</div>;
  return (
    <Table
      aria-label="Table Info - Update to dynamic string"
      className={cssclasses}
    >
      <TableHeader>
        {tableHeaders.map((thead: TableColumnsType) => (
          <TableColumn key={thead.key}>{thead.label}</TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {data.data.map((item, idx) => (
          <TableRow key={idx}>
            {tableHeaders.map((header) => (
              <TableCell className="text-white" key={header.key}>
                {item && item[header.key as keyof T]?.toString()}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
