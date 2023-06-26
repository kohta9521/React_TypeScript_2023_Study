import react from "react";

const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <>
    <div style={{ height: "50px", backgroundColor: "red" }}>
    </div>
    { children }
    </>

  )
}

export default HeaderOnly;