import { Routes as DomRoutes, Route } from "react-router-dom";
import Customers from "./pages/Customers";

export enum DASHBOARD_ENUM {
  DASHBOARD = "/dashboard",
  PRODUCT = "/product",
  CUSTOMERS = "/customers",
  INCOME = "/income",
  PROMOTE = "/promote",
  HELP = "/help",
}

const Page = ({ namePage }: { namePage: string }) => (
  <main className="page">{namePage}</main>
);

export const Routes = () => (
  <DomRoutes>
    <Route path="/">
      <Route
        path={DASHBOARD_ENUM.DASHBOARD}
        element={<Page namePage="Dashboard" />}
      />
      <Route
        path={DASHBOARD_ENUM.PRODUCT}
        element={<Page namePage="Product" />}
      />
      <Route path={DASHBOARD_ENUM.CUSTOMERS} element={<Customers />} />

      <Route
        path={DASHBOARD_ENUM.INCOME}
        element={<Page namePage="Income" />}
      />
      <Route
        path={DASHBOARD_ENUM.PROMOTE}
        element={<Page namePage="Promote" />}
      />
      <Route path={DASHBOARD_ENUM.HELP} element={<Page namePage="Help" />} />
    </Route>

    <Route path="*" element={<main>Page not found</main>} />
  </DomRoutes>
);
