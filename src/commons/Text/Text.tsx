export interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  fontSize?: string
  fontWeight?: string
  color?: string
  children?: any
  margin?: string
}

export const Text = ({
  fontSize = "12px",
  fontWeight = "normal",
  color = "white",
  margin,
  children,
  ...props
}: TextProps) => {
  return (
    <div
      {...props}
      style={{
        fontSize: fontSize,
        fontWeight: fontWeight,
        color: color,
        margin: margin,
      }}
    >
      {children}
    </div>
  )
}

export default Text
