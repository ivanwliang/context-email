import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { EmailContext } from "../EmailContext";
import MessageViewer from "../MessageViewer";

const email = {
  subject: "Black Friday!",
  body: "So many sales!"
};

test("View an email", () => {
  const { container } = render(
    <EmailContext.Provider value={{ currentEmail: email }}>
      <MessageViewer></MessageViewer>
    </EmailContext.Provider>
  );

  expect(container.querySelector("h2").textContent).toEqual(email.subject);
});

test("back button", () => {
  const mockCallback = jest.fn();
  const { container } = render(
    <EmailContext.Provider
      value={{ currentEmail: email, onSelectEmail: mockCallback }}
    >
      <MessageViewer></MessageViewer>
    </EmailContext.Provider>
  );
  fireEvent.click(container.querySelector("button"));
  expect(mockCallback).toBeCalledWith(null);
});
