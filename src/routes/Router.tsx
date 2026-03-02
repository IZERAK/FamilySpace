import { useNavigate } from "react-router";

const nav = useNavigate();

export default class Router {
  goAuth() {
    nav("/auth");
  }
  goReg() {
    nav("/reg");
  }
}
