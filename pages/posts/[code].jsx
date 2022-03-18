const RedirectURL = () => {
 return null;
}

export default RedirectURL;

export const getServerSideProps = async (context) => {
  const { res } =  context;
  res.writeHead(301, { location: "https://google.com" } );
  res.end();
}
