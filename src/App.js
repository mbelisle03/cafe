import './App.css'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Alert from './components/Alert'
import { positions, Provider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

function ButtonIncrement(props) {
  return (
    <button
      style={{
        marginLeft: '.5rem',
        borderColor: 'whitesmoke',
        fontFamily: 'sans-serif',
      }}
      onClick={props.onClickFunc}
    >
      +1
    </button>
  )
}

function ButtonDecrement(props) {
  return (
    <button
      style={{
        marginLeft: '.5rem',
        borderColor: 'whitesmoke',
        fontFamily: 'sans-serif',
      }}
      onClick={props.onClickFunc}
    >
      -1
    </button>
  )
}

function Display(props) {
  return <label style={{ marginLeft: '.5rem' }}>{props.message}</label>
}

const options = {
  timeout: 5000,
  position: positions.MIDDLE,
}

function App() {
  //Set Counter for Latte
  const [counterL, setCounterL] = useState(0)
  const incrementCounterL = () => setCounterL(counterL + 1)
  let decrementCounterL = () => setCounterL(counterL - 1)
  if (counterL <= 1) {
    decrementCounterL = () => setCounterL(0)
  }

  //Set Counter for Espresso
  const [counterE, setCounterE] = useState(0)
  const incrementCounterE = () => setCounterE(counterE + 1)
  let decrementCounterE = () => setCounterE(counterE - 1)
  if (counterE <= 1) {
    decrementCounterE = () => setCounterE(0)
  }

  //Set Counter for Mocha
  const [counterM, setCounterM] = useState(0)
  const incrementCounterM = () => setCounterM(counterM + 1)
  let decrementCounterM = () => setCounterM(counterM - 1)
  if (counterM <= 1) {
    decrementCounterM = () => setCounterM(0)
  }

  //Set Counter for Cappacino
  const [counterC, setCounterC] = useState(0)
  const incrementCounterC = () => setCounterC(counterC + 1)
  let decrementCounterC = () => setCounterC(counterC - 1)
  if (counterC <= 1) {
    decrementCounterC = () => setCounterC(0)
  }

  //Set Counter for Americano
  const [counterA, setCounterA] = useState(0)
  const incrementCounterA = () => setCounterA(counterA + 1)
  let decrementCounterA = () => setCounterA(counterA - 1)
  if (counterA <= 1) {
    decrementCounterA = () => setCounterA(0)
  }
  //Set Counter for Affogato
  const [counter, setCounter] = useState(0)
  const incrementCounter = () => setCounter(counter + 1)
  let decrementCounter = () => setCounter(counter - 1)
  if (counter <= 1) {
    decrementCounter = () => setCounter(0)
  }

  return (
    <div className="App">
      <Header></Header>
      <main>
        <div class="container">
          <div class="row my-4 justify-content-md-center">
            <div class="col-10 px-6 my-3">
              <div
                id="carouselExampleCaptions"
                class="carousel slide"
                data-bs-ride="false"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="https://picsum.photos/id/425/900/400"
                      class="d-block w-100"
                      alt="..."
                    ></img>
                    <div class="carousel-caption d-none d-md-block">
                      <h5>All Organic Beans</h5>
                      <p>Farmed in the rich highlands of Belize.</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://picsum.photos/id/431/900/400"
                      class="d-block w-100"
                      alt="..."
                    ></img>
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Nature's Work of Art</h5>
                      <p>The best coffee experience awaits you.</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://picsum.photos/id/1060/900/400"
                      class="d-block w-100"
                      alt="..."
                    ></img>
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Skillfully Crafted</h5>
                      <p>
                        It means that much to us for you to have the best coffee
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div class="row justify-content-md-center">
            <div class="col">
              <div class="card" style={{ width: '18rem' }}>
                <img
                  src="https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2015/10/thumb_720_450_f_36.jpg"
                  class="card-img-top"
                  alt="..."
                ></img>
                <div class="card-body text-center">
                  <h5 class="card-title">Cafe Latte</h5>
                  <p class="card-text">
                    A latte is a coffee drink with espresso, steamed milk and a
                    layer of foam on top.
                  </p>
                  <div>
                    <ButtonDecrement onClickFunc={decrementCounterL} />
                    <Display message={counterL} />
                    <ButtonIncrement onClickFunc={incrementCounterL} />
                  </div>
                  <Provider template={AlertTemplate} {...options}>
                    <Alert />
                  </Provider>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style={{ width: '18rem' }}>
                <img
                  src="https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/FYHTISENURHMTIYJF4TSJ25DJE.jpg"
                  class="card-img-top"
                  alt="..."
                ></img>
                <div class="card-body text-center">
                  <h5 class="card-title">Cafe Espresso</h5>
                  <p class="card-text">
                    Espresso is a concentrated form of coffee served in small,
                    strong shots and is the base for many coffee drinks.
                  </p>
                  <div>
                    <ButtonDecrement onClickFunc={decrementCounterE} />
                    <Display message={counterE} />
                    <ButtonIncrement onClickFunc={incrementCounterE} />
                  </div>
                  <Provider template={AlertTemplate} {...options}>
                    <Alert />
                  </Provider>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style={{ width: '18rem' }}>
                <img
                  src="https://www.spoonfulofflavor.com/wp-content/uploads/2021/11/mocha-latte-recipe.jpg"
                  class="card-img-top"
                  alt="..."
                ></img>
                <div class="card-body text-center">
                  <h5 class="card-title">Cafe Mocha</h5>
                  <p class="card-text">
                    A caffè mocha also called mocaccino is a chocolate-flavoured
                    warm beverage that is a variant of a caffè latte commonly
                    served in a glass rather than a mug.
                  </p>
                  <div>
                    <ButtonDecrement onClickFunc={decrementCounterM} />
                    <Display message={counterM} />
                    <ButtonIncrement onClickFunc={incrementCounterM} />
                  </div>
                  <Provider template={AlertTemplate} {...options}>
                    <Alert />
                  </Provider>
                </div>
              </div>
            </div>
          </div>
          <div class="row my-5 justify-content-md-center">
            <div class="col">
              <div class="card" style={{ width: '18rem' }}>
                <img
                  src="https://www.roastycoffee.com/wp-content/uploads/Mocha-Cappuccino-Recipe-720x540.jpg"
                  class="card-img-top"
                  alt="..."
                ></img>
                <div class="card-body text-center">
                  <h5 class="card-title">Cafe Cappuccino</h5>
                  <p class="card-text">
                    A cappuccino is an Italian coffee drink that is
                    traditionally prepared with equal parts double espresso,
                    steamed milk, and steamed milk foam.
                  </p>
                  <div>
                    <ButtonDecrement onClickFunc={decrementCounterC} />
                    <Display message={counterC} />
                    <ButtonIncrement onClickFunc={incrementCounterC} />
                  </div>
                  <Provider template={AlertTemplate} {...options}>
                    <Alert />
                  </Provider>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style={{ width: '18rem' }}>
                <img
                  src="https://fluentincoffee.b-cdn.net/wp-content/uploads/2021/08/caffe-americano-in-a-glass.jpg"
                  class="card-img-top"
                  alt="..."
                ></img>
                <div class="card-body text-center">
                  <h5 class="card-title">Cafè Americano</h5>
                  <p class="card-text">
                    Caffè Americano is a type of coffee drink prepared by
                    diluting an espresso with hot water.
                  </p>
                  <div>
                    <ButtonDecrement onClickFunc={decrementCounterA} />
                    <Display message={counterA} />
                    <ButtonIncrement onClickFunc={incrementCounterA} />
                  </div>
                  <Provider template={AlertTemplate} {...options}>
                    <Alert />
                  </Provider>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style={{ width: '18rem' }}>
                <img
                  src="https://www.insidetherustickitchen.com/wp-content/uploads/2018/07/Untitled-design-500x500.jpg"
                  class="card-img-top"
                  alt="..."
                ></img>
                <div class="card-body text-center">
                  <h5 class="card-title">Cafe Affogato</h5>
                  <p class="card-text">
                    An affogato or more traditionally known as "affogato al
                    caffe" is an Italian coffee-based dessert.
                  </p>
                  <div>
                    <ButtonDecrement onClickFunc={decrementCounter} />
                    <Display message={counter} />
                    <ButtonIncrement onClickFunc={incrementCounter} />
                  </div>
                  <Provider template={AlertTemplate} {...options}>
                    <Alert />
                  </Provider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer></Footer>
    </div>
  )
}

export default App
