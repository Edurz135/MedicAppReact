import { useEffect } from "react";

export default function DoctorPublicQuestionPage(props) {
  useEffect(() => {
    props.setCurrentTabIndex(props.data.index);
  }, []);
  return <div>Pagina doctor de preguntas publicas</div>;
}
