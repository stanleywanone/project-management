export interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  fontSize?: string
  fontWeight?: string
  color?: string
  children?: string
}

export const Text = ({
  fontSize = "12px",
  fontWeight = "normal",
  color = "white",
  children,
  ...props
}: TextProps) => {
  return (
    <div
      {...props}
      style={{ fontSize: fontSize, fontWeight: fontWeight, color: color }}
    >
      {children}
    </div>
  )
}

export default Text
