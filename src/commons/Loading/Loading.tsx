export interface LoadingProps {
  updateLoading: boolean
}

export const Loading = ({ updateLoading }: LoadingProps) => {
  return (
    <div
      style={{
        color: "white",
        margin: "5px 10px",
        fontSize: "24px",
        fontWeight: "bold",
        fontStyle: "italic",
      }}
    >
      {updateLoading ? "Updating..." : "Loading..."}
    </div>
  )
}
