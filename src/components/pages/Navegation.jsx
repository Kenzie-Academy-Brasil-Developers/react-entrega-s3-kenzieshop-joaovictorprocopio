import HomePage from "./HomePage";
import CartPage from "./CartPage";
import LoginPage from "./LogInPage";

import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Navigation() {
  const history = useHistory();

  return (
    <section>
      <header>
        <h1>Kenzie Shop</h1>
        <section>
          <button
            onClick={() => {
              history.push("/");
            }}
          >
            Pagina inicial
          </button>
          <button
            onClick={() => {
              history.push("/cart");
            }}
          >
            Carrinho
          </button>
          <button
            onClick={() => {
              history.push("/login");
            }}
          >
            Entrar
          </button>
        </section>
      </header>
      <main>
        <Switch>
          <Route exact path={"/"}>
            <HomePage />
          </Route>
          <Route exact path={"/cart"}>
            <CartPage />
          </Route>
          <Route exact path={"/login"}>
            <LoginPage />
          </Route>
        </Switch>
      </main>
    </section>
  );
}

export default Navigation;
