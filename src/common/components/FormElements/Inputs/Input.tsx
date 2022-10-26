interface InputProps {
  type: string;
  placeholder: string;
  className: string;
}

/**
 * Input oluşturmak için kullanabilirsiniz.
 *
 * @example
 * // Örnek kullanım
 * <Input className="text-primary" type="text" placeholder="İsminiz" />
 * @param {string} type - Input tipi. Varsayılan type="text"
 * @param {string} placeholder - Ön tanımlı yazı.
 * @param {string} className - Inputun css sınıfı.
 */

const Input = ({ type, className, placeholder }: InputProps) => {
  return (
    <input
      className={`outline-none ${className}`}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
