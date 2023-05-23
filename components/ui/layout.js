import Navbar from "../nav/navbar";

function Layout(props) {
  return (
    <>
      <Navbar />

      <main>{props.children}</main>
    </>
  );
}

export default Layout;
