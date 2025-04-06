// Button.tsx
import Link from 'next/link';

interface ButtonProps {
  title: string;
  href: string;
  variant?: 'btn_blue' | 'btn_gradient'; // Add variant for different button styles
}

const Button = ({ title, href, variant = 'btn_gradient' }: ButtonProps) => {
  const baseStyles = `inline-flex items-center justify-center px-6 py-3 font-semibold rounded-full transition-all duration-300`;
  const gradientStyles = `bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white shadow-lg hover:from-blue-500 hover:to-blue-700`;
  const blueStyles = `bg-blue-500 text-white hover:bg-blue-600`;

  const variantStyles = variant === 'btn_gradient' ? gradientStyles : blueStyles;

  return (
    <Link href={href} className={`${baseStyles} ${variantStyles}`}>
      {title}
    </Link>
  );
};

export default Button;
