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
}

export const MyLabel = ({
  label = 'No label',
  size = 'normal',
}: Props) => {
  return (
    <span className={`${size}`}>{label}</span>
  );
};
