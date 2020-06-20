/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react'
import { ProfileProvider } from './src/components/profile'

export const wrapRootElement = ({ element }) => {
  return (
    <ProfileProvider>
      {element}
    </ProfileProvider>
  )
}