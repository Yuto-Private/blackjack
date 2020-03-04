/* eslint-env jest */
import React from 'react'
import { render } from '@testing-library/react'

import App from '../index'

describe('With React Testing Library', () => {
    it('Shows "Hello world!"', () => {
        const { getByText } = render(<App />)

        expect(getByText('My page')).not.toBeNull()
    })
})
