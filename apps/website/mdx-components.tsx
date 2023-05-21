import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // h1: ({ children }) => <h1>{children}</h1>,
    // h2: ({ children }) => <h2>{children}</h2>,
    // h3: ({ children }) => <h3>{children}</h3>,
    // h4: ({ children }) => <h4>{children}</h4>,
    // h5: ({ children }) => <h5>{children}</h5>,
    // h6: ({ children }) => <h6>{children}</h6>,
    // p: ({ children }) => <p>{children}</p>,
    ...components,
  }
}
