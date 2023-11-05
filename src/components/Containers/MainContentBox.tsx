import Box from "./Box";

type MainContentBoxProps = {
  children: React.ReactNode
}

const MainContentBox = ({children}: MainContentBoxProps): JSX.Element => {
  return (
    <Box justify="center" css={{maxWidth: '50rem'}}>
      {children}
    </Box>
  )
}

export default MainContentBox;