import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  })

  it("has the Control Panel when the application loads", () => {
    const element = screen.getByText("Control Panel");

    expect(element).toBeInTheDocument();
  })

  it("does not show the Answer when we first load", () => {
    const element = screen.queryByTestId("answer-label");

    expect(element).not.toBeInTheDocument();
  });

  it("does show a prompt when we first load", () => {
    const element = screen.getByText("Prompt");

    expect(element).toBeInTheDocument();
  });

  it("does show a 'Add new card' button when we first load", () => {
    const element = screen.getByText("Add new card");

    expect(element).toBeInTheDocument();
  });

  it("does show AddCardModel when we click the Add new card button", async () => {
    const button = screen.getByTestId("add-new-card-button");
    button.click();
    const element = await screen.getByText("Add New Card");
    expect(element).toBeInTheDocument();
  });

  it("does show the Answer when we click the reveal button", async () => {
    const button = screen.getByTestId("reveal-answer-button");
    button.click();
    const element = await screen.findByTestId("answer-label");
    expect(element).toBeInTheDocument();
  })
})
