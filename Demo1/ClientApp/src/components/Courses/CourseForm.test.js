import { shallow } from "enzyme";
import CourseForm from "./CourseForm";

function setUp() {
  let component = shallow(<CourseForm />);
  return component;
}

describe("test render", () => {
  beforeEach(() => {
    setUp();
  });
  test("render snapshot", () => {});
  test("samples test", () => {
    expect(true).toBe(true);
  });
});
