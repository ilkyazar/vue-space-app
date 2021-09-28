import RouteGenerator from "@/router/RouteGenerator";

class SecureRoutes {
  Dashboard = new RouteGenerator({
    name: "Dashboard",
    path: "dashboard",
    componentFile: "Dashboard",
  });
  AstronomyPictureList = new RouteGenerator({
    name: "AstronomyPictureList",
    path: "astronomy-pictures",
    componentFile: "AstronomyPictureList",
  });
  AstronomyPicture = new RouteGenerator({
    name: "AstronomyPicture",
    path: "astronomy-pictures/:pictureid",
    componentFile: "AstronomyPicture",
  });
}

export default SecureRoutes;
