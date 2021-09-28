class RouteGenerator {
  constructor(props) {
    const { name, path, componentFile } = props;
    this.name = name;
    this.path = path;
    this.componentFile = componentFile;
  }

  generate() {
    return {
      name: this.name,
      path: this.path,
      component: () => import(`@/views/${this.componentFile}.vue`),
    };
  }
}

export default RouteGenerator;
