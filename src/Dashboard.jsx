import { useEffect } from "react";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const quote = useSelector((state) => state.quote.quote);

  useEffect(() => {
    console.log("quote", quote);
  }, [quote]);

  return <></>;
};
export default Dashboard;
