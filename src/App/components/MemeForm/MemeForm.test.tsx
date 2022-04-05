import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemeForm from './MemeForm';
import { DummyMeme } from '../interfaces/common';

describe('<MemeForm />', () => {
  test('it should mount', () => {
    render(<MemeForm currentMeme={DummyMeme} images={[]} onInputValueChange={() => {}} />);
    
    const memeForm = screen.getByTestId('MemeForm');

    expect(memeForm).toBeInTheDocument();
  });
});