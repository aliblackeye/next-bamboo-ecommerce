interface TextProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Paragraf oluşturmak için kullanabilirsiniz.
 * @example
 * // Örnek kullanım
 *  <Paragraph className="paragraph">
 *      Classic meet modern living. Bamboo has a fantastic range of indoor furniture, perfect for any modern home.
 *  </Paragraph>
 * @param {string} children - Paragraf içeriğini yazabilirsiniz.
 * @param {string} className - Paragraf için ekstra class ekleyebilirsiniz.
 */

const Paragraph = ({ children, className }: TextProps) => {
  return <p className={`${className}`}>{children}</p>;
};

export default Paragraph;
