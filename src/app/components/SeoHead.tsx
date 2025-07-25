// components/SeoHead.tsx
import Head from 'next/head';

interface SeoHeadProps {
  title: string;
  description?: string;
}

export default function SeoHead({ title, description }: SeoHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
    </Head>
  );
}
