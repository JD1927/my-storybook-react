import './my-label.css';

export interface Props {
  /**
   * Value of the label
   */
  label: string;
  /**
   * Size of the label
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Text color
   */
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Property to handle uppercase
   */
  allCaps?: boolean;
}

export const MyLabel = ({
  label = 'No label',
  size = 'normal',
  color = 'primary',
  allCaps = false,
}: Props) => {
  return (
    <span className={`${size} text-${color}`}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
