import GlassX from "./GlassX";

// import store modules
import home from "./../views/Home/store";
import login from "./../views/Login/store";

const store = new GlassX({
	modules: [home, login],
});

export default store;
