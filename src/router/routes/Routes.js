import RouteGenerator from "@/router/RouteGenerator";

class Routes {
  Home = new RouteGenerator({
    name: "Home",
    path: "/",
    componentFile: "Home",
  });

  Secure = new RouteGenerator({
    name: "Secure",
    path: "/secure",
    componentFile: "Secure",
  });

  Auth = new RouteGenerator({
    name: "Auth",
    path: "/auth",
    componentFile: "Auth",
  });
}

export default Routes;
