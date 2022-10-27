interface TextProps {
  children: React.ReactNode;
  className?: string;
}
/**
 * Paragraf oluşturmak için kullanabilirsiniz.
 * @example
 * // Örnek kullanım
 *  <Span className="author-name">
 *     {author.name}
 *  </Span>
 * @param {string} children - Span içeriğini yazabilirsiniz.
 * @param {string} className - Span için ekstra class ekleyebilirsiniz.
 */

const Span = ({ children, className }: TextProps) => {
  return <p className={`${className}`}>{children}</p>;

  <span className="tracking-[3px] mb-[30px] font-bold text-[16px] md:text-[24px]">
    INDOORS
  </span>;
};

export default Span;
