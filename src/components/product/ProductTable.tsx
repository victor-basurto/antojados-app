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
  IProduct,
} from '@/lib/types';

interface Props {
  data: ResponseDataWithLoadingAndError<IProduct> | null;
  tableHeaders: TableColumnsType[];
  cssclasses: string;
}
const ProductTable: React.FC<Props> = ({ data, tableHeaders, cssclasses }) => {
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
                {item && item[header.key as keyof IProduct]?.toString()}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default ProductTable;
