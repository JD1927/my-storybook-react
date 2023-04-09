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
  /**
   * Custom font color
   */
  fontColor?: string;
}

export const MyLabel = ({
  label = 'No label',
  size = 'normal',
  color = 'primary',
  allCaps = false,
  fontColor,
}: Props) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{color: fontColor}}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
