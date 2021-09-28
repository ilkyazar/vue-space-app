import { createRouter, createWebHistory } from "vue-router";
//import { Routes, SecureRoutes } from "@/router/routes";
import Routes from "@/router/routes/Routes";
import SecureRoutes from "@/router/routes/SecureRoutes";
import AuthRoutes from "@/router/routes/AuthRoutes";

const RootRoutes = new Routes();
const SecureChildRoutes = new SecureRoutes();
const AuthChildRoutes = new AuthRoutes();

const routes = [
  {
    ...RootRoutes.Home.generate(),
  },
  {
    ...RootRoutes.Auth.generate(),
    redirect: { name: AuthChildRoutes.Login.name },
    children: [
      {
        ...AuthChildRoutes.Login.generate(),
      },
      {
        ...AuthChildRoutes.ForgotPassword.generate(),
      },
      {
        ...AuthChildRoutes.SignUp.generate(),
      },
    ],
  },
  {
    ...RootRoutes.Secure.generate(),
    redirect: { name: SecureChildRoutes.Dashboard.name },
    children: [
      {
        ...SecureChildRoutes.Dashboard.generate(),
      },
      {
        ...SecureChildRoutes.AstronomyPictureList.generate(),
      },
      {
        ...SecureChildRoutes.AstronomyPicture.generate(),
      },
    ],
    meta: {
      isAuthenticationRequired: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  console.log("to: ", to);
  console.log("from: ", from);
  next();
  /*
  let isAuthenticated = true; // get from global state
  if (to.meta.isAuthenticationRequired && isAuthenticated) {
    next();
  }
  else if (to === 'login' && isAuthenticated) {
    next(from);
  }
  else {
    next("/login");
  }
  */
});

export default router;
