import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// cnは shadcn/ui の核となるヘルパー関数で、
// コンポーネントのスタイルをカスタマイズしやすくするために不可欠です。
// ほぼすべての shadcn/ui コンポーネントで使用されています。
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
