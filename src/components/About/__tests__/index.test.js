// We need react to enable the components to function properly so we can test them.
import React from "react";
// Next, we'll retrieve some functions from the React Testing Library. The render function will do just what its name implies: "render" the component. What actually happens is that Jest creates a simulated DOM in a Node.js environment to approximate the DOM (no component is actually visibly rendered). The cleanup function is used to remove components from the DOM to prevent memory leaking, as well as variable or data collisions between tests that could corrupt test results.
import { render, cleanup } from "@testing-library/react";
// Next we will import the extend-expect library from the jest-dom package. jest-dom offers access to custom matchers that are used to test DOM elements.
import "@testing-library/jest-dom/extend-expect";
// Next we'll import the component we will be testing, which is the About component.
import About from "..";

// This will ensure that after each test, we won't have any leftover memory data that could give us false results.
afterEach(cleanup);

describe("About component", () => {
  // First Test. The first test will be the baseline to verify that the component is rendering. Notice in the preceding code block that we use the it function. In the first argument, a string declares what is being tested. In the second argument, a callback function runs the test. This is where we'll use the render function to render the About component using JSX. Alternatively, test can also be used interchangeably with it to create a test.
  it("renders", () => {
    render(<About />);
  });

  // Second Test. In the next test, also known as a "test case", we'll compare snapshot versions of the DOM node structure. A snapshot is a serialized version of the DOM node structure, enabled by Jest. In this test case, we'll use the asFragment function, which returns a snapshot of the About component.
  it("matches snapshot DOM node structure", () => {
    const { asFragment } = render(<About />);
    // In the next statement, we'll test and compare whether the expected and actual outcomes match. Use the expect function with a matcher to assert something about a value. In the following statement, we'll use the toMatchSnapshot matcher to assert that snapshots will match.
    expect(asFragment()).toMatchSnapshot();
  });
});
