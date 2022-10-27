import HeadElement from "next/head";

type HeadProps = {
  title: string;
  description: string;
  links?: Array<{ rel: string; href: string }>;
};

/**
 * Head component
 *
 * @example
 * <Head title="Ana Sayfa" description="Site açıklaması." />
 * @param {string} title - Sayfa başlığı
 * @param {string} description - Sayfa açıklaması
 */

const Head = ({ title, description }: HeadProps) => {
  return (
    <HeadElement>
      <title>{title}</title>
      <meta name="description" content={description} />
    </HeadElement>
  );
};

export default Head;
