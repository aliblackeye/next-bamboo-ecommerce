import HeadElement from "next/head";

type HeadProps = {
  title: string;
  description: string;
  links?: Array<{ rel: string; href: string }>;
};

const Head = ({ title, description }: HeadProps) => {
  return (
    <HeadElement>
      <title>{title}</title>
      <meta name="description" content={description} />
    </HeadElement>
  );
};

export default Head;
