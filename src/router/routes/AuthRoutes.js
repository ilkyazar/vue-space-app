import RouteGenerator from "@/router/RouteGenerator";

class AuthRoutes {
  Login = new RouteGenerator({
    name: "Login",
    path: "/auth/login",
    componentFile: "Login",
  });
  ForgotPassword = new RouteGenerator({
    name: "ForgotPassword",
    path: "/auth/forgot-password",
    componentFile: "ForgotPassword",
  });
  SignUp = new RouteGenerator({
    name: "SignUp",
    path: "/auth/signup",
    componentFile: "SignUp",
  });
}

export default AuthRoutes;
