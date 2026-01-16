import { Check, X } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

export interface ComparisonRow {
  feature: string;
  productA: boolean | string;
  productB: boolean | string;
}

interface ComparisonTableProps {
  productAName: string;
  productBName: string;
  rows: ComparisonRow[];
  className?: string;
}

export function ComparisonTable({
  productAName,
  productBName,
  rows,
  className,
}: ComparisonTableProps) {
  
  const renderValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-500 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-red-500 mx-auto" />
      );
    }
    return <span className="text-slate-700 font-medium">{value}</span>;
  };

  return (
    <div className={twMerge("overflow-hidden border border-slate-200 rounded-xl shadow-sm my-8", className)}>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="p-4 text-slate-500 font-medium text-sm lg:w-1/3">Feature</th>
            <th className="p-4 text-slate-900 font-bold text-center lg:w-1/3">{productAName}</th>
            <th className="p-4 text-slate-900 font-bold text-center lg:w-1/3 border-l border-slate-100">{productBName}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
              <td className="p-4 text-slate-700 font-medium border-b border-slate-100 last:border-0">
                {row.feature}
              </td>
              <td className="p-4 text-center border-b border-slate-100 last:border-0">
                 {renderValue(row.productA)}
              </td>
              <td className="p-4 text-center border-b border-slate-100 last:border-0 border-l border-slate-100">
                {renderValue(row.productB)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
