import { configure } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16/build";

configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true
});
