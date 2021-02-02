import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTo from "./ScrollTo";

/**
 * Easy peasy routing for react. Based on vue router.
 */
export default class GlassRouter {
    _defaultOptions = {
        routes: [],
        mode: "history",
        base: "/",
        linkActiveClass: "router-link-active",
        linkExactActiveClass: "router-link-exact-active",
        scrollBehavior: (savedPosition) => {
            const {x, y} = savedPosition;
            ScrollTo(x, y);
        },
        beforeEach: null,
    };

    _options = {};

    constructor(options) {
        this._options = {
            ...this._defaultOptions,
            ...options,
        };
    }

    /**
     * Generate JSX from defined routes
     */
    exportRoutes() {
        const { routes } = this._options;
        return (
            <Router>
                <ScrollTo />
                <Switch>
                    {routes.map((route) => {
                        let props = {};

                        if (route.component) {
                          props.component = route.component;
                        } else if (route.render) {
                          props.render = route.render;
                        }

                        return <Route
                            exact={route.exact || false}
                            path={route.path}
                            {...props}
                        />
                    })}
                </Switch>
            </Router>
        );
    }

    /**
     * Define middleware
     */
    beforeEach(cb) {
        this.beforeEach = cb;
    }

    /**
     * Navigate to a specific month
     */
    push(options) {}
}
