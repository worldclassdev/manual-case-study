import React, { useRef } from "react";
import { render } from "@testing-library/react";
import Question from "../components/Question";
import { Simulate } from "react-dom/test-utils";

const QuestionProps = {
  data: {
    question: "Which image best matches your hair loss?",
    type: "ChoiceType",
    options: [
      {
        '<img alt="Temples"     src="https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss%402x.png 2x" />':
          "Temples",
      },
      {
        '<img alt="Temples & Crown" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss%402 x.png 2x"/>':
          "Temples & Crown",
      },
      {
        '<img alt="Patchy" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss%402x.png 2x"/>':
          "Patchy",
      },
      {
        '<img alt="Moderate" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss%402x.pn g 2x" />':
          "Moderate",
      },
      {
        '<img alt="Extensive" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss%402x.pn g 2x"/>':
          "Extensive",
      },
      {
        '<img alt="Complete" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss.png"     srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss%402x.pn g 2x" />':
          "Complete",
      },
    ],
  },
  number: 1,
  activeQuestion: 1,
  handleSetResponse: jest.fn(() => {}),
  userResponses: {},
  activeRef: {
    current: {
      scrollIntoView: jest.fn(),
    },
  },
};

test("question is properly displayed to user", () => {
  const { getByText } = render(<Question {...QuestionProps} />);
  const questionNode = getByText(QuestionProps.data.question);
  expect(questionNode).toMatchSnapshot();
});

test("options are properly displayed to user", () => {
  const { getByTestId } = render(<Question {...QuestionProps} />);
  const optionsListNode = getByTestId("options-list");
  expect(optionsListNode).toMatchSnapshot();
});

test("user can click rendered options to set response", () => {
  const { getAllByTestId } = render(<Question {...QuestionProps} />);
  const optionNodes = getAllByTestId("option");
  optionNodes.forEach((option) => {
    Simulate.click(option);
  });
  expect(QuestionProps.handleSetResponse).toHaveBeenCalledTimes(6);
});
