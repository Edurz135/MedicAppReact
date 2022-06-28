import { useEffect } from "react";

export default function DoctorPrivateQuestionPage(props) {
  useEffect(() => {
    props.setCurrentTabIndex(props.data.index);
  }, []);
  return <div>Pagina doctor preguntas privadas</div>;
}
