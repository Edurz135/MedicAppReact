import { useEffect } from "react";

export default function DoctorNextDatesPage(props) {
  useEffect(() => {
    props.setCurrentTabIndex(props.data.index);
  }, []);
  return <div>Pagina doctro next dates</div>;
}
