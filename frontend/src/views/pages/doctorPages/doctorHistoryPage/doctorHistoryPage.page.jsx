import { useEffect } from "react";

export default function DoctorHistoryPage(props) {
  useEffect(() => {
    props.setCurrentTabIndex(props.data.index);
  }, []);
  return <div>Pagina doctor history</div>;
}
