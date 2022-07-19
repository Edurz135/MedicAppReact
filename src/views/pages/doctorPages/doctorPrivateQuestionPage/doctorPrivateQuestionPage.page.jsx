import { useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./scriptsPP";
import "./stylePP.css";
export default function DoctorPrivateQuestionPage(props) {
  useEffect(() => {
    props.setCurrentTabIndex(props.data.index);
  }, []);
  return <div className="container">
  <div className="row">
  <div className="container-faq">
      <div className="title-faq">
          <h3>Preguntas Privadas</h3>
      </div>

      <div className="item-faq">
          <div className="question">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit ? <span>P</span></h3>
              <div className="more"><i>+</i></div>
          </div>
          <div className="answer">
              <form >
                  <div className="form-group mb-2">
                      
                      <label for="disabledTextInput">Contacto de: </label>
                      <fieldset disabled/>
                      <input type="text" id="disabledTextInput" className="form-control" placeholder="alguien@hotmail.com"/>
                      <input type="number" id="disabledTextInput" className="form-control" placeholder="999666999"/>  
                      
                  </div> 
                  <div>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> 
                      <button type="button" className="btn btn-outline-primary">Responder</button>
                  </div>
                 
                  
              </form>
          </div>
      </div>

      <div className="item-faq">
          <div className="question">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit ? <span>P</span></h3>
              <div className="more"><i>+</i></div>
          </div>
          <div className="answer">
              <form >
                  <div className="form-group mb-2">
                      
                      <label for="disabledTextInput">Contacto de: </label>
                      <fieldset disabled/>
                      <input type="text" id="disabledTextInput" className="form-control" placeholder="alguien@hotmail.com"/>
                      <input type="number" id="disabledTextInput" className="form-control" placeholder="999666999"/>  
                      
                  </div> 
                  <div>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> 
                      <button type="button" className="btn btn-outline-primary">Responder</button>
                  </div>
                 
                  
              </form>
          </div>
      </div>

      <div className="item-faq">
          <div className="question">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit ? <span>P</span></h3>
              <div className="more"><i>+</i></div>
          </div>
          <div className="answer">
              <form >
              <div className="form-group mb-2">
                      
                      <label for="disabledTextInput">Contacto de: </label>
                      <fieldset disabled/>
                      <input type="text" id="disabledTextInput" className="form-control" placeholder="alguien@hotmail.com"/>
                      <input type="number" id="disabledTextInput" className="form-control" placeholder="999666999"/>  
                      
                  </div> 
                  <div>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> 
                      <button type="button" className="btn btn-outline-primary">Responder</button>
                  </div>
                 
                  
              </form>
          </div>
      </div>

      <div className="item-faq">
          <div className="question">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit ? <span>P</span></h3>
              <div className="more"><i>+</i></div>
          </div>
          <div className="answer">
              <form >
              <div className="form-group mb-2">
                      
                      <label for="disabledTextInput">Contacto de: </label>
                      <fieldset disabled/>
                      <input type="text" id="disabledTextInput" className="form-control" placeholder="alguien@hotmail.com"/>
                      <input type="number" id="disabledTextInput" className="form-control" placeholder="999666999"/>  
                      
                  </div> 
                  <div>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> 
                      <button type="button" className="btn btn-outline-primary">Responder</button>
                  </div>
                 
                  
              </form>
          </div>
      </div>


      <div className="item-faq">
          <div className="question">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit ? <span>P</span></h3>
              <div className="more"><i>+</i></div>
          </div>
          <div className="answer">
              <form >
              <div className="form-group mb-2">
                      
                      <label for="disabledTextInput">Contacto de: </label>
                      <fieldset disabled/>
                      <input type="text" id="disabledTextInput" className="form-control" placeholder="alguien@hotmail.com"/>
                      <input type="number" id="disabledTextInput" className="form-control" placeholder="999666999"/>  
                      
                  </div> 
                  <div>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> 
                      <button type="button" className="btn btn-outline-primary">Responder</button>
                  </div>
                 
                  
              </form>
          </div>
      </div>

  </div>
</div>
<section className="paginacion">    
  <ul>
<li> <a href="doctor_preguntas_privadas1.page.jsx" className="active" >1</a></li>
<li> <a href="doctor_preguntas_privadas2.page.jsx" >2</a></li>
<li> <a href="doctor_preguntas_privadas3.page.jsx">3</a></li>
  </ul>
</section>
</div>
}
